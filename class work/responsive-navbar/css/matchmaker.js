$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})

	$('#three-lines').click( function () {
		$('#mobile-nav').slideToggle();
	})
	
})