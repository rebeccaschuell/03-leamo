import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

// const swiper = new Swiper(".crafts-swiper-container", {
//   pagination: {
//     el: ".crafts-swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".crafts-carousel-next",
//     prevEl: ".crafts-carousel-prev",
//   },
// });

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
});
