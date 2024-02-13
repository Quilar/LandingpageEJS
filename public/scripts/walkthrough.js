// controlling the thumbnail of the video
document.addEventListener('DOMContentLoaded', function() 
{
    // Find all the thumbnails
    var thumbnails = document.querySelectorAll('.video-thumbnail');
    
    thumbnails.forEach(function(thumbnail) 
    {
        thumbnail.addEventListener('click', function() {
        // The iframe is the previous sibling of the thumbnail image
        var iframe = thumbnail.previousElementSibling;
        
        // Modify the iframe src to auto-play the video
        iframe.src += "&autoplay=1";
    
        // Show the iframe and hide the thumbnail
        iframe.style.opacity = '1'
        thumbnail.style.display = 'none';
        });
    });
});    


// Controlling the 3 steps animation
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight*1.5 || document.documentElement.clientHeight)
    );
    }

    function handleScroll() {
        var divs = document.querySelectorAll('.walkthrough-step');
        divs.forEach(div => {
            if (isInViewport(div) && !div.classList.contains('animate'))
                div.classList.add('animate');
        });
    }

window.addEventListener('scroll', handleScroll);