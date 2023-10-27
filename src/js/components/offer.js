import Swiper from 'swiper';
import { Pagination, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const offerSwiper = new Swiper('.offer__swiper', {
  modules: [Pagination, Keyboard, A11y],
  direction: 'horizontal',
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
  a11y: true,
  grabCursor: true,
  spaceBetween: 20,
});