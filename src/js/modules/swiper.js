import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);


function heroSwiper() {
  const heroSwiper = document.querySelector('.hero__swiper');
  if (!heroSwiper) {
    return;
  }
  
  let swiper = new Swiper(".hero__swiper", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar', 
    },
    // autoplay: {
    //   delay: 1500,
    // },
  });

  let leftNumberSpan = document.querySelector('.hero__left-number');
  leftNumberSpan.textContent = '01';

  swiper.on('slideChange', function () {
    let activeSlide = Math.ceil(swiper.activeIndex / 2) + 1;
    leftNumberSpan.textContent = activeSlide.toString().padStart(2, '0');
  });
}

heroSwiper();


