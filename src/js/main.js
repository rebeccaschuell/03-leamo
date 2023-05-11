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
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// export {pagination} from "swiper";
//   return (
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={10}
//       breakpoints={{
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 5,
//           spaceBetween: 50,
//         },
//       }}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//   );
// }
