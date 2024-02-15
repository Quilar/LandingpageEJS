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