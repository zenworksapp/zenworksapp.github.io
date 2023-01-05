$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

// // Owl Carousel
//
      $("#owl-demo").owlCarousel({
		  autoPlay : true,
        pagination: false,
		navigation : false

      });

    $("#owl-demo1").owlCarousel({
        autoPlay : 3000,
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
    });

    $("#owl-demo2").owlCarousel({
        autoPlay : true,
        pagination: false,
        navigation : false

    });

	$("#owl-demo4").owlCarousel({
		autoPlay : true,
		pagination: false,
		navigation : false

	});

    $("#owl-demo3").owlCarousel({
        autoPlay : true,
        pagination: false,
        navigation : false

    });

	// Fancybox
	$('.work-box').fancybox();

	// Page Scroll
	var sections = $('section');
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76;
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this);
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});