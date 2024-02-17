window.addEventListener('scroll', () => {
    if(window.innerWidth < 992) handleBoxes();
    
    
    // Handles the horizontal translation of the rect when the box gets into the center.
    function handleBoxes(){
        const targetBoxes = document.querySelectorAll('.target-group');
        targetBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const boxCenter = boxTop + box.clientHeight / 2;
            const screenCenter = window.innerHeight / 2;
            // Threshold from the center where to make the box active
            if (boxTop < window.innerHeight *0.6 && boxTop > window.innerHeight *0.3) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    }
});