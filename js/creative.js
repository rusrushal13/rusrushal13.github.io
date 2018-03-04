/*!
 * Creative v1.0.4 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Mapbox
    L.mapbox.accessToken = 'pk.eyJ1IjoicnVzcnVzaGFsMTMiLCJhIjoiY2plOXg5ejF6MTZ3azJ4bXJuaGJ3Y2kzMiJ9.fMSKgfJQcZe0PKHxNmGzEg';
    var map = L.mapbox.map('map', 'jaseemabid.0da3cnd2');
    map.scrollWheelZoom.disable();

    // Gallery
    $('.magnific-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});

})(jQuery); // End of use strict
