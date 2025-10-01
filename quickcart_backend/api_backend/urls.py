from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.http import JsonResponse

# Root API response
def api_root(request):
    return JsonResponse({'status': 'API Working', 'message': 'ALX Project Nexus API'})

# Swagger/OpenAPI schema view
schema_view = get_schema_view(
    openapi.Info(
        title="Quick Cart API",
        default_version='v1',
        description="API documentation for ALX Project Nexus GoCart",
        terms_of_service="https://www.example.com/terms/",
        contact=openapi.Contact(email="contact@example.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),  # include accounts URLs
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('health/', lambda request: JsonResponse({'status': 'healthy'}), name='health'),
]
