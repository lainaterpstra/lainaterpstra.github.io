$(document).ready(function () {



$('#one').click (function() {
	$('.big-image').attr('src', '../new_work_oils/las_meninas_80x52.jpg');
	$('#OtherCaption').text('Velezquez Las Meninas Interpretation. Oil on Canvas, 80 x 52" 2013.')
})

$('#two').click (function() {
	$('.big-image').attr('src', '../new_work_oils/tangle_72dpi.jpg');
	$('#OtherCaption').text('Tangle. (Glasgow School of Art) Oil on Canvas. 40" x 60" 2013.')
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

$('.fa').click( function () {
		$('#mobile-nav').slideToggle();
	})

})