from django.contrib import admin
from .models import Product
from django.utils.html import format_html
from .models import (
    User,
    Category,
    Product,
    Cart,
    Wishlist,
    Checkout,
    Order,
    Cancellation,
    Rating,
)


class RatingInline(admin.TabularInline):
    model = Rating
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "category",
        "price",
        "stock",
        "discount",
        "final_price",
        "average_rating",
        "image_tag",
    )
    list_filter = ("category",)
    search_fields = ("name",)
    inlines = [RatingInline]

    def image_tag(self, obj):
        if obj.image1:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit;"/>',
                obj.image1.url,
            )
        return "No Image"

    image_tag.short_description = "Image"


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "user",
        "product",
        "product_image",
        "created_at",
        "delivery_status",
        "payment_status",
    )
    list_filter = ("delivery_status", "payment_status")

    def product_image(self, obj):
        if obj.product.image1:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit:cover;"/>',
                obj.product.image1.url,
            )
        return "No Image"

    product_image.short_description = "Product Image"


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ("id", "product", "user", "rating")
    list_filter = ("rating",)
    search_fields = ("product__name", "user__username")


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name")


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "product", "quantity", "get_final_price")

    def get_final_price(self, obj):
        return obj.product.final_price

    get_final_price.short_description = "Final Price"


@admin.register(Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "product")


@admin.register(Checkout)
class CheckoutAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "user",
        "full_name",
        "contact_number",
        "address",
        "delivery_charge",
        "total_price",
    )


@admin.register(Cancellation)
class CancellationAdmin(admin.ModelAdmin):
    list_display = ("id", "order", "created_at")


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email")
