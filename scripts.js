// scripts.js

// Menu hamburger toggle mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fermeture du menu quand on clique sur un lien (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

// Effet machine à écrire sur le texte d'intro
const phrases = ["Développeur Python Junior", "Passionné par le développement web", "Étudiant en Licence Informatique"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typedTextElement = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        typedTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        typedTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50);
    } else {
        currentPhraseIndex++;
        if (currentPhraseIndex >= phrases.length) currentPhraseIndex = 0;
        setTimeout(type, 500);
    }
}

// Démarrer la machine à écrire
document.addEventListener('DOMContentLoaded', () => {
    if (phrases.length) type();
});

// Animation barres de compétences au scroll
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const progressValue = bar.getAttribute('data-progress');
        bar.style.width = progressValue;
    });
}

// Apparition progressive (fade-in) des sections au scroll
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => { // Scripts.js : menu, machine à écrire, fade-in, carousel

        // Menu hamburger toggle mobile
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        menuToggle.addEventListener('click', () => menu.classList.toggle('show'));
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('show'));
        });

        // Machine à écrire
        const phrases = ["Développeur Python Junior", "Passionné par le développement web", "Étudiant en Licence Informatique"];
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        const typedTextElement = document.querySelector('.typed-text');

        function type() {
            if (currentCharIndex < phrases[currentPhraseIndex].length) {
                typedTextElement.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(type, 100);
            } else setTimeout(erase, 2000);
        }

        function erase() {
            if (currentCharIndex > 0) {
                typedTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
                currentCharIndex--;
                setTimeout(erase, 50);
            } else {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            }
        }
        document.addEventListener('DOMContentLoaded', () => { if (phrases.length) type(); });

        // Animation barres compétences (si tu veux les ajouter aussi)
        const progressBars = document.querySelectorAll('.progress');

        function animateProgressBars() {
            progressBars.forEach(bar => {
                const val = bar.getAttribute('data-progress');
                bar.style.width = val;
            });
        }

        // Apparition fade-in des sections au scroll
        const sections = document.querySelectorAll('.section');

        function revealOnScroll() {
            const triggerBottom = window.innerHeight * 0.85;
            sections.forEach(section => {
                if (section.getBoundingClientRect().top < triggerBottom) {
                    section.classList.add('visible');
                    if (section.id === "competences") animateProgressBars();
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);

        // Carousel certificats
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        let currentIndex = 0;

        function updateCarousel() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });
        window.addEventListener('resize', updateCarousel);
        document.addEventListener('DOMContentLoaded', updateCarousel);

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
            // Si c'est la section compétences, animer les barres
            if (section.id === "competences") animateProgressBars();
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window