$(document).ready(function () {

$('#one').click (function() {
	$('.big-image').attr('src', '../new_work_oils/IMG_2047.jpg');
	$('#OtherCaption').text('Variation from De Hooch A Soldier with Dead Birds. Oil on canvas paper. 2015.')
})

$('#two').click (function() {
	$('.big-image').attr('src', '../new_work_oils/caraggio_portrait_webresized.jpg');
	$('#OtherCaption').text('From Rembrandt Portrait in Meditation. Oil on canvas paper. 16" x 12". 2015.')
})

$('#three').click (function() {
	$('.big-image').attr('src', '../new_work_oils/large_socrates.jpg');
	$('#OtherCaption').text('From Jacques Louis David The Death Of Socrates. Oil on canvas paper. 2015.')
})

$('#four').click (function() {
	$('.big-image').attr('src', '../new_work_oils/IMG_1929.jpg');
	$('#OtherCaption').text('Untitled (De Hooch Variation) Oil on canvas paper. 23" x 23" 2015.')
})

$('#five').click (function() {
	$('.big-image').attr('src', '../new_work_oils/from_damnation.jpg');
	$('#OtherCaption').text('Untitled: From Bela Tarr Damnation Oil on Canvas. 40" x 47" 2015')
})

$('.fa').click( function () {
		$('#mobile-nav').slideToggle();
	})

})



	
	
