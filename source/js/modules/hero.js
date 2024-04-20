import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperHero = new Swiper('.hero__slider', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
});

export {swiperHero};
