#!/usr/bin/env python3
"""
ALX Project Nexus Setup - Backend + Frontend Integration
Just run: python3 complete-setup.py
"""

import os
import subprocess
from pathlib import Path
import shutil

# Helper to run commands
def run(cmd, cwd=None):
    try:
        subprocess.run(cmd, shell=True, cwd=cwd, check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Command failed: {cmd}\n{e}")
        return False

def main():
    print("🚀 ALX Project Nexus - Setup Starting")
    print("="*40)

    # Backend folder
    backend_folder = Path("quickcart-backend")

    # Clean up if exists
    if backend_folder.exists():
        shutil.rmtree(backend_folder)
        print(f"✅ Removed old backend folder: {backend_folder}")

    os.makedirs(backend_folder, exist_ok=True)
    os.chdir(backend_folder)

    # Create virtual environment
    print("📦 Creating virtual environment...")
    run("python3 -m venv venv")
    
    print("📚 Installing packages...")
    run("venv/bin/pip install --upgrade pip setuptools wheel")

    # Requirements
    reqs = """Django==4.2.7
djangorestframework==3.14.0
django-cors-headers==4.3.1
djangorestframework-simplejwt==5.3.0
"""
    with open("requirements.txt", "w") as f:
        f.write(reqs)
    run("venv/bin/pip install -r requirements.txt")

    # Django project & app
    print("🏗️ Creating Django project...")
    run("venv/bin/django-admin startproject api_backend .")
    run("venv/bin/python manage.py startapp accounts")

    # Settings.py
    settings = f"""import os
from pathlib import Path
from datetime import timedelta

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = 'django-simple-key-change-later'
DEBUG = True
ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    'accounts',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'api_backend.urls'
WSGI_APPLICATION = 'api_backend.wsgi.application'

TEMPLATES = [
    {{
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {{
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        }},
    }},
]

DATABASES = {{
    'default': {{
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }}
}}

AUTH_PASSWORD_VALIDATORS = [
    {{'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',}},
    {{'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',}},
    {{'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',}},
    {{'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',}},
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True
STATIC_URL = '/static/'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {{
    'DEFAULT_AUTHENTICATION_CLASSES': ['rest_framework_simplejwt.authentication.JWTAuthentication',],
    'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.AllowAny',],
}}

SIMPLE_JWT = {{
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=24),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
}}

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True

AUTH_USER_MODEL = 'accounts.User'
"""
    with open("api_backend/settings.py", "w") as f:
        f.write(settings)

    # URLs.py
    urls_py = """from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({'status': 'API Working', 'message': 'ALX Project Nexus API'})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/', api_root),
]
"""
    with open("api_backend/urls.py", "w") as f:
        f.write(urls_py)

    # Models.py
    models_py = """from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']
"""
    with open("accounts/models.py", "w") as f:
        f.write(models_py)

    # Serializers.py
    serializers_py = """from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirm = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['email', 'username', 'first_name', 'last_name', 'password', 'password_confirm']

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError("Passwords don't match")
        return attrs

    def create(self, validated_data):
        validated_data.pop('password_confirm')
        return User.objects.create_user(**validated_data)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name']
"""
    with open("accounts/serializers.py", "w") as f:
        f.write(serializers_py)

    # Views.py
    views_py = """from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import RegisterSerializer, UserSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({'user': UserSerializer(user).data, 'tokens': {'refresh': str(refresh), 'access': str(refresh.access_token)}})
    return Response(serializer.errors, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(username=email, password=password)
    if user:
        refresh = RefreshToken.for_user(user)
        return Response({'user': UserSerializer(user).data, 'tokens': {'refresh': str(refresh), 'access': str(refresh.access_token)}})
    return Response({'error': 'Invalid credentials'}, status=401)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def check_auth(request):
    return Response({'authenticated': True, 'user': UserSerializer(request.user).data})
"""
    with open("accounts/views.py", "w") as f:
        f.write(views_py)

    # Accounts URLs
    accounts_urls = """from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('check/', views.check_auth),
    path('token/refresh/', TokenRefreshView.as_view()),
]
"""
    with open("accounts/urls.py", "w") as f:
        f.write(accounts_urls)

    # Migrations
    print("🗄️ Running migrations...")
    run("venv/bin/python manage.py makemigrations")
    run("venv/bin/python manage.py migrate")

    # Frontend setup
    frontend_path = Path("../quick-cart")
    if frontend_path.exists():
        os.chdir("../quick-cart")
        os.makedirs("lib", exist_ok=True)
        auth_js = """import axios from 'axios';
const API_URL = 'http://localhost:8000/api';
class AuthService {
  async register(data) {
    try {
      const response = await axios.post(`${API_URL}/auth/register/`, data);
      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data };
    }
  }
  async login(email, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/login/`, { email, password });
      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data };
    }
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  }
  isAuthenticated() {
    return !!localStorage.getItem('access_token');
  }
  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
export default new AuthService();
"""
        with open("lib/auth.js", "w") as f:
            f.write(auth_js)
        with open(".env.local", "w") as f:
            f.write("NEXT_PUBLIC_API_URL=http://localhost:8000/api")
        print("✅ Frontend auth files created.")
    else:
        print("⚠️ Frontend folder not found, skipping frontend setup.")

    # Completion message
    print("\n" + "="*50)
    print("✅ SETUP COMPLETE!")
    print("="*50)
    print("\n🚀 START YOUR SERVERS:")
    print("\n1. Backend:")
    print("   cd quickcart-backend")
    print("   source venv/bin/activate")
    print("   python manage.py createsuperuser")
    print("   python manage.py runserver")
    if frontend_path.exists():
        print("\n2. Frontend:")
        print("   cd quick-cart")
        print("   npm install axios")
        print("   npm run dev")
    print("\n🌐 URLs:")
    print("   Backend:  http://localhost:8000/api/")
    print("   Admin:    http://localhost:8000/admin/")

if __name__ == "__main__":
    main()
