let slideIndex = {};

function showSlides(n, carouselId) {
    let i;
    let slides = document.querySelectorAll(`#${carouselId} .mySlides`);
    let dots = document.querySelectorAll(`#${carouselId} .dot`);
    if (n > slides.length) { slideIndex[carouselId] = 1 }
    if (n < 1) { slideIndex[carouselId] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex[carouselId] - 1].style.display = "block";
    dots[slideIndex[carouselId] - 1].className += " active";
}

function plusSlides(n, carouselId) {
    showSlides(slideIndex[carouselId] += n, carouselId);
}

function currentSlide(n, carouselId) {
    showSlides(slideIndex[carouselId] = n, carouselId);
}


document.addEventListener("DOMContentLoaded", function () {
    let carousels = document.querySelectorAll('.slideshow-container');
    carousels.forEach(carousel => {
        let id = carousel.id;
        slideIndex[id] = 1;
        showSlides(1, id);
    });
});

// Schneefall animation yeah buddy

function createSnowflake() {
    const container = document.getElementById('snowfall-container');

    function snowflake() {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');

        const size = Math.random() * 4 + 2;
        flake.style.width = `${size}px`;
        flake.style.height = `${size}px`;
        flake.style.left = `${Math.random() * 100}%`;

        const duration = Math.random() * 10 + 10; // Längere Fallzeit
        flake.style.animation = `fall ${duration}s linear infinite`;
        flake.style.animationDelay = `-${Math.random() * duration}s`;

        container.appendChild(flake);

        flake.addEventListener('animationiteration', () => {
            flake.style.left = `${Math.random() * 100}%`;
        });
    }

    // mehr flöckis
    for (let i = 0; i < 100; i++) {
        snowflake();
    }
}


// Ruft die Funktion auf, wenn die Seite lädt
window.addEventListener('load', createSnowflake);