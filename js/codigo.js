// nosotros 
let n_img1='../images/cancha1.jpg';
let n_titulo1='Cancha 1';
let n_texto1='Cancha con pasto sintético.';

let n_img2='../images/cancha2.jpg';
let n_titulo2='Cancha 2';
let n_texto2='Canchas con red de contención.';

// galerias
let g_img1='../images/instalaciones.jpg';
let g_titulo1='Nuestras Instalaciones';
let g_texto1='Quincho, asador, baños, vestuario.';

let g_img2='../images/escuelita.jpg';
let g_titulo2='Nuestra Escuelita';
let g_texto2='Contamos con exelentes profesores.';

let g_img3='../images/torneos.jpg';
let g_titulo3='Torneos';
let g_texto3='Realizamos torneos para impulsar la competencia sana.';

let g_img4='../images/eventos.jpg';
let g_titulo4='Eventos';
let g_texto4='Realizamos eventos como cumpleaños, bautismos, reuniones.';

document.getElementById("n-img1").addEventListener("click", function(event) {
    Swal.fire({
            title: n_titulo1,
            text: n_texto1,
            imageUrl: n_img1,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: n_titulo1,
        })
    event.preventDefault();
});

document.getElementById("n-img2").addEventListener("click", function(event) {
    Swal.fire({
            title: n_titulo2,
            text: n_texto2,
            imageUrl: n_img2,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: n_titulo2,
        })
    event.preventDefault();
});

document.getElementById("g-img1").addEventListener("click", function(event) {
    Swal.fire({
            title: g_titulo1,
            text: g_texto1,
            imageUrl: g_img1,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo1,
        })
    event.preventDefault();
});

document.getElementById("g-img2").addEventListener("click", function(event) {
    Swal.fire({
            title: g_titulo2,
            text: g_texto2,
            imageUrl: g_img2,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo2,
        })
    event.preventDefault();
});

document.getElementById("g-img3").addEventListener("click", function(event) {
    Swal.fire({
            title: g_titulo3,
            text: g_texto3,
            imageUrl: g_img3,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo3,
        })
    event.preventDefault();
});

document.getElementById("g-img4").addEventListener("click", function(event) {
    Swal.fire({
            title: g_titulo4,
            text: g_texto4,
            imageUrl: g_img4,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo4,
        })
    event.preventDefault();
});