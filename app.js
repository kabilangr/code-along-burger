const $burger = document.querySelector(".burger");
const $navLink = document.querySelector(".nav-links");
const $navLinks = document.querySelectorAll(".nav-links li")
$burger.onclick = () => {
    $navLink.classList.toggle("nav-click");
    $burger.classList.toggle("burger-click");
    $navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index/5+0.5}s`;
        }
    });
};