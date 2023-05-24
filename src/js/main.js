import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// var burgerVar = document.querySelector(".burger");
// var navVar = document.querySelector(".nav");

// var openNav = function () {
//   navVar.classList.toggle("is-open");
// };

// burgerVar.addEventListener("click", openNav);

var burgerVar = document.querySelector(".burger");
var navVar = document.querySelector(".nav");
var openNav = function () {
  navVar.classList.toggle("is-open");
  burgerVar.classList.toggle("is-active");
};

burgerVar.addEventListener("click", openNav);
navVar.addEventListener("click", openNav);
