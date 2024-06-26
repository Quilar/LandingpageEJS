/*
    Script to control the third party content we are displaying on this website. It gets tagged as targeting so the cookieconsent can block that script if the user has declined all cookies.
    So, default state off all thir party content is inactive or a message saying that it got blocked because of current cookie settings.
    Only if all cookies got accepted we release this script because it won't be blocked and actually embedd the content.
*/

function updateCookiePlaceholders(){
    // Hold the references to the third party content DOM Elements
    // Get all elements with the data-category attribute
    var elements = document.querySelectorAll('[data-category]');

    //If this script is executing the user has given consent to the cookies. So you can remove the default class='blocked' from all these elements
    elements.forEach(function(element) {
        var category = element.getAttribute('data-category');
        // Check if the user's cookie preferences allow this category
        if (CookieConsent.acceptedCategory(category)) {
            // Remove the 'blocked' class
            element.classList.remove('blocked');

            // Assuming the placeholder is a previous sibling of the content and hide it
            var placeholder = element.previousElementSibling;
            if (placeholder && placeholder.classList.contains('cookie-placeholder')) {
                placeholder.style.display = 'none';
            }
        }
        else{
            // Remove the 'blocked' class
            element.classList.add('blocked');

            // Assuming the placeholder is a previous sibling of the content and hide it
            var placeholder = element.previousElementSibling;
            if (placeholder && placeholder.classList.contains('cookie-placeholder')) {
                placeholder.style.display = 'flex';
            }
        }
    });
}
