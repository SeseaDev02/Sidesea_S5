# denuncias/urls.py
from django.urls import path
from . import views

app_name = 'sidesea_home'

urlpatterns = [
    path('', views.index, name='index'),
    path('guias-ciudadanas/', views.guias_ciudadanas, name='guias_ciudadanas'),
    path('preguntas-frecuentes/', views.preguntas_frecuentes, name='preguntas_frecuentes'),
    path('info-denuncia/', views.info_denuncia, name='info_denuncia'),
    path('info-no-grave/', views.inf_no_graves, name='info_no_graves'),
    path('info-grave/', views.inf_graves, name='info_graves'),
    path('info-particulares/', views.inf_particulares, name='info_particulares'),
    path('info-hechos-de-corrupcion/', views.inf_corrupcion, name='info_corrupcion'),
    path('aviso-privacidad/', views.aviso_privacidad, name='aviso_privacidad'),
]