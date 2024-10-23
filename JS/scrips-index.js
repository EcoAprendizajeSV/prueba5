const mobileMenu = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false; // Variable para rastrear si el menú está abierto

// Alterna el menú al hacer clic en el icono de menú
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuOpen = !menuOpen; // Cambia el estado de si el menú está abierto o no
});

// Cierra el menú al hacer scroll hacia abajo
window.addEventListener('scroll', () => {
    if (menuOpen && window.scrollY > 0) { // Si el menú está abierto y el usuario hace scroll
        navLinks.classList.remove('active'); // Cierra el menú
        menuOpen = false; // Actualiza el estado del menú a cerrado
    }
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = slides.length;
const interval = 4000; // 3 segundos

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', moveToNextSlide);
document.querySelector('.prev').addEventListener('click', moveToPrevSlide);

setInterval(moveToNextSlide, interval);



//BACHILLERATOS//
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            const panel = this.nextElementSibling;
            document.querySelectorAll('.panel').forEach(p => {
                if (p !== panel) {
                    p.classList.remove('show');
                    p.style.maxHeight = null;
                }
            });
            if (panel.classList.contains('show')) {
                panel.classList.remove('show');
                panel.style.maxHeight = null;
            } else {
                panel.classList.add('show');
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});

