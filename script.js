document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".game img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? "block" : "none";
        });
    }

    showImage(currentIndex);

    // Funzione per il carosello
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000); // Cambia immagine ogni 3 secondi
});
