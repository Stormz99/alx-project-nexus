from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

app_name = "accounts"  # optional but recommended

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('check/', views.check_auth, name='check-auth'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
