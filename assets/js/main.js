const hamburger = document.querySelector(".menu__icon");
const sideMenu = document.querySelector(".header__menu")

hamburger.addEventListener("click", () => {
sideMenu.classList.toggle("show__menu")
})