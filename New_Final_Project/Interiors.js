$(document).ready(function () {



$('#one').click (function() {
	$('.big-image').attr('src', '../new_work_oils/Grid_DeHooch.jpg');
	$('#OtherCaption').text('From Pieter De Hooch Woman Drinking With Soldiers Oil on Canvas. 30" x 36"')
})

$('#two').click (function() {
	$('.big-image').attr('src', '../new_work_oils/Edmund_Tarbell_Commission.jpg');
})

$('#three').click (function() {
	$('.big-image').attr('src', '../new_work_oils/adorationo_Sheep_17x14.jpg');
})

$('#four').click (function() {
	$('.big-image').attr('src', '../new_work_oils/Tarbell_study_17x14.jpg');
})

$('#five').click (function() {
	$('.big-image').attr('src', '../new_work_oils/de_hooch_interior.jpg');
})

$('#six').click (function() {
	$('.big-image').attr('src', '../new_work_oils/room_of_resistance_36x36bw.jpg');
})



$('.fa').click( function () {
		$('#mobile-nav').slideToggle();
	})

})
