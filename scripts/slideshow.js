document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('[data-carousel]');

    carousels.forEach(carousel => {
        let currentSlide = 0;
        const slides = carousel.querySelectorAll('.slides');
        const prevButton = carousel.parentElement.querySelector('[data-prev]');
        const nextButton = carousel.parentElement.querySelector('[data-next]');

        // Funzione per mostrare la slide corrente
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        // Mostra la prima slide
        showSlide(currentSlide);

        // Event listener per i bottoni
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    });
});