/*
    Script to control the third party content we are displaying on this website. It gets tagged as targeting so the cookieconsent can block that script if the user has declined all cookies.
    So, default state off all thir party content is inactive or a message saying that it got blocked because of current cookie settings.
    Only if all cookies got accepted we release this script because it won't be blocked and actually embedd the content.
*/

function updateElementClasses(){
    // Hold the references to the third party content DOM Elements
    // Get all elements with the data-cookiecategory attribute
    var elements = document.querySelectorAll('[data-cookiecategory]');
    //If this script is executing the user has given consent to the cookies. So you can remove the default class='blocked' from all these elements
    elements.forEach(function(element) {
        var category = element.getAttribute('data-cookiecategory');
        // Check if the user's cookie preferences allow this category
        if (cc.allowedCategory(category)) {
            // Remove the 'blocked' class
            element.classList.remove('blocked');
        }
    });
}

updateElementClasses();
