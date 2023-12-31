function InitializeNavbar(){
    const header = document.querySelector("header");
    let lastScrollTop = 0;

    window.addEventListener(
    "scroll",
    () => {
        var { scrollY } = window;
        if (scrollY - lastScrollTop > 0) {
        // downward scroll
        header.classList.remove("visible");
        } else if (scrollY < lastScrollTop) {
        // upward scroll
        header.classList.add("visible");
        } // else was horizontal scroll
        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
        //Close the navbar box if it was open
        document.body.classList.remove('open');
        },
        { passive: true }
    );

    
    const isMobile = () => {
        const userAgent = navigator.userAgent;
        return navigator.maxTouchPoints > 2;
      };
      
      window.addEventListener("load", () => {
        const appstore = document.querySelector(".appstore-widget");
        if (!isMobile()) {
          appstore.style.display = "none";
        }
      });

}

$(document).ready(()=>InitializeNavbar());