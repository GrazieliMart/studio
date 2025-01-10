document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    const fullscreenView = document.getElementById("fullscreen-view");
    const fullscreenImage = document.getElementById("fullscreen-image");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;

    function openFullscreen(index) {
        currentIndex = index;
        fullscreenImage.src = images[currentIndex].src;
        fullscreenView.classList.remove("hidden");
    }

    function closeFullscreen() {
        fullscreenView.classList.add("hidden");
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        fullscreenImage.src = images[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        fullscreenImage.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => openFullscreen(index));
    });

    closeBtn.addEventListener("click", closeFullscreen);
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    // Fecha o modal ao clicar fora da imagem
    fullscreenView.addEventListener("click", (e) => {
        if (e.target === fullscreenView || e.target === closeBtn) {
            closeFullscreen();
        }
    });
});