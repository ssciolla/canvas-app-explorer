import json, logging

from django.contrib.auth.models import User
from django.http import HttpRequest, JsonResponse
from django.test import RequestFactory, TestCase


from .decorators import escape_request_data


logger = logging.getLogger(__name__)


def test_view_function(request: HttpRequest) -> JsonResponse:
    """
    Basic test view function that returns request data as JSON for GET and POST,
    or an empty JSON response for other methods.
    """

    if request.method in ['GET', 'POST']:
        return JsonResponse(getattr(request, request.method))
    return JsonResponse({})


class TestEscapeRequestDataDecorator(TestCase):
    """
    Unit tests for escape_request_data
    """

    test_script = "<script>alert('hello!')</script>"

    def setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_user(
            username='test_user',
            password='test_user_password'
        )

    def test_decorator_escapes_get_script(self):
        request = self.factory.get(f'/test/?test_param={self.test_script}')
        decorated_func = escape_request_data(test_view_function)
        response = decorated_func(request)
        self.assertNotIn('<script>', json.loads(response.content)['test_param'])

    def test_decorator_escapes_post_script(self):
        request = self.factory.post(f'/test/?test_param={self.test_script}')
        decorated_func = escape_request_data(test_view_function)
        response = decorated_func(request)
        self.assertNotIn('<script>', json.loads(response.content)['test_param'])
