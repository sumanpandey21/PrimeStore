import django_filters
from .models import Product
from django.db import models
from datetime import timedelta
from django.utils import timezone

class ProductFilter(django_filters.FilterSet):
    price__gte = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    price__lte = django_filters.NumberFilter(field_name="price", lookup_expr="lte")
    has_discount = django_filters.BooleanFilter(
        field_name="discount", method="filter_has_discount"
    )
    is_new = django_filters.BooleanFilter(method="filter_is_new")

    class Meta:
        model = Product
        fields = ["category"]

    def filter_has_discount(self, queryset, name, value):
        if value:
            return queryset.filter(discount__isnull=False).exclude(discount=0)
        else:
            return queryset.filter(
                models.Q(discount__isnull=True) | models.Q(discount=0)
            )

    def filter_is_new(self, queryset, name, value):
        """Products added in the last 30 days"""
        if value:
            last_15_days = timezone.now() - timedelta(days=15)
            return queryset.filter(created_at__gte=last_15_days)
        return queryset