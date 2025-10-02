from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    Product,
    Cart,
    Checkout,
    Category,
    Cancellation,
    Order,
    Wishlist,
    Rating,
    User,
)


class RegisterSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(write_only=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ["username", "email", "password", "password2"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "An account with this email already exists."
            )
        return value

    def validate(self, data):
        if len(data["password"]) < 8:
            raise serializers.ValidationError(
                "Password must be at least 8 characters long."
            )

        if data["password"] != data["password2"]:
            raise serializers.ValidationError("Password must match")

        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        user.is_active = False
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email"]


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class CartSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)
    product_image1 = serializers.ImageField(source="product.image1", read_only=True)
    product_stock = serializers.IntegerField(source="product.stock", read_only=True)
    final_price = serializers.DecimalField(
        source="product.final_price", max_digits=10, decimal_places=2, read_only=True
    )
    username = serializers.CharField(source="user.username", read_only=True)
    item_subtotal = serializers.SerializerMethodField(read_only=True)
    available_stock = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Cart
        fields = (
            "id",
            "user",
            "product",
            "username",
            "product_name",
            "product_stock",
            "available_stock",
            "quantity",
            "final_price",
            "product_image1",
            "item_subtotal",
        )
        read_only_fields = (
            "id",
            "user",
            "username",
            "product_name",
            "final_price",
            "product_stock",
            "available_stock",
            "product_image1",
            "item_subtotal",
        )

    def get_item_subtotal(self, obj):
        return obj.product.final_price * obj.quantity

    def get_available_stock(self, obj):
        return obj.product.stock + obj.quantity

    def create(self, validated_data):
        user = validated_data["user"]
        product = validated_data["product"]
        quantity = validated_data.get("quantity", 1)

        # merge duplicate items
        cart_item, created = Cart.objects.get_or_create(
            user=user, product=product, defaults={"quantity": 0}
        )

        if created:
            # If new cart item
            if quantity > product.stock:
                raise serializers.ValidationError(
                    f"Requested quantity ({quantity}) exceeds available stock ({product.stock})"
                )
            cart_item.quantity = quantity
            product.stock -= quantity
            cart_item.save()
            product.save()
        else:
            # If item already exists, increase quantity
            additional_quantity = quantity
            if (
                cart_item.quantity + additional_quantity
                > product.stock + cart_item.quantity
            ):
                raise serializers.ValidationError(
                    f"Requested quantity exceeds available stock"
                )

            cart_item.quantity += additional_quantity
            product.stock -= additional_quantity
            cart_item.save()
            product.save()

        return cart_item


    def update(self, instance, validated_data):
        product = instance.product
        new_quantity = validated_data.get("quantity", instance.quantity)
        quantity_difference = new_quantity - instance.quantity

        if quantity_difference > 0:  # user is increasing
            available_stock = product.stock  # DB stock left

            if available_stock < quantity_difference:
                raise serializers.ValidationError("Not enough stock available")

            # reduce actual DB stock
            product.stock -= quantity_difference

        elif quantity_difference < 0:  # user is decreasing
            # return stock to DB
            product.stock += abs(quantity_difference)

        instance.quantity = new_quantity
        product.save()
        instance.save()
        return instance


class WishlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wishlist
        fields = "__all__"


class CheckoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checkout
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"


class CancellationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancellation
        fields = "__all__"
