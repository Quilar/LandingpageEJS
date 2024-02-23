//Code for the embedded videos on the website. Modifiying the iframe src property once clicked on the thumbnail. To reduce load-time

document.addEventListener('DOMContentLoaded', function() 
{
    // Find all the thumbnails
    var thumbnails = document.querySelectorAll('.video-thumbnail');
    thumbnails.forEach(function(thumbnail) 
    {
        thumbnail.addEventListener('click', function() {
        // The iframe is the previous sibling of the thumbnail image
        var iframe = thumbnail.previousElementSibling;
        // Get the video URL from the data-lazy-load attribute of the thumbnail
        var videoUrl = iframe.getAttribute('data-lazy-load');
        // Set the video URL as the src of the iframe and add autoplay
        iframe.src = videoUrl + "&autoplay=1";
    
        // Show the iframe and hide the thumbnail
        iframe.style.opacity = '1';
        thumbnail.style.display = 'none';
        });
    });
});
