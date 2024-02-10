const initializeSwiperSolutionBenefits = () =>{
  var swiper = new Swiper('.swiper-container-solution-benefits', {
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

document.addEventListener('DOMContentLoaded', ()=>{
  initializeSwiperSolutionBenefits();
})