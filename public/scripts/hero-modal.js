function ModalOpener(){
  document.getElementById('playVideoBtn').addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo'); //Youtube iframe.

    //Grab the src-url from the holding property and insert it into src-property
    var videoUrl = video.getAttribute('data-lazy-load');
    // Set the video URL as the src of the iframe and add autoplay
    video.src = videoUrl + "&autoplay=1";

    modal.style.display = 'flex';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');
    video.src = ''; 
    modal.style.display = 'none';
  });
  
  
  // Event listener for closing the modal when clicking outside of the video
  window.onclick = function(event) {
  window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
      var video = document.getElementById('modalVideo');
      video.src = ''; 
      modal.style.display = 'none';
    }
  };
  
  // Additional listener for touch events
  window.ontouchstart = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
      var video = document.getElementById('modalVideo');
      video.src = ''; 
      modal.style.display = 'none';
    }
  };
  }
}

  $(document).ready(()=> ModalOpener());
  