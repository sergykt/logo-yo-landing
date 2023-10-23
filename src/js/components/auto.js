import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const newSwiper = new Swiper('.auto__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  navigation: {
    nextEl: '.auto__swiper-next-btn',
    prevEl: '.auto__swiper-prev-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});