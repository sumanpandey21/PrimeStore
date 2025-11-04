# views.py
from rest_framework import viewsets, status
from django.db.models import F
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.views import APIView
from .serializers import (
    RegisterSerializer,
    UserSerializer,
    ProductSerializer,
    CartSerializer,
    OrderSerializer,
    CategorySerializer,
    RatingSerializer,
    WishlistSerializer,
    CancellationSerializer,
    LogoSerializer,
)
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
)
from .filters import ProductFilter
from django_filters.rest_framework import DjangoFilterBackend
from .pagination import CustomLimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny


class RegisterViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            # Generate token & uid
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)

            # Create activation link (frontend URL, not API)
            activation_link = f"http://localhost:3000/activate/{uid}/{token}/"

            # Send email
            send_mail(
                subject="Confirm your email",
                message=f"Hi {user.username},\n\nClick the link to activate your account:\n{activation_link}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False,
            )

            return Response(
                {
                    "message": "User registered. Please check your email to confirm.",
                    "status": True,
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActivateUser(APIView):
    def get(self, request, uidb64, token):
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.is_active = True
            user.save()
            return Response({"message": "Account activated successfully"}, status=200)
        else:
            return Response({"error": "Invalid activation link"}, status=400)


class LoginViewSet(viewsets.ViewSet):
    def create(self, request):
        data = request.data
        username = data.get("username")
        password = data.get("password")
        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "access_token": str(refresh.access_token),
                    "refresh_token": str(refresh),
                }
            )
        return Response(
            {"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST
        )


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = {IsAuthenticated}

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter

    pagination_class = CustomLimitOffsetPagination

    def get_permissions(self):
        self.permission_classes = [AllowAny]
        if self.request.method in ["POST", "PUT", "PATCH", "DELETE"]:
            self.permission_classes = [IsAdminUser]

        return super().get_permissions()

    def get_queryset(self):
        qs = super().get_queryset()
        return qs.order_by(F("discount").desc(nulls_last=True))


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = CustomLimitOffsetPagination

    def get_queryset(self):
        return Cart.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=["delete"], url_path="clear")
    def clear(self, request):
        Cart.objects.filter(user=request.user).delete()
        return Response({"message": "All cart items removed."}, status=204)

    @action(detail=False, methods=["get"])
    def total(self, request):
        """Get total cart value"""
        queryset = self.get_queryset()
        total = sum(item.item_subtotal for item in queryset)
        return Response({"cart_total": total})

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        product = instance.product

        product.stock += instance.quantity
        product.save()

        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class WishlistViewSet(viewsets.ModelViewSet):
    serializer_class = WishlistSerializer
    queryset = Wishlist.objects.all()
    permission_classes = [IsAuthenticated]
    pagination_class = CustomLimitOffsetPagination

    def get_queryset(self):
        return Wishlist.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by("-created_at")

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(serializer.data, status=201)
        except Exception as e:
            raise


class RatingViewSet(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()


class CancellationViewSet(viewsets.ModelViewSet):
    serializer_class = CancellationSerializer
    queryset = Cancellation.objects.all()
    pagination_class = CustomLimitOffsetPagination
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cancellation.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        # Example: dynamica lly change default_limit
        paginator = self.pagination_class()
        paginator.default_limit = int(request.query_params.get("limit", 60))
        paginator.max_limit = 200  # optional override

        self.pagination_class = lambda: paginator  # reassign dynamically
        return super().list(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LogoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Logo.objects.all()
    serializer_class = LogoSerializer
