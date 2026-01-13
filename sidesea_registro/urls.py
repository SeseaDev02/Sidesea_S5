# denuncias/urls.py
from django.urls import path
from . import views

app_name = 'sidesea_registro'

urlpatterns = [
    path('', views.registro_login, name='registro_login'),
    path('reset-pass/', views.reset_pass, name='reset_pass'),
]