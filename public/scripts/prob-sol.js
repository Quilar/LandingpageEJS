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
    
    // handles the fadeIn animation of the icons
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        function handleScroll() {
            var divs = document.querySelectorAll('.prob-sol-title-image');
            divs.forEach(div => {
                if (isInViewport(div) && !div.classList.contains('animate'))
                div.classList.add('animate');
        });
    }
});