const n_img1 = '../images/cancha1.jpg';
const n_titulo1 = 'Cancha 1';
const n_texto1 = 'Cancha con pasto sintético.';

const n_img2 = '../images/cancha2.jpg';
const n_titulo2 = 'Cancha 2';
const n_texto2 = 'Canchas con red de contención.';

const en_img1 = document.getElementById("n-img1");
const en_img2 = document.getElementById("n-img2");

en_img1.addEventListener("click", function(event) {
    Swal.fire({
            title: n_titulo1,
            text: n_texto1,
            imageUrl: n_img1,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: n_titulo1
        })
    event.preventDefault();
});

en_img2.addEventListener("click", function(event) {
    Swal.fire({
            title: n_titulo2,
            text: n_texto2,
            imageUrl: n_img2,
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: n_titulo2
        })
    event.preventDefault();
});