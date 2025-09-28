from django.db import models
from django.contrib.auth.models import AbstractUser


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


class Checkout(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user_checkouts"
    )
    cart = models.ForeignKey(
        Cart, on_delete=models.CASCADE, related_name="cart_checkouts"
    )
    address = models.CharField(max_length=255)
    delivery_charge = models.PositiveIntegerField()
    full_name = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=15)

    @property
    def total_price(self):
        return self.cart.item_subtotal + self.delivery_charge

    def __str__(self):
        return f"Checkout by {self.user.username}"


class Order(models.Model):
    DELIVERY_STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("APPROVED", "Approved"),
        ("DELIVERED", "Delivered"),
    ]

    PAYMENT_STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("PAID", "Paid"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_orders")
    checkout = models.ForeignKey(
        Checkout, on_delete=models.DO_NOTHING, related_name="checkout_orders"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_orders"
    )
    created_at = models.DateTimeField()
    delivery_status = models.CharField(
        max_length=9, choices=DELIVERY_STATUS_CHOICES, default="PENDING"
    )
    payment_status = models.CharField(
        max_length=7, choices=PAYMENT_STATUS_CHOICES, default="PENDING"
    )

    def __str__(self):
        return f"Order {self.id} - {self.user.username}"


class Cancellation(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.DO_NOTHING, related_name="order_cancellations"
    )
    created_at = models.DateTimeField()

    def __str__(self):
        return f"Cancellation of Order {self.order.id}"
