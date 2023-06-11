const initializeHero = ()=>{
    window.addEventListener("load", ()=>{
        const hero = document.querySelector(".hero-section");
        const heroMobile = hero.querySelector(".mobile");
        const heroDesktop = hero.querySelector(".desktop");

        if(/Mobi|Android/i.test(navigator.userAgent))
        {
            heroDesktop.style.display = "none";
            heroMobile.style.display = "flex";
        }
        else{
            heroMobile.style.display = "none";
            heroDesktop.style.display = "flex";
        }
        console.log("Set");
    
    });
}

$(document).ready(()=>initializeHero());