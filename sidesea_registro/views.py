from django.shortcuts import render

# Create your views here.
def registro_login(request):
    return render(request, 'forms/registro_login.html')

def reset_pass(request):
    return render(request, 'forms/reset_pass.html')
