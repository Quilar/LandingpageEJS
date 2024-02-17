window.addEventListener('scroll', () => {
    handleScroll();
    if(window.innerWidth < 992) handleBoxes();
    
    
    // Handles the horizontal translation of the rect when the box gets into the center.
    function handleBoxes(){
        const probBoxes = document.querySelectorAll('.prob-sol');
        probBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const titleImage = box.firstElementChild;
            
            if (boxTop < window.innerHeight * 0.6 && boxTop > window.innerHeight * 0.3) {
                if(!box.classList.contains('active'))
                    box.classList.add('active');
                if(!titleImage.classList.contains('animate'))
                    titleImage.classList.add('animate');
            } else {
                if(box.classList.contains('active'))
                    box.classList.remove('active');
                if(titleImage.classList.contains('animate'))
                    titleImage.classList.remove('animate');
            }
        });
    }

});