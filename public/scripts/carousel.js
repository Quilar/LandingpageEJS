function initializeCarousel() {
    var carousel = $('.carousel');
    var carouselWrapper = $('.carousel-items');
    var carouselItems = $('.carousel-item');
    var prevButton = $('.handle-left');
    var nextButton = $('.handle-right');
    var dots = $('.dot');
    const mobile = window.screen.width < 992 ? true : false;

    
    var currentItem = 0;

    prevButton.click(function() {
        if(!mobile) currentItem = (currentItem === 0) ? (carousel.length)/2 -1 : currentItem-1;
        currentItem = (currentItem === 0) ? carouselItems.length - 1 : currentItem - 1;
        updateCarousel();
    });

    nextButton.click(function() {
        if(!mobile) currentItem = (currentItem === (carousel.length)/2 -1) ? 0 : currentItem +1 ;
        currentItem = (currentItem === carouselItems.length - 1) ? 0 : currentItem + 1;
        updateCarousel();
    });

    dots.click(function() {
        currentItem = $(this).index();
        updateCarousel();
    });

    function updateCarousel() {
        if(mobile){    
            carouselWrapper.css({
            'transform': 'translateX(' + (-currentItem * 100) + '%)',
            'transition': 'transform 0.3s ease'
            });
            dots.removeClass('active-dot');
            dots.eq(currentItem).addClass('active-dot');
        }else{
            carouselWrapper.css({
                'transform': 'translateX(' + (-currentItem * 50) + '%)',
                'transition': 'transform 0.3s ease'
                });
                dots.removeClass('active-dot');
                dots.eq(currentItem).addClass('active-dot');
        }
    }


    // Variables to track touch events and carousel position
    let startX = 0;
    let startPosition = 0;

    // Add event listeners to the carousel element
    carousel.on('touchstart', handleTouchStart);
    carousel.on('touchmove', handleTouchMove);
    carousel.on('touchend', handleTouchEnd);

    function handleTouchStart(event) {
    // Record the initial touch position and current carousel position
    startX = event.touches[0].clientX;
    startPosition = -currentItem * 100;
    }

    function handleTouchMove(event) {
    // Calculate the swipe distance
    const deltaX = event.touches[0].clientX - startX;

    // Update the carousel position
    const newPosition = startPosition + deltaX;
    carouselWrapper.css('transform', 'translateX(' + newPosition + '%)');
    }

    function handleTouchEnd(event) {
    // Determine if the swipe distance exceeds the threshold
    const deltaX = event.changedTouches[0].clientX - startX;
    const threshold = carouselItems.width() * 0.15; // Adjust the threshold as needed
        const totalItems = carouselItems.length;


    if (Math.abs(deltaX) >= threshold) {
        // Update the current slide index and apply the new position
        if (deltaX > 0) {
        currentItem = Math.max(0, currentItem - 1);
        } else {
        currentItem = Math.min(totalItems - 1, currentItem + 1);
        }
    }

    // Apply the new position to the carousel
        updateCarousel();
    }
};

$(document).ready(()=>initializeCarousel());