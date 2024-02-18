// Controlling the 3 steps animation
function iswalkthroughInViewport(element) {
    var walkthroughRect = element.getBoundingClientRect();
    return (
        walkthroughRect.top <= window.innerHeight * 0.7
    );
    }

    function handlewalkthroughScroll() {
        var divs = document.querySelectorAll('.walkthrough-step');
        divs.forEach(div => {
            if (iswalkthroughInViewport(div) && !div.classList.contains('animate'))
                div.classList.add('animate');
        });
    }
    window.addEventListener('scroll', handlewalkthroughScroll);