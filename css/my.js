jQuery(function($) {

    var $nav = $('.navbar'),
        $win = $(window),
        winH = $win.height();    // Get the window height.

    $win.on("scroll", function () {
       $nav.toggleClass("nav-colored", $(this).scrollTop() > winH );
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});// JavaScript Document