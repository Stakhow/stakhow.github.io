$(document).ready(function() {
	$('.slider-banner').slick({
		prevArrow: $('.angle-left'),
		nextArrow: $('.angle-right')
	})
	
	
	$('.spincrement').each(function(){
	$(this).prop('Counter', 0).animate({
		Counter: $(this).text()
	},	{
		duration: 4000,
		easing: 'swing',
		step: function(now){
			$(this).text(Math.ceil(now));
		}
	});
	})
	
	var $btnTop = $('.btn-top')
	$(window).on('scroll', function(){
		if($(window).scrollTop() >=200){
			$btnTop.fadeIn();
		}else {
			$btnTop.fadeOut();
		}
	})
	
	$btnTop.on('click', function(){
		$('html, body').animate({scrollTop:0}, 1900)
	})
})


