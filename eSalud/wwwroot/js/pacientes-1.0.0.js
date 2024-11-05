//Validaciones
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

//Funcion texto mayuscula
function textoMayuscula(texto) {
    texto.value = texto.value.toUpperCase();
  }
 
//sweat alert

function GuardarPaciente () {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Paciente guardado con exito",
    showConfirmButton: false,
    timer: 1500
  });
}
  

  
