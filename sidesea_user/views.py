from django.shortcuts import render

def login_view(request):
    if request.method == "POST":
        # Recibimos los datos del formulario
        usuario = request.POST.get("usuario")
        password = request.POST.get("password")
        print("Recibe formulario")
        print(request.POST)
        return render(request, "users/user.html", {"usuario": usuario})

    # Si el método no es POST, renderizamos el formulario vacío
    return render(request, "users/user.html")
