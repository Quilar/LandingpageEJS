const initializeSwiperTestimonial = ()=>{
    var swiperTestimonial = new Swiper('.swiper-container-testimonials', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50, // Degree of rotation between cards
          stretch: 0, // Space between cards
          depth: 100, // Depth effect size
          modifier: 1, // Effect multiplier
          slideShadows: true, // Enables the shadow effect
        },
        loop: true, // Enables the infinite loop
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {delay: 5000}
      });

    // Find all the thumbnails
    var thumbnails = document.querySelectorAll('.video-thumbnail');
    
    thumbnails.forEach(function(thumbnail) 
    {
        thumbnail.addEventListener('click', function() {
          // Stop the autoplay when a thumbnail is clicked
          swiperTestimonial.autoplay.stop();
        
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
  initializeSwiperTestimonial();
});
