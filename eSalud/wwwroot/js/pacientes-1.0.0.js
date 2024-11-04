function textoMayuscula(texto) {
    texto.value = texto.value.toUpperCase();
  }
  

function ValidarInputs () {

    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let dni = document.getElementById("dni").value;
    let edad = document.getElementById("edad").value;
    let direccion = document.getElementById("direccion").value;
    let localidad = document.getElementById("localidad").value;
    let telefono = document.getElementById("telefono").value;
    let obraSocial = document.getElementById("obraSocial").value;

    document.getElementById("errorMensajeNombre").style.display = "none";
    document.getElementById("errorMensajeDni").style.display = "none";
    document.getElementById("errorMensajeEdad").style.display = "none";
    document.getElementById("errorMensajeDireccion").style.display = "none";
    document.getElementById("errorMensajeLocalidad").style.display = "none";
    document.getElementById("errorMensajeTelefono").style.display = "none";
    document.getElementById("errorMensajeObraSocial").style.display = "none";
    
    let inputVacio = true;

    if (nombreCompleto === "") {
        document.getElementById("errorMensajeNombre").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errorMensajeNombre").style.display = "none";
    }

    if (dni === "0") {
        document.getElementById("errorMensajeDni").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errorMensajeDni").style.display = "none";
    }

    if (edad === "0") {
        document.getElementById("errorMensajeEdad").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errorMensajeEdad").style.display = "none";
    }

    if (direccion === "") {
        document.getElementById("errorMensajeDireccion").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errorMensajeDireccion").style.display = "none";
    }

    if (localidad === "") {
        document.getElementById("errorMensajeLocalidad").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errorMensajeLocalidad").style.display = "none";
    }

    if (telefono === "") {
        document.getElementById("errorMensajeTelefono").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errorMensajeTelefono").style.display = "none";
    }

    if (obraSocial === "") {
        document.getElementById("errorMensajeObraSocial").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("errorMensajeObraSocial").style.display = "none";
    }

    if (!inputVacio) {
        return;  // Detener la ejecución aquí si isValid es false
    }


}