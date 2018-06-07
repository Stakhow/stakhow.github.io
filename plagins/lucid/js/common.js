$(document).ready(function () {

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$('.menu-drop').toggleClass('active');
	}); // end click

	$('.nav li a').click(function(){
		$('.menu-drop').toggleClass('active');
		$('#nav-icon1').toggleClass('open');
	}); // end click

	var mq = window.matchMedia('(max-width: 481px)');
	if(mq.matches) {
	    $('.pricing__content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
  		autoplaySpeed: 2000,
  		arrows: false,
  		dots: true,
  		speed: 1550,
	});
	} else {
	    $('.pricing__content').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
  		autoplaySpeed: 2000,
  		arrows: false,
  		dots: true,
  		speed: 1550,
	});
	};
	$('.features__item').css("animation-duration", "3s").animated('bounceInLeft', 'bounceOutLeft');
	$('.btn').addClass('animated pulse');
	$('.about__content').animated('slideInRight', 'slideOutRight');
	$('.testimonials__content').animated('slideInLeft', 'slideOutLeft');
	$('.plans__item').animated('slideInUp', 'slideOutLeft');
	$('.pricing__content').animated('zoomIn', 'zoomOut');


	$('#send-form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			},
			subject: {
				required: true
			}
		} // end rules
	}); // end validate
	$(".nav li a").mPageScroll2id({
    scrollSpeed: 1500
	}); //end mPageScroll2id



}) // end ready 