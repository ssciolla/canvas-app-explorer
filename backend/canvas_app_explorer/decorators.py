import logging
from typing import Callable

from django.http import HttpRequest
from django.utils.html import escape


logger = logging.getLogger(__name__)


def escape_request_data(view_func: Callable[[HttpRequest], HttpRequest]):
    def wrapper(*args: HttpRequest, **kwargs):
        request = args[0]
        logger.debug(request.method)

        if request.method in ['GET', 'POST']:
            request_data_copy = getattr(request, request.method).copy()
            for key in request_data_copy:
                request_data_copy[key] = escape(request_data_copy[key])
            setattr(request, request.method, request_data_copy)
            logger.debug(getattr(request, request.method))

        return view_func(request)
    return wrapper
