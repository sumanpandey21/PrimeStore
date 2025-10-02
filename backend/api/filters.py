import django_filters
from .models import Product

class ProductFilter(django_filters.FilterSet):
    # custom filter example
    price__gte = django_filters.NumberFilter(field_name="price", lookup_expr="gte")
    price__lte = django_filters.NumberFilter(field_name="price", lookup_expr="lte")

    class Meta:
        model = Product
        fields = ['category']  # fields you want to filter directly
