// Example starter JavaScript for disabling form submissions if there are invalid fields
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

function textoMayuscula(texto) {
    texto.value = texto.value.toUpperCase();
  }

  function GuardarProfesional() {
    const form = document.getElementById('formProfesional');
    
    // Verificar si el formulario es válido
    if (!form.checkValidity()) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor complete todos los campos obligatorios.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: '¡Guardado!',
        text: 'La información se guardó correctamente.',
      }).then(() => {
        // Aquí puedes enviar el formulario si todo está bien
        form.submit();
      });
    }

    // Agrega la clase 'was-validated' para activar las validaciones visuales de Bootstrap
    form.classList.add('was-validated');
  }

  