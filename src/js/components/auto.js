import Swiper from 'swiper';
import { Pagination, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const autoSwiper = new Swiper('.auto__swiper', {
  modules: [Pagination, Keyboard, A11y],
  direction: 'horizontal',
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  grabCursor: true,
  a11y: true,
  spaceBetween: 0,
});