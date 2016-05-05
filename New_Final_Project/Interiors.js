$(document).ready(function () {



$('#one').click (function() {
	$('.big-image').attr('src', '../new_work_oils/Grid_DeHooch.jpg');
	$('#OtherCaption').text('From Pieter De Hooch Woman Drinking With Soldiers Oil on Canvas. 30" x 36"')
})

$('#two').click (function() {
	$('.big-image').attr('src', '../new_work_oils/Edmund_Tarbell_Commission.jpg');
	$('#OtherCaption').text('Interpretation of Edmund Tarbells "New England Interior" Oil on Canvas. 40" x 48". 2014.')
})

$('#three').click (function() {
	$('.big-image').attr('src', '../new_work_oils/adorationo_Sheep_17x14.jpg');
	$('#OtherCaption').text('17"x14" Untitled. Oil on Canvas. 2015.')
})

$('#four').click (function() {
	$('.big-image').attr('src', '../new_work_oils/Tarbell_study_17x14.jpg');
	$('#OtherCaption').text('Tarbell Study. Oil On Canvas. 17" x 14". 2014')
})

$('#five').click (function() {
	$('.big-image').attr('src', '../new_work_oils/de_hooch_interior.jpg');
	$('#OtherCaption').text('30" x 24" Oil On Canvas. 2014.')
})

$('#six').click (function() {
	$('.big-image').attr('src', '../new_work_oils/room_of_resistance_36x36bw.jpg');
	$('#OtherCaption').text('"Room of Resistance (Black and White)" Oil on Canvas. 2015.')
})



$('.fa').click( function () {
		$('#mobile-nav').slideToggle();
	})

})
