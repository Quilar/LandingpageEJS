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
}

// controlling the thumbnail of the video
document.addEventListener('DOMContentLoaded', function() {
// Find all the thumbnails
var thumbnails = document.querySelectorAll('.video-thumbnail');

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
    // The iframe is the previous sibling of the thumbnail image
    var iframe = thumbnail.previousElementSibling;
    
    // Modify the iframe src to auto-play the video
    iframe.src += "&autoplay=1";

    // Show the iframe and hide the thumbnail
    iframe.style.opacity = '1'
    thumbnail.style.display = 'none';
    });
});

initializeSwiperTestimonial();
});
