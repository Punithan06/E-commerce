from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('https://e-commerce-fe36.onrender.com/admin/', admin.site.urls),
    path('https://e-commerce-fe36.onrender.com/api/', include('api.urls')),
]
