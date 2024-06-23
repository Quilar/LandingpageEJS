function InitializeNavbar(){
    const header = document.querySelector("header");
    const navbar = document.querySelector("nav");
    let lastScrollTop = 0;
    const scrollThreshold = 50;

    window.addEventListener(
    "scroll",
    () => {
        var { scrollY } = window;

        if (scrollY < lastScrollTop) {
            // vertical scroll has been detected
            // If it was the first scroll make the navbar visible by now.
            if(!header.classList.contains('visible'))
                navbar.classList.remove("init");
                header.classList.add("visible");

            if(lastScrollTop -scrollY > scrollThreshold){
                header.classList.add("visible");
            }
        } 
        else{
            //scrolling down
            if(lastScrollTop + scrollY > scrollThreshold){
                //Prevent the snapback at the top remove the navbar
                header.classList.remove("visible");
            }
        }
        
        lastScrollTop = scrollY <= 0 ? 0 : scrollY;
        //Close the navbar box if it was open
        document.body.classList.remove('open');
        },
        { passive: true }
    );
}

document.addEventListener('DOMContentLoaded', ()=>InitializeNavbar());