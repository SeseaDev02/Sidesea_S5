# denuncias/urls.py
from django.urls import path
from . import views

app_name = 'sidesea_denuncia'

urlpatterns = [
    path('buscar-denuncia/', views.buscar_denuncia, name='buscar_denuncia'),
    path('presentar-denuncia/', views.presentar_denuncia, name='presentar_denuncia'),
]