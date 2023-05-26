function initializeTestimonialsCarousel() 
{
    var carousel = $('.testimonials');
    var carouselWrapper = $('.testimonial-items');
    var carouselItems = $('.testimonial-item');
    var prevButton = $('.testimonials-handle-left');
    var nextButton = $('.testimonials-handle-right');
    var dots = $('.testimonial-dot');
    
    var currentItem = 0;

    prevButton.click(function() {
        currentItem = (currentItem === 0) ? carouselItems.length - 1 : currentItem - 1;
        updateCarousel();
    });

    nextButton.click(function() {
        currentItem = (currentItem === carouselItems.length - 1) ? 0 : currentItem + 1;
        updateCarousel();
    });

    dots.click(function() {
        currentItem = $(this).index();
        updateCarousel();
    });

    function updateCarousel() 
    {
        carouselWrapper.css
        ({
            'transform': 'translateX(' + (-currentItem * 100) + '%)',
            'transition': 'transform 0.3s ease',
        });
        
        const activeTestimonial = carouselItems[currentItem];
        const previousTestimonial = currentItem===0?carouselItems[carouselItems.length-1]:carouselItems[currentItem - 1];

        activeTestimonial.style.opacity = '1';
        activeTestimonial.style.transition = 'opacity 1s ease-in';

        if (previousTestimonial) previousTestimonial.style.opacity = '0';
        
        dots.removeClass('active-dot');
        dots.eq(currentItem).addClass('active-dot');        
    }

    // Variables to track touch events and carousel position
    let startX = 0;
    let startPosition = 0;

    // Add event listeners to the carousel element
    carousel.on('touchstart', handleTouchStart);
    carousel.on('touchmove', handleTouchMove);
    carousel.on('touchend', handleTouchEnd);

    function handleTouchStart(event) 
    {
    // Record the initial touch position and current carousel position
    startX = event.touches[0].clientX;
    startPosition = -currentItem * 100;
    }

    function handleTouchMove(event) 
    {
        // Calculate the swipe distance
        const deltaX = event.touches[0].clientX - startX;

        // Update the carousel position
        const newPosition = startPosition + deltaX;
        carouselWrapper.css('transform', 'translateX(' + newPosition + '%)');
    }

    function handleTouchEnd(event) 
    {
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
    
    // Initialize the carousel sorting order and the dots
    updateCarousel();
};

$(document).ready(()=>initializeTestimonialsCarousel());
