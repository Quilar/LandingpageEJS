const ArAnimation = ()=>{
    var frame = document.getElementById('frame');
    var container = document.querySelector('.ar-section');
    var virtualImage = document.querySelector('.virtual-image');

    const isMobileDevice = () => {return /Mobi|Android/i.test(navigator.userAgent)};
    
    container.addEventListener('mousemove', (event)=>handleMove(event));
    container.addEventListener('touchmove', (event)=>handleMove(event));



    const handleMove = (event) => {
        console.log(`isMobile? ${isMobileDevice()}`);
        if(isMobileDevice()){
            var x = event.touches[0].clientX;
            var y = event.touches[0].clientY;
        }
        else{
            var x = event.clientX;
            var y = event.clientY;
        }


        var containerTop = container.getBoundingClientRect().top;
       
        frame.style.top = y - containerTop + 'px';
        frame.style.left = x + 'px';
        var frameRect = frame.getBoundingClientRect();
        var screenDelta = 10;
        var topY = frameRect.top - containerTop + screenDelta;
        var bottomY = frameRect.top + frameRect.height - containerTop - screenDelta;
        var leftX = frameRect.left + screenDelta;
        var rightX = frameRect.left + frameRect.width - screenDelta;

        virtualImage.style.clipPath = `polygon(${leftX}px ${topY}px, ${rightX}px ${topY}px, ${rightX}px ${bottomY}px, ${leftX}px ${bottomY}px)`;
    }
}
$(document).ready(()=> ArAnimation());