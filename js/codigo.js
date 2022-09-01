document.getElementById("img1").addEventListener("click", function(event) {
    Swal.fire({
            title: 'Cancha 1',
            text: 'Cancha con pasto sintético.',
            imageUrl: '../images/cancha1.jpg',
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: 'Cancha 1',
        })
    event.preventDefault();
});

document.getElementById("img2").addEventListener("click", function(event) {
    Swal.fire({
            title: 'Cancha 2',
            text: 'Canchas con red de contención.',
            imageUrl: '../images/cancha2.jpg',
            imageWidth: 400,
            imageHeight: 350,
            imageAlt: 'Cancha 2',
        })
    event.preventDefault();
});