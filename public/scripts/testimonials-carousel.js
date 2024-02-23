var swiperTestimonial = null; // Holds the Swiper instance

const initializeSwiperTestimonial = () => {
  swiperTestimonial = new Swiper('.swiper-container-testimonials', {
    // Swiper configuration
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: { delay: 5000 }
  });

  // Code for thumbnail click event handling
  // Find all the thumbnails
  var thumbnails = document.querySelectorAll('.video-thumbnail');

  thumbnails.forEach(function(thumbnail) 
  {
      thumbnail.addEventListener('click', function() {
        // Stop the autoplay when a thumbnail is clicked
        swiperTestimonial.autoplay.stop();
      
      });
  });
};

const destroySwiperTestimonial = () => {
  if (swiperTestimonial !== null) {
    swiperTestimonial.destroy();
    swiperTestimonial = null;
  }
};

const checkSwiperInitialization = () => {
  if (window.innerWidth <= 992 && swiperTestimonial === null) {
    initializeSwiperTestimonial();
  } else if (window.innerWidth > 992 && swiperTestimonial !== null) {
    destroySwiperTestimonial();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  checkSwiperInitialization(); // Check on initial load
  window.addEventListener('resize', checkSwiperInitialization); // Check on resize
});

