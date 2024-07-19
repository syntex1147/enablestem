document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    }

    // Initial check
    updateNavbar();
    
    // Update on scroll
    window.addEventListener('scroll', updateNavbar);
});

const carouselInner = document.getElementById('carousel-inner');
let currentIndex = 0;
const totalCards = document.querySelectorAll('.card').length;

function next() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
}

function prev() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}