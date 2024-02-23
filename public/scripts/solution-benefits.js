var swiperSolutionBenefit = null; // Holds the Swiper instance

const initializeSwiperSolutionBenefit = () => {
  swiperSolutionBenefit = new Swiper('.swiper-container-solution-benefits', {
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
        swiperSolutionBenefit.autoplay.stop();
      
      });
  });
};

const destroySwiperSolutionBenefit = () => {
  if (swiperSolutionBenefit !== null) {
    swiperSolutionBenefit.destroy();
    swiperSolutionBenefit = null;
  }
};

const checkSwiperSolBenInitialization = () => {
  if (window.innerWidth <= 992 && swiperSolutionBenefit === null) {
    initializeSwiperSolutionBenefit();
  } else if (window.innerWidth > 992 && swiperSolutionBenefit !== null) {
    destroySwiperSolutionBenefit();
  }
};


document.addEventListener('DOMContentLoaded', () => {
  checkSwiperSolBenInitialization(); // Check on initial load
  window.addEventListener('resize', checkSwiperSolBenInitialization); // Check on resize
});
