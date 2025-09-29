from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('check/', views.check_auth),
    path('token/refresh/', TokenRefreshView.as_view()),
]
