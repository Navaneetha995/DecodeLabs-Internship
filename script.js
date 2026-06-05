// Welcome Button

document
.getElementById("welcomeBtn")
.addEventListener("click", function () {

    alert("Welcome to My Portfolio Website!");
});


// Mobile Menu

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");
});


// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Form Submitted Successfully!");
});