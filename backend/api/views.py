# views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
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
    UserSerilizer,
    ProductSerilizer,
    CartSerilizer,
    CheckoutSerilizer,
    OrderSerilizer,
    CategorySerilizer,
    RatingSerilizer,
    WishlistSerilizer,
    CancellationSerilizer,
)
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
    serializer_class = UserSerilizer
    queryset = User.objects.all()


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerilizer
    queryset = Product.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerilizer
    queryset = Category.objects.all()


class CartViewSet(viewsets.ModelViewSet):
    serializer_class = CartSerilizer
    queryset = Cart.objects.all()


class WishlistViewSet(viewsets.ModelViewSet):
    serializer_class = WishlistSerilizer
    queryset = Wishlist.objects.all()


class CheckoutViewSet(viewsets.ModelViewSet):
    serializer_class = CheckoutSerilizer
    queryset = Checkout.objects.all()


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerilizer
    queryset = Order.objects.all()


class RatingViewSet(viewsets.ModelViewSet):
    serializer_class = RatingSerilizer
    queryset = Rating.objects.all()


class CancellationViewSet(viewsets.ModelViewSet):
    serializer_class = CancellationSerilizer
    queryset = Cancellation.objects.all()
