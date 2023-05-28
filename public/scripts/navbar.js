function InitializeNavbar(){
    const header = document.querySelector("header");
    let lastScrollTop = 0;
    
    window.addEventListener(
    "scroll",
    () => {
        var { pageYOffset } = window;
        if (pageYOffset - lastScrollTop > 10) {
        // downward scroll
        header.classList.remove("visible");
        } else if (pageYOffset < lastScrollTop) {
        // upward scroll
        header.classList.add("visible");
        } // else was horizontal scroll
        lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
        //Close the navbar box if it was open
        document.body.classList.remove('open');
        },
        { passive: true }
    );

}

$(document).ready(()=>InitializeNavbar());