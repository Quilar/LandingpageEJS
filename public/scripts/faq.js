function toggleFaq(element) {
    // Toggle the active state of the question and answer
    element.classList.toggle('active');
    var answer = element.nextElementSibling;
    answer.classList.toggle('active');
    
    // Update icon and accessibility attributes
    var icon = element.querySelector('.faq-icon');
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  }
  