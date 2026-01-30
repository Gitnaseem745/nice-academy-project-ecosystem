// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');

    // Hamburger Animation (Rotate lines)
    // We can add a class 'toggle' to animate the hamburger lines in CSS
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// Add shadow to header on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 1px 2px rgba(0,0,0,0.05)";
    }
});
