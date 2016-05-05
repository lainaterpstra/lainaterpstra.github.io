$(document).ready(function () {

// 	$('.thumb').click(function(){
// 	e.preventDefault();
// 	var imgSrc = $(this).attr('href');
// 	$('.big-image')= imgSrc;
// });

$('#one').click (function() {
	$('.image').attr('src', '../new_work_oils/IMG_1929.jpg');
	$('#caption').text('deHooch')
})

$('#two').click (function() {
	$('.image').attr('src', '../new_work_oils/caraggio_portrait_webresized.jpg'); 
	$('#caption').text('Carravagio')
})

$('#three').click (function() {
	$('.image').attr('src', '../new_work_oils/large_socrates.jpg');
	$('#caption').text('Large Socrates')
})

$('#four').click (function() {
	$('.image').attr('src', '../new_work_oils/IMG_2047.jpg');
})

$('#five').click (function() {
	$('.image').attr('src', '../new_work_oils/from_damnation.jpg');
})

})

//get the text inside p tag, set it equal to 