(function ($, sr) {

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    // smartresize 
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };

})(jQuery, 'smartresize');

var $ = jQuery;


(function () {


    ///////////////////////////////
    // Set Home Slideshow Height
    ///////////////////////////////

    function setHomeBannerHeight() {
        var windowHeight = jQuery(window).height();
        jQuery('#header').height(windowHeight);
    }

    ///////////////////////////////
    // Center Home Slideshow Text
    ///////////////////////////////

    function centerHomeBannerText() {
        var bannerText = jQuery('#header > .center');
        var bannerTextTop = (jQuery('#header').actual('height') / 2) - (jQuery('#header > .center').actual('height') / 2) - 40;
        bannerText.css('padding-top', bannerTextTop + 'px');
        bannerText.show();
    }

    function setHeaderBackground() {
        var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top 

        if (scrollTop > 300 || jQuery(window).width() < 700) {
            jQuery('#header .top').addClass('solid');
        } else {
            jQuery('#header .top').removeClass('solid');
        }
    }


    ///////////////////////////////
    // Initialize
    ///////////////////////////////

    jQuery.noConflict();
    setHomeBannerHeight();
    centerHomeBannerText();

    //Resize events
    jQuery(window).smartresize(function () {
        setHomeBannerHeight();
        centerHomeBannerText();
    });

})();


///////////////////////////////
// Smooth Scroll
///////////////////////////////


smoothScroll.init();


///////////////////////////////
// Animate Css
///////////////////////////////
var $ = jQuery;

function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

$(document).ready(function () {
    $('#scrollToContent').each(function () {
        animationHover(this, 'pulse');
    });
});


///////////////////////////////
// Header Fixed
///////////////////////////////


var menu = $('#navigation');
var origOffsetY = menu.offset().top;

function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
        $('#navigation').addClass('nav-wrap');
        $('#services').addClass('exp');
        //$('.content').addClass('menu-padding');
    } else {
        $('#navigation').removeClass('nav-wrap');
        $('#services').removeClass('exp');
        //$('.content').removeClass('menu-padding');
    }


}

document.onscroll = scroll;


///////////////////////////////
// Testimonial Slide
///////////////////////////////

$(document).ready(function () {

    $("#testimonial-container").owlCarousel({
        autoPlay: 5000,
        navigation: false, // Show next and prev buttons
        slideSpeed: 1000,
        paginationSpeed: 1000,
        singleItem: true
    });

});


///////////////////////////////
// google map
///////////////////////////////

function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(5.6557, -.1963),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),
        mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);


//Misc
var st = $('#some').val();
$('#some').hide();

setInterval(function () {
    if ($(window).width() < 500) {
        $('.htem').show();
        $('.htem2').hide()
    } else {
        $('.htem').hide();
        $('.htem2').show();
    }
}, 10);


$('#statusMessage').hide();


function ness() {
    var tt = $('#messCon').text().toString();

    if (tt === "Message Sent") {
        $('#statusMessage').removeClass('alert-danger').addClass('alert-success').show(400, 'linear').delay(5000).hide('slow', 'linear');
    } else if (tt == '') {
        $('#statusMessage').hide();
    } else /*if(tt == 'Message Not Sent')*/{
        $('#statusMessage').removeClass('alert-success').addClass('alert-danger').show(400, 'linear').delay(5000).hide('slow', 'linear');

        alert(tt.toString());
    }

    if (st == 1)
        $('#mail').addClass('text-danger');
    else
        $('#mail').removeClass('text-danger');


}


ness();

