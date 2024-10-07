// Navbar Scroll Effect
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }
});

// Collapse Navbar on Link Click
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    window.location.href = `mailto:tchavre01@gmail.com?subject=Contact Form Message&body=${encodeURIComponent(message)}`;
});
