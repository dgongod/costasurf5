const g_img1 = '../images/instalaciones.jpg';
const g_titulo1 = 'Nuestras Instalaciones';
const g_texto1 = 'Quincho, asador, baños, vestuario.';

const g_img2 = '../images/escuelita.jpg';
const g_titulo2 = 'Nuestra Escuelita';
const g_texto2 = 'Contamos con exelentes profesores.';

const g_img3 = '../images/torneos.jpg';
const g_titulo3 = 'Torneos';
const g_texto3 = 'Realizamos torneos para impulsar la competencia sana.';

const g_img4 = '../images/eventos.jpg';
const g_titulo4 = 'Eventos';
const g_texto4 = 'Realizamos eventos como cumpleaños, bautismos, reuniones.';

const eg_img1 = document.getElementById("g-img1");
const eg_img2 = document.getElementById("g-img2");
const eg_img3 = document.getElementById("g-img3");
const eg_img4 = document.getElementById("g-img4");

document.getElementById("g-img1").addEventListener("click", function(event) {    
    Swal.fire({
            title: g_titulo1,
            text: g_texto1,
            imageUrl: g_img1,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo1
        })
    event.preventDefault();
});

eg_img2.addEventListener("click", function(event) {
    Swal.fire({
            title: g_titulo2,
            text: g_texto2,
            imageUrl: g_img2,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo2
        })
    event.preventDefault();
});

eg_img3.addEventListener("click", function(event) {
    Swal.fire({
            title: g_titulo3,
            text: g_texto3,
            imageUrl: g_img3,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo3
        })
    event.preventDefault();
});

eg_img4.addEventListener("click", function(event) {
    Swal.fire({
            title: g_titulo4,
            text: g_texto4,
            imageUrl: g_img4,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: g_titulo4
        })
    event.preventDefault();
});

