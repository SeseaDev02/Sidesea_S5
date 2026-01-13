from django.urls import path
from . import views

app_name = 'sidesea_user'

urlpatterns = [
    path('', views.login_view, name='login_view'),
]
