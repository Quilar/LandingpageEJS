window.addEventListener('scroll', () => {
    handleScroll();
    if(window.innerWidth < 992) handleBoxes();
    
    
    // Handles the horizontal translation of the rect when the box gets into the center.
    function handleBoxes(){
        const boxes = document.querySelectorAll('.prob-sol');
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const boxCenter = boxTop + box.clientHeight / 2;
            const screenCenter = window.innerHeight / 2;
            
            if (boxCenter < screenCenter + 100 && boxCenter > screenCenter - 100) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    }

});