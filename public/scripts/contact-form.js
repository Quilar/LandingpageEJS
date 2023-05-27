function initializeForm(){
    var form = document.getElementById('contact-form');
    var response = document.getElementById('response');

    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Perform form validation if needed
    
    // Send form data to the server (example using fetch API)
    fetch('/submit-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, message: message })
    })
    .then(function(response) {
      // Handle the server response if needed
      return response.json();
    })
    .then(data => {
      if(data.error) throw Error(data.message);
      else {
        console.log(data.message);
        response.innerHTML = data.message;
        response.style.color = '#00ff00';
        form.reset();
      }
    })
    .catch(function(error) {
      // Handle any errors that occurred during form submission
      response.innerHTML = 'Ein Error ist beim versenden aufgetreten. Sende uns deine Anfrage bitte an info@quilar.de.';
      response.style.color = 'red';
    });
  });
}
  
$(document).ready(()=>initializeForm());