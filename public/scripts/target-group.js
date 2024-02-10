window.addEventListener('scroll', () => {
    if(window.innerWidth < 992) handleBoxes();
    
    
    // Handles the horizontal translation of the rect when the box gets into the center.
    function handleBoxes(){
        const boxes = document.querySelectorAll('.target-group');
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const boxCenter = boxTop + box.clientHeight / 2;
            const screenCenter = window.innerHeight / 2;
            // Threshold from the center where to make the box active
            let threshold = 100
            if (boxCenter < screenCenter + threshold && boxCenter > screenCenter - threshold) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    }
});