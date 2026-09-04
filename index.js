
document.onload = function() {
    var viewportWidth = getViewportWidth();
    if (viewportWidth < 800) {
        document.querySelector(".hero").innerHTML = "<div class='row d-flex justify-content-center'> <h1 class='col-lg-2 col-md-12 name text-center' style='margin-top: 50px'>KADEN [j] TRIGUEIRO</h1><img src='images/headshot.PNG' class='col-4 col-md-4 col-sm- col-4'></div>";
    }
    else {
        document.querySelector(".hero").innerHTML = originalHTML;
    }
};

// Function to get viewport width with cross-browser support
function getViewportWidth() {
    if (typeof window.innerWidth === 'number') {
        // Most modern browsers
        return window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
        // IE 6+ in standards-compliant mode
        return document.documentElement.clientWidth;
    } else if (document.body && document.body.clientWidth) {
        // Older browsers
        return document.body.clientWidth;
    }
    return null; // Unable to determine
}

var originalHTML = document.querySelector(".hero").innerHTML;
console.log(originalHTML);



