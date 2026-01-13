from django.shortcuts import render

# Create your views here.

def buscar_denuncia(request):

    if request.method == "POST":
        folio = request.POST.get("numero-folio")
        print("SI RECIBE EL FORMULARIO")
        print(request.POST)

        # Enviar el folio al HTML
        return render(
            request,
            "pages/page_denuncia/busqueda_denuncia.html",
            {"folio": folio}
        )

    # GET simplemente muestra el formulario
    return render(request, "pages/page_denuncia/busqueda_denuncia.html")

def presentar_denuncia(request):
    return render(request, "forms/presentar_denuncia.html")