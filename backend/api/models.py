from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
import uuid


class User(AbstractUser):
    pass


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(
        max_digits=3, decimal_places=1, null=True, blank=True
    )
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="products"
    )
    stock = models.PositiveIntegerField()
    image1 = models.ImageField(upload_to="products/", null=True, blank=True)
    image2 = models.ImageField(upload_to="products/", null=True, blank=True)
    image3 = models.ImageField(upload_to="products/", null=True, blank=True)
    created_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name

    @property
    def final_price(self):
        if self.discount is not None and self.discount > 0:
            discount_multiplier = 1 - (self.discount / 100)
            return self.price * discount_multiplier

        return self.price

    @property
    def average_rating(self):
        ratings = self.ratings.all()
        if ratings.exists():
            return round(sum(r.rating for r in ratings) / ratings.count(), 1)
        return 0.0


class Rating(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user_ratings"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_ratings"
    )
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    comment = models.TextField(max_length=200, null=True, blank=True)

    class Meta:
        unique_together = ("user", "product")

    def __str__(self):
        return f"{self.product.name} - {self.rating} by {self.user.username}"


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_carts")
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_carts"
    )
    quantity = models.PositiveIntegerField()

    @property
    def item_subtotal(self):
        return self.product.price * self.quantity

    def __str__(self):
        return f"{self.user.username}'s Cart - {self.product.name}"


class Wishlist(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user_wishlists"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_wishlists"
    )

    def __str__(self):
        return f"{self.user.username} - {self.product.name}"


class Order(models.Model):
    DELIVERY_STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("APPROVED", "Approved"),
        ("DELIVERED", "Delivered"),
        ("CANCELLED", "Cancelled"),
    ]

    PAYMENT_STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("PAID", "Paid"),
        ("REFUNDED", "Refunded"),
    ]

    order_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_orders")
    full_name = models.CharField(max_length=255, null=True, blank=True)
    province = models.CharField(max_length=255, null=True, blank=True)
    district = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    delivery_charge = models.PositiveIntegerField(null=True, blank=True)
    total_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True
    )

    carts = models.ManyToManyField(Cart, related_name="cart_orders", blank=True)

    delivery_status = models.CharField(
        max_length=10, choices=DELIVERY_STATUS_CHOICES, default="PENDING"
    )
    payment_status = models.CharField(
        max_length=10, choices=PAYMENT_STATUS_CHOICES, default="PENDING"
    )
    payment_method = models.CharField(max_length=50, null=True, blank=True)

    created_at = models.DateTimeField()

    def __str__(self):
        return f"Order {self.order_id} - {self.user}"


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, related_name="order_items", on_delete=models.CASCADE
    )
    product = models.ForeignKey(
        Product, on_delete=models.SET_NULL, null=True, blank=True
    )
    product_name = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    product_image1 = models.ImageField(upload_to="orders/", null=True, blank=True)

    def __str__(self):
        return f"{self.product_name} x {self.quantity}"


class Cancellation(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user", null=True, blank=True
    )
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="cancellations",
    )
    order_item = models.ForeignKey(
        OrderItem,
        on_delete=models.CASCADE,
        related_name="cancellations",
        null=True,
        blank=True,
        help_text="If null, it means entire order was cancelled",
    )
    canceled_quantity = models.PositiveIntegerField(null=True, blank=True)
    reason = models.CharField(
        max_length=50,
        default="CUSTOMER_REQUEST",
    )
    cancelled_at = models.DateTimeField()

    def __str__(self):
        if self.order_item:
            return (
                f"Cancelled {self.canceled_quantity} of {self.order_item.product_name}"
            )
        return f"Cancelled entire order {self.order.order_id}"


def validate_svg(file):
    if not file.name.endswith(".svg"):
        raise ValidationError("Only SVG files are allowed.")


class Logo(models.Model):
    logo = models.FileField(
        upload_to="logo/", validators=[validate_svg], null=True, blank=True
    )

    class Meta:
        verbose_name_plural = "Logo"
