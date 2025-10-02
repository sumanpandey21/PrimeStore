from rest_framework.pagination import LimitOffsetPagination

class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10   # default items per page
    max_limit = 100      # maximum items client can request
