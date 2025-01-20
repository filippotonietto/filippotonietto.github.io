// Funzioni per lo slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mostra la prima slide all'avvio
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
