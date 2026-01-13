from django.shortcuts import render

# Create your views here.
def index(request):
    """Vista para la página principal"""
    return render(request, 'pages/index.html')

def guias_ciudadanas(request):
    return render(request, 'pages/pages_info/guias.html')

def preguntas_frecuentes(request):
    return render(request, 'pages/pages_info/preguntas.html')

def info_denuncia(request):
    return render(request, 'pages/pages_info/info_denuncia.html')

def inf_graves(request): 
    return render(request, 'pages/pages_info/grave.html')

def inf_no_graves(request): 
    return render(request, 'pages/pages_info/no_grave.html')

def inf_particulares(request): 
    return render(request, 'pages/pages_info/particulares.html')

def inf_corrupcion(request):
    return render(request, 'pages/pages_info/corrupcion.html')

def aviso_privacidad(request):
    return render(request, 'pages/pages_info/aviso_privacidad.html')