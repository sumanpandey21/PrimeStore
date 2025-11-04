from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.routers import DefaultRouter
from api.views import (
    RegisterViewSet,
    LoginViewSet,
    ActivateUser,
    ProductViewSet,
    CartViewSet,
    CategoryViewSet,
    CancellationViewSet,
    UserViewSet,
    OrderViewSet,
    WishlistViewSet,
    RatingViewSet,
    LogoViewSet,
)

from django.conf.urls.static import static
from django.conf import settings

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

schema_view = get_schema_view(
    openapi.Info(
        title="My API",
        default_version="v1",
        description="API documentation for my project",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
router.register("register", RegisterViewSet, basename="register")
router.register("login", LoginViewSet, basename="login"),
router.register("categories", CategoryViewSet, basename="categories")
router.register("products", ProductViewSet, basename="products")
router.register("carts", CartViewSet, basename="carts")
router.register("orders", OrderViewSet, basename="orders")
router.register("cancellations", CancellationViewSet, basename="cancellations")
router.register("wishlists", WishlistViewSet, basename="wishlists")
router.register("ratings", RatingViewSet, basename="ratings")
router.register("users", UserViewSet, basename="users")
router.register("logo", LogoViewSet, basename="logo")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("activate/<uidb64>/<token>/", ActivateUser.as_view(), name="activate"),
    re_path(
        r"^swagger(?P<format>\.json|\.yaml)$",
        schema_view.without_ui(cache_timeout=0),
        name="schema-json",
    ),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
