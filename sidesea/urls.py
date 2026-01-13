from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('sidesea_home.urls')),
    path('registros/', include('sidesea_registro.urls')),
    path('denuncia/', include('sidesea_denuncia.urls')),
    path('usuario/', include('sidesea_user.urls')),
]
