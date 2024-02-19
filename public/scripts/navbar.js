function InitializeNavbar(){
    const header = document.querySelector("header");
    let lastScrollTop = 0;

    window.addEventListener(
    "scroll",
    () => {
        var { scrollY } = window;

        if (scrollY < lastScrollTop) {
            // vertical scroll has been detected
            // If it was the first scroll make the navbar visible by now.
            if(!header.classList.contains('visible'))
                header.classList.add("visible");
        } 
        // else was horizontal scroll
        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
        //Close the navbar box if it was open
        document.body.classList.remove('open');
        },
        { passive: true }
    );
}

$(document).ready(()=>InitializeNavbar()); 