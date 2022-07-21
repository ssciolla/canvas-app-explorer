import logging, random, string, urllib.parse
from collections import namedtuple
from datetime import datetime
from enum import Enum
from typing import Any, Dict, Union

from django.conf import settings
from django.contrib.auth import login as django_login
from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.http import HttpRequest, HttpResponse, HttpResponseForbidden, JsonResponse
from django.shortcuts import redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from pylti1p3.contrib.django import DjangoOIDCLogin, DjangoMessageLaunch, \
    DjangoCacheDataStorage, DjangoDbToolConf


logger = logging.getLogger(__name__)


class CanvasRole(Enum):
    ACCOUNT_ADMIN = 'Account Admin'
    SUB_ACCOUNT_ADMIN = 'Sub-Account Admin'
    TEACHER = 'TeacherEnrollment'


STAFF_COURSE_ROLES = [CanvasRole.ACCOUNT_ADMIN.value, CanvasRole.SUB_ACCOUNT_ADMIN.value, CanvasRole.TEACHER.value]

COURSE_MEMBERSHIP = 'http://purl.imsglobal.org/vocab/lis/v2/membership'
DUMMY_CACHE = 'DummyCache'

TOOL_CONF = DjangoDbToolConf()


# do not require deployment ids if LTI_CONFIG_DISABLE_DEPLOYMENT_ID_VALIDATION is true
class ExtendedDjangoMessageLaunch(DjangoMessageLaunch):
    def validate_deployment(self):
        if settings.LTI_CONFIG_DISABLE_DEPLOYMENT_ID_VALIDATION:
            return self

        return super().validate_deployment()


def lti_error(error_message: Any) -> JsonResponse:
    """
    Log an error message and return a JSON response with HTTP status 500.

    :param error_message: `Any` type is allowed so objects may be used
    :return: JsonResponse, with status 500
    """
    logger.error(f'LTI error: {error_message}')
    return JsonResponse({'lti_error': f'{error_message}'}, status=500)


def generate_jwks() -> Dict[str, list]:
    return TOOL_CONF.get_jwks()


def get_jwks(_: Any) -> JsonResponse:
    """
    Return JWKS generated by `pylti1p3`, based on public key

    :param _: Django passes a Request object, but this method doesn't use it.
    :return: `JsonResponse` containing JWKS or error message.
    """
    try:
        jwks = generate_jwks()
    except Exception as e:
        return lti_error(e)
    return JsonResponse(jwks)


def generate_config_json(request: HttpRequest) -> \
        Union[HttpResponse, JsonResponse]:
    parameters = {
        'timestamp': datetime.now().isoformat(),
        'host': request.get_host(),
        'base_url': urllib.parse.urlunsplit(
            [request.scheme, request.get_host()] + 3 * ['']),
        'login_url_suffix': reverse('lti_login'),
        'launch_url_suffix': reverse('lti_launch'),
        'jwks_url_suffix': reverse('lti_get_jwks'),
    }

    template_path = 'templates/lti_config_template.json'

    logger.debug(f'template_path: "{template_path}"')

    template_contents: str
    try:
        with open(template_path, 'r') as template_file:
            template_contents = template_file.read()
    except OSError as error:
        return lti_error('Error reading LTI template file '
                         f'"{template_path}": ({error})')

    config_json: str
    try:
        config_json = template_contents % parameters
    except KeyError as error:
        return lti_error('Error filling in LTI template from '
                         f'"{template_path}": ({error})')

    return HttpResponse(config_json, content_type='application/json')


def get_cache_config():
    CacheConfig = namedtuple('CacheConfig', ['is_dummy_cache', 'launch_data_storage', 'cache_lifetime'])
    is_dummy_cache = DUMMY_CACHE in settings.DB_CACHE_CONFIGS['BACKEND']
    launch_data_storage = DjangoCacheDataStorage(cache_name='default') if not is_dummy_cache else None
    cache_ttl = settings.DB_CACHE_CONFIGS['CACHE_TTL']
    cache_lifetime = cache_ttl if cache_ttl else 7200
    return CacheConfig(is_dummy_cache, launch_data_storage, cache_lifetime)


def create_user_in_django(request: HttpRequest, message_launch: ExtendedDjangoMessageLaunch):
    launch_data = message_launch.get_launch_data()
    logger.debug(f'lti launch data {launch_data}')
    custom_params = launch_data['https://purl.imsglobal.org/spec/lti/claim/custom']
    logger.debug(f'lti_custom_param {custom_params}')
    if not custom_params:
        raise Exception(
            f'You need to have custom parameters configured on your LTI Launch. Please see the LTI installation guide on the Github Wiki for more information.'
        )
    course_name = launch_data['https://purl.imsglobal.org/spec/lti/claim/context']['title']
    roles = launch_data['https://purl.imsglobal.org/spec/lti/claim/roles']
    username = custom_params['user_username']
    course_id = custom_params['canvas_course_id']
    course_roles = custom_params['canvas_course_roles'].split(',')

    if 'email' not in launch_data.keys():
        logger.warn('An instructor/admin likely launched the tool using Student View (Test Student).')
        error_message = 'Student View is not available for Canvas App Explorer.'
        raise PermissionDenied(error_message)

    staff_course_roles = [course_role for course_role in course_roles if course_role in STAFF_COURSE_ROLES]
    user_is_course_staff = len(staff_course_roles) > 0

    if not user_is_course_staff:
        logger.warn(f'User {username} does not have a staff role.')
        error_message = 'You must be an instructor in this course or an administrator to access this tool.'
        raise PermissionDenied(error_message)

    email = launch_data['email']
    first_name = launch_data['given_name']
    last_name = launch_data['family_name']
    full_name = launch_data['name']
    user_sis_id = launch_data['https://purl.imsglobal.org/spec/lti/claim/lis']['person_sourcedid']

    # Add user to DB if not there; avoids Django redirection to login page
    try:
        user_obj = User.objects.get(username=username)
        # update
        user_obj.first_name = first_name
        user_obj.last_name = last_name
        user_obj.email = email
        user_obj.save()
    except User.DoesNotExist:
        password = ''.join(random.sample(string.ascii_letters, settings.RANDOM_PASSWORD_DEFAULT_LENGTH))
        user_obj = User.objects.create_user(username=username, email=email, password=password, first_name=first_name,
                                            last_name=last_name)
    user_obj.backend = 'django.contrib.auth.backends.ModelBackend'
    django_login(request, user_obj)

    if course_id is not None and isinstance(course_id, int):
        request.session['course_id'] = course_id
    else:
        raise Exception('The canvas_course_id custom LTI variable must be configured.')


@csrf_exempt
def login(request):
    target_link_uri = request.POST.get('target_link_uri', request.GET.get('target_link_uri'))
    if not target_link_uri:
        error_message = 'LTI Login failed due to missing "target_link_uri" param'
        return lti_error(error_message)
    CacheConfig = get_cache_config()
    oidc_login = DjangoOIDCLogin(request, TOOL_CONF, launch_data_storage=CacheConfig.launch_data_storage)
    return oidc_login.enable_check_cookies().redirect(target_link_uri)


@require_POST
@csrf_exempt
def launch(request):
    CacheConfig = get_cache_config()
    message_launch = ExtendedDjangoMessageLaunch(request, TOOL_CONF, launch_data_storage=CacheConfig.launch_data_storage)
    if not CacheConfig.is_dummy_cache:
        # fetch platform's public key from cache instead of calling the API will speed up the launch process
        message_launch.set_public_key_caching(CacheConfig.launch_data_storage,
                                              cache_lifetime=CacheConfig.cache_lifetime)
    else:
        logger.info('DummyCache is set up, recommended atleast to us Mysql DB cache for LTI advantage services')

    # TODO: Implement custom AUTHENTICATION_BACKEND rather than using this one
    try:
        create_user_in_django(request, message_launch)
    except PermissionDenied as e:
        message = f': {e.args[0]}' if len(e.args) >= 1 else ''
        return HttpResponseForbidden('Permission denied' + message)

    url = reverse('home')
    return redirect(url)
