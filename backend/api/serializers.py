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


class UserSerilizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "email"]


class ProductSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class CategorySerilizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CartSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"


class WishlistSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = "__all__"


class CheckoutSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Checkout
        fields = "__all__"


class OrderSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"


class RatingSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"


class CancellationSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Cancellation
        fields = "__all__"
