const body = document.body;
const bk = document.querySelector(".bk");
const header__menu = document.querySelector(".menu__label");
const nav__slider = document.querySelector(".header__links");
const header__nav = document.querySelector(".header__nav");

header__menu.addEventListener("click", function () {
  nav__slider.classList.toggle("header__links--active");
  header__nav.classList.toggle("header__nav--active");
  body.classList.toggle("scroll-lock");
  bk.classList.toggle("bk--active");
});

bk.addEventListener("click", function () {
  nav__slider.classList.toggle("header__links--active");
  header__nav.classList.toggle("header__nav--active");
  body.classList.toggle("scroll-lock");
  bk.classList.toggle("bk--active");
  document.querySelector(".menu__checkbox").checked = false;
});
