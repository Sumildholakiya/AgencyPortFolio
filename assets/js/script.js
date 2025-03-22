// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    // Toggle aria-expanded attribute for accessibility
    const isExpanded = navLinks?.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle?.contains(e.target) && !navLinks?.contains(e.target)) {
        navLinks?.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
    }
});

// Update footer year
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Remove observer after animation is added
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});


// Typewriter effect


// Typewriter effect
const text1 = "Welcome To ";
const text2 = "BroCode ";

let index1 = 0, index2 = 0;
let isDeleting = false;
const element1 = document.getElementById("text1");
const element2 = document.getElementById("text2");

// Ensure elements are always present but hidden initially
element1.style.visibility = "visible";
element2.style.visibility = "visible";

function typeWriter() {
    if (!isDeleting) {
        if (index1 < text1.length) {
            element1.innerHTML = text1.substring(0, index1);
            index1++;
        } else if (index2 < text2.length) {
            element2.innerHTML = text2.substring(0, index2);
            index2++;
        } else {
            isDeleting = true;
            setTimeout(typeWriter, 1000); // Hold for 1 second after complete
            return;
        }
    } else {
        if (index2 > 0) {
            index2--;
            element2.innerHTML = text2.substring(0, index2);
        } else if (index1 > 0) {
            index1--;
            element1.innerHTML = text1.substring(0, index1);
        } else {
            isDeleting = false;
        }
    }

    let speed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, speed);
}

typeWriter();
