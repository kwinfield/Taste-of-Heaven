
$(document).ready(function(){
	"use strict";
   	DOaction();
    $(window).on('resize',DOaction);
});

function DOaction(){
	"use strict";
	var $nav = $('.navbar'),
		$bar = $('.nav-container'),
		$pgt = $('.page-title'),
        $win = $(window),
		$tog = $('#menubutton'),
        winH = $win.height();
    if($(window).width() >= 1400){
        $(".navbar").removeClass('nav-colored');
		$(window).scroll(function() {
			if ( $(window).scrollTop() > winH ) {
				$pgt.fadeIn('slow');
				$bar.css("opacity", "1");
			} else {
				$pgt.fadeOut('slow');
				$bar.css("opacity", "0");
			}
		});
		$win.on("scroll", function () {
		   $nav.toggleClass("nav-colored", $(this).scrollTop() > winH );
		}).on("resize", function(){ // If the user resizes the window
		   winH = $(this).height(); // you'll need the new height value	
			
    });
    }else if(($(window).width() >= 992) && ($(window).width() <=1399)) {
        $(".navbar").removeClass('nav-colored');
		$(window).scroll(function() {
			if ( $(window).scrollTop() > 350 ) {
				$pgt.fadeIn('slow');
				$bar.css("opacity", "1");
			} else {
				$pgt.fadeOut('slow');
				$bar.css("opacity", "0");
			}
		});
		$win.on("scroll", function () {
		   $nav.toggleClass("nav-colored", $(this).scrollTop() > 350 );
		}).on("resize", function(){ // If the user resizes the window
		   winH = $(this).height(); // you'll need the new height value	
			
    });
    }else if(($(window).width() >= 700) && ($(window).width() <=991)) {
        $(".navbar").removeClass('nav-colored');
		$(window).scroll(function() {
			if ( $(window).scrollTop() > 350 ) {
				$pgt.fadeIn('slow');
				$bar.css("opacity", "1");
				$tog.fadeIn('slow');
			} else {
				$pgt.fadeOut('slow');
				$bar.css("opacity", "0");
				$tog.fadeOut('slow');
			}
		});
		$win.on("scroll", function () {
		   $nav.toggleClass("nav-colored", $(this).scrollTop() > 350 );
		}).on("resize", function(){ // If the user resizes the window
		   winH = $(this).height(); // you'll need the new height value	
			
    });
	}
//	else{
//		$nav.addClass('nav-colored');
//		
//	}
}

