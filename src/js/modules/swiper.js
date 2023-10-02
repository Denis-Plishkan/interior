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

function companyTopSwiper() {
  const heroSwiper = document.querySelector('.companyTop__swiper');
  if (!heroSwiper) {
    return;
  }
  
  let swiper = new Swiper(".companyTop__swiper", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.companyTop__button-next',
      prevEl: '.companyTop__button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar', 
    },
    // autoplay: {
    //   delay: 1500,
    // },
    breakpoints: {
      320: {
        
        spaceBetween: -172,
      },
      375: {
        
        spaceBetween: -190,
      },
      768: {
        
        spaceBetween: -65,
      },
      991: {
       
        spaceBetween: -65,
      },
      1440: {
        slidesPerView: 1.2,
        spaceBetween: 28,
      },
      1920: {
        
      },
    },

  });

  let leftNumberSpan = document.querySelector('.companyTop__left-number');
  leftNumberSpan.textContent = '01';

  swiper.on('slideChange', function () {
    let activeSlide = Math.ceil(swiper.activeIndex) + 1;
    leftNumberSpan.textContent = activeSlide.toString().padStart(2, '0');
  });
}

companyTopSwiper();

function ourLatestSwiper() {
  let swiper = new Swiper(".ourLatest__swiper", {
    spaceBetween: 24,
    slidesPerView: 'auto',
    loop: true,
    // autoplay: {
    //   delay: 1000,
    // },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 40,
      },
      375: {
        slidesPerView: 1.2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: -65,
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween: -32,
      },
      1440: {
        slidesPerView: 3.5,
        spaceBetween: 38,
      },
      1920: {
        slidesPerView: 4,
      },
    },
  });
}

ourLatestSwiper();



