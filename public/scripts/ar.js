const ArAnimation = ()=>{
    var frame = document.getElementById('frame');
    var container = document.querySelector('.ar-wrapper');
    var virtualImage = document.querySelector('.virtual-image');

    const isMobileDevice = () => {return /Mobi|Android/i.test(navigator.userAgent)};
    
    container.addEventListener('mousemove', (event)=>handleMove(event));
    container.addEventListener('touchmove', (event)=>handleMove(event));



    const handleMove = (event) => {
        if(isMobileDevice()){
            event.preventDefault();
            var x = event.touches[0].clientX;
            var y = event.touches[0].clientY;
        }
        else{
            var x = event.clientX;
            var y = event.clientY;
        }


        var containerTop = container.getBoundingClientRect().top;
        var containerLeft = container.getBoundingClientRect().left;
       
        frame.style.top = y - containerTop + 'px';
        frame.style.left = x - containerLeft + 'px';
        var frameRect = frame.getBoundingClientRect();
        var screenDelta = frameRect.width * 0.0745;
        var topY = frameRect.top - containerTop + screenDelta;
        var bottomY = frameRect.top + frameRect.height - containerTop - screenDelta;
        var leftX = frameRect.left - containerLeft + screenDelta;
        var rightX = frameRect.left - containerLeft + frameRect.width - screenDelta;

        virtualImage.style.clipPath = `polygon(${leftX}px ${topY}px, ${rightX}px ${topY}px, ${rightX}px ${bottomY}px, ${leftX}px ${bottomY}px)`;
    }
}
$(document).ready(()=> ArAnimation());