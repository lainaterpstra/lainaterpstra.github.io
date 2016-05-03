$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})

	$('.fa').click( function () {
		$('#smallest-nav').slideToggle();
	})
	
})