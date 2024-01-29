function ModalOpener(){
  document.getElementById('playVideoBtn').addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');
    modal.style.display = 'block';
    video.play();
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');
    video.pause();
    modal.style.display = 'none';
  });
  
  
  // Event listener for closing the modal when clicking outside of the video
  window.onclick = function(event) {
  window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
      var video = document.getElementById('modalVideo');
      video.pause();
      modal.style.display = 'flex';
      modal.style.alignItems = 'center';
    }
  };
  
  // Additional listener for touch events
  window.ontouchstart = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
      var video = document.getElementById('modalVideo');
      video.pause();
      modal.style.display = 'none';
    }
  };
  }
}

  $(document).ready(()=> ModalOpener());
  