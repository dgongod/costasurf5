const form = document.getElementById("formulario");

function submit_limpieza_url () {
    //const valores = window.location.search;
    //const datos = new URLSearchParams(valores);

    form.submit();
    window.location.href =  window.location.href.split("?")[0];
}

function validarFormulario(evento) {
    evento.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var consulta = document.getElementById("consulta").value;

    if(nombre == "") {
        Swal.fire({
            icon: 'error',
            title: 'Dato Requerido',
            text: 'Ingrese el nombre.',
            footer: ''
          });
        exit;
    }
    
    if (email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Dato Requerido',
            text: 'Ingrese el email.',
            footer: ''
          });
        exit;
    }

    if (consulta== "") {
        Swal.fire({
            icon: 'error',
            title: 'Dato Requerido',
            text: 'Ingrese la consulta.',
            footer: ''
          });
        exit;
    }

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Consulta enviada con éxito.',
        showConfirmButton: false,
        timer: 1700
    });
    
    setTimeout(submit_limpieza_url,1700);
}

form.addEventListener('submit', validarFormulario);