from django.contrib import admin
from .models import Product
from django.utils.html import format_html
from .models import (
    User,
    Category,
    Product,
    Cart,
    Wishlist,
    Order,
    OrderItem,
    Cancellation,
    Rating,
    Logo,
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
    list_per_page = 10

    def image_tag(self, obj):
        if obj.image1:
            return format_html(
                '<img src="{}" width="50" height="50" style="object-fit;"/>',
                obj.image1.url,
            )
        return "No Image"

    image_tag.short_description = "Image"


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


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email")


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ("product_name", "quantity", "price", "product_id")
    can_delete = False


@admin.register(Cancellation)
class CancellationAdmin(admin.ModelAdmin):
    list_display = (
        "order_id_display",
        "user_display",
        "order_status_display",
        "order_item_display",
        "canceled_quantity",
        "cancelled_at",
    )
    list_filter = (
        "cancelled_at",
        "order__delivery_status",
        "order__user",
    )
    search_fields = (
        "order__order_id",
        "order__user__username",
        "order_item__product__name",
    )
    ordering = ("-cancelled_at",)
    list_per_page = 15

    @admin.display(description="Order ID")
    def order_id_display(self, obj):
        return str(obj.order.order_id) if obj.order else "—"

    @admin.display(description="User")
    def user_display(self, obj):
        return obj.order.user.username if obj.order and obj.order.user else "—"

    @admin.display(description="Order Status")
    def order_status_display(self, obj):
        return obj.order.delivery_status if obj.order else "—"

    @admin.display(description="Order Item")
    def order_item_display(self, obj):
        if obj.order_item:
            product_name = obj.order_item.product_name
            return format_html(f"<strong>{product_name}</strong>")
        return "Entire Order Cancelled"


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "order_id",
        "user",
        "full_name",
        "total_price",
        "delivery_status",
        "payment_status",
        "created_at",
    )
    list_filter = (
        "delivery_status",
        "payment_status",
        "province",
        "created_at",
    )
    list_per_page = 15
    search_fields = (
        "user__username",
        "full_name",
        "phone_number",
        "order_id",
    )
    list_editable = (
        "delivery_status",
        "payment_status",
    )
    readonly_fields = (
        "created_at",
        "order_id",
    )
    fieldsets = (
        (
            "Customer Information",
            {
                "fields": (
                    "user",
                    "full_name",
                    "phone_number",
                )
            },
        ),
        (
            "Address",
            {
                "fields": (
                    "province",
                    "district",
                    "city",
                )
            },
        ),
        (
            "Order Details",
            {
                "fields": (
                    "total_price",
                    "delivery_charge",
                    "carts",
                )
            },
        ),
        (
            "Payment & Delivery",
            {
                "fields": (
                    "payment_status",
                    "payment_method",
                    "order_id",
                    "delivery_status",
                )
            },
        ),
        (
            "Timestamps",
            {
                "fields": ("created_at",),
            },
        ),
    )
    ordering = ("-created_at",)

    inlines = [OrderItemInline]


@admin.register(Logo)
class LogoAdmin(admin.ModelAdmin):
    list_display = ("id", "logo")
