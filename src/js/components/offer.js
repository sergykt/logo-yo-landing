import Swiper from 'swiper';
import { Navigation, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const offerSwiper = new Swiper('.offer__swiper', {
  modules: [Navigation, Keyboard, A11y],
  direction: 'horizontal',
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.offer__swiper-next-btn',
    prevEl: '.offer__swiper-prev-btn',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
  a11y: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
});