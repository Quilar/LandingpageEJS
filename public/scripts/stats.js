document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-header-number');
    const animationDuration = 2000; // milliseconds
  
    const formatNumber = (number) => {
      // Add formatting for thousands, millions, etc. if needed
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  
    const animateCountUp = (el) => {
      let start = 0;
      const end = parseInt(el.getAttribute('data-count'), 10);
      const increment = end / (animationDuration / 30); // Determine the value of each increment
      const circle = el.previousElementSibling.querySelector('circle:nth-child(2)');
      const maxOffset = parseInt(circle.getAttribute('stroke-dasharray'), 10);
      let currentOffset = maxOffset;
  
      const increaseCount = setInterval(() => {
        start += increment;
        currentOffset -= (increment / end) * maxOffset; // Decrease dash offset as the number increases
  
        // Update the text content and the circle's stroke-dashoffset
        el.textContent = formatNumber(Math.floor(start));
        circle.style.strokeDashoffset = currentOffset;
  
        if (start >= end) {
          clearInterval(increaseCount);
          el.textContent = formatNumber(end); // Ensure the final number is correct
          circle.style.strokeDashoffset = 0; // Ensure the circle animation is complete
        }
      }, 17);
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.7 }); // Trigger when 70% visible
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  