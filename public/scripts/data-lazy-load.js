//Code for the embedded videos on the website. Modifiying the iframe src property once clicked on the thumbnail. To reduce load-time

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('video-thumbnail')) {
            var thumbnail = event.target;
            var iframe = thumbnail.previousElementSibling;

            var videoUrl = iframe.getAttribute('data-lazy-load');
            if (videoUrl) {
                iframe.src = videoUrl + "&autoplay=1";
                iframe.style.opacity = '1';
                thumbnail.style.display = 'none';
            } else {
                console.error('Data-lazy-load attribute is missing!');
            }
        }
    });
});

