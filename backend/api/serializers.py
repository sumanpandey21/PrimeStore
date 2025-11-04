from django.db import transaction
from django.db.models import F
from django.utils import timezone
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    Product,
    Cart,
    Category,
    Cancellation,
    Order,
    Wishlist,
    Rating,
    User,
    Logo,
    OrderItem,
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
        fields = ["id", "username", "email"]


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
    product_name = serializers.CharField(source="product.name", read_only=True)
    product_image1 = serializers.ImageField(source="product.image1", read_only=True)
    final_price = serializers.DecimalField(
        source="product.final_price", max_digits=10, decimal_places=2, read_only=True
    )
    username = serializers.CharField(source="user.username", read_only=True)
    product_stock = serializers.IntegerField(source="product.stock", read_only=True)

    class Meta:
        model = Wishlist
        fields = (
            "id",
            "user",
            "product",
            "username",
            "product_name",
            "product_image1",
            "final_price",
            "product_stock",
        )
        read_only_fields = (
            "id",
            "user",
            "username",
            "product_name",
            "product_image1",
            "final_price",
            "product_stock",
        )

    def create(self, validated_data):
        user = validated_data["user"]
        product = validated_data["product"]
        quantity = validated_data.get("quantity", 1)

        return super().create(validated_data)


class OrderItemSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = OrderItem
        fields = [
            "id",
            "product_id",
            "product_name",
            "quantity",
            "price",
            "product_image1",
        ]


class OrderSerializer(serializers.ModelSerializer):
    order_id = serializers.UUIDField(read_only=True)
    cart_items = serializers.ListField(write_only=True)
    order_items = OrderItemSerializer(many=True, read_only=True)
    payment_method = serializers.CharField(
        required=False, allow_null=True, allow_blank=True
    )

    class Meta:
        model = Order
        fields = [
            "order_id",
            "user",
            "full_name",
            "province",
            "district",
            "city",
            "phone_number",
            "delivery_status",
            "payment_status",
            "created_at",
            "payment_method",
            "delivery_charge",
            "total_price",
            "cart_items",
            "order_items",
        ]
        read_only_fields = [
            "order_id",
            "delivery_status",
            "payment_status",
            "created_at",
        ]

    def create(self, validated_data):
        user = self.context["request"].user
        user_carts = Cart.objects.filter(user=user)

        with transaction.atomic():
            order = Order.objects.create(
                user=user,
                full_name=validated_data.get("full_name"),
                province=validated_data.get("province"),
                district=validated_data.get("district"),
                city=validated_data.get("city"),
                phone_number=validated_data.get("phone_number"),
                payment_method=validated_data.get("payment_method"),
                delivery_charge=validated_data.get("delivery_charge"),
                created_at=timezone.now(),
            )

            total_price = 0

            for cart in user_carts:
                product = cart.product

                if product.stock < cart.quantity:
                    raise serializers.ValidationError(
                        f"Not enough stock for product {product.name}"
                    )

                # reduce stock
                product.save()

                # create OrderItem
                OrderItem.objects.create(
                    order=order,
                    product=product,
                    product_name=product.name,
                    product_image1=product.image1,
                    quantity=cart.quantity,
                    price=product.final_price,
                )

                total_price += product.final_price * cart.quantity

                # set total price

                order.total_price = total_price + (order.delivery_charge or 0)
                order.save()

        return order


class CancellationSerializer(serializers.ModelSerializer):
    order_id = serializers.UUIDField(source="order.order_id", read_only=True)
    user = serializers.CharField(source="order.user.username", read_only=True)
    order_status = serializers.CharField(source="order.delivery_status", read_only=True)

    order_item = serializers.PrimaryKeyRelatedField(
        queryset=OrderItem.objects.all(), required=False, allow_null=True
    )
    product_id = serializers.IntegerField(
        source="order_item.product.id", read_only=True
    )
    order_item_name = serializers.CharField(
        source="order_item.product.name", read_only=True
    )
    order_item_quantity = serializers.IntegerField(
        source="order_item.quantity", read_only=True
    )
    product_image = serializers.ImageField(
        source="order_item.product.image1", read_only=True
    )
    product_price = serializers.DecimalField(
        source="order_item.price", max_digits=10, decimal_places=2, read_only=True
    )

    class Meta:
        model = Cancellation
        fields = [
            "id",
            "order",
            "order_id",
            "user",
            "order_status",
            "product_id",
            "order_item",
            "order_item_name",
            "order_item_quantity",
            "product_image",
            "product_price",
            "canceled_quantity",
            "cancelled_at",
        ]
        read_only_fields = [
            "id",
            "order_id",
            "user",
            "product_id",
            "order_status",
            "order_item_name",
            "order_item_quantity",
            "product_image",
            "product_price",
        ]

    def validate(self, attrs):
        user = self.context["request"].user
        order = attrs.get("order")
        order_item = attrs.get("order_item")
        canceled_quantity = attrs.get("canceled_quantity", 1)

        if not order:
            raise serializers.ValidationError("Order is required.")

        # Full order cancellation
        if not order_item:
            if order.delivery_status != "PENDING":
                raise serializers.ValidationError(
                    "Only pending orders can be cancelled."
                )
            attrs["canceled_quantity"] = 0
            return attrs

        # Partial item cancellation
        if canceled_quantity <= 0:
            raise serializers.ValidationError(
                "Canceled quantity must be greater than 0."
            )

        if canceled_quantity > order_item.quantity:
            raise serializers.ValidationError(
                f"Cannot cancel more than {order_item.quantity} for this item."
            )

        if order.delivery_status != "PENDING":
            raise serializers.ValidationError(
                "Only items from pending orders can be cancelled."
            )

        return attrs

    def create(self, validated_data):
        user = self.context["request"].user
        order = validated_data["order"]
        order_item = validated_data.get("order_item")
        canceled_quantity = validated_data.get("canceled_quantity", 1)
        cancelled_at = validated_data.get("cancelled_at") or timezone.now()

        # --- Full Order Cancellation ---
        if not order_item:
            last_cancellation = None

            for item in order.order_items.all():  # use .items (as per related_name)
                product = item.product
                product.stock += item.quantity
                product.save()

                last_cancellation = Cancellation.objects.create(
                    user=user,
                    order=order,
                    order_item=item,
                    canceled_quantity=item.quantity,
                    cancelled_at=cancelled_at,
                )

                item.quantity = 0
                item.save(update_fields=["quantity"])

            order.delivery_status = "CANCELLED"
            order.save(update_fields=["delivery_status"])
            return last_cancellation

        # --- Partial Item Cancellation ---
        product = order_item.product
        product.stock += canceled_quantity
        product.save()

        order_item.quantity -= canceled_quantity
        order_item.save(update_fields=["quantity"])

        cancellation = Cancellation.objects.create(
            user=user,
            order=order,
            order_item=order_item,
            canceled_quantity=canceled_quantity,
            cancelled_at=cancelled_at,
        )

        if all(item.quantity == 0 for item in order.order_items.all()):
            order.delivery_status = "CANCELLED"
            order.save()

        return cancellation


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = "__all__"


class LogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Logo
        fields = ["id", "logo"]
