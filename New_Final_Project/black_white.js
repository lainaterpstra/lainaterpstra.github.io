$(document).ready(function () {

$('#one').click (function() {
	$('.big-image').attr('src', '../black_and_white/franzkline_portrait.jpeg');
	$('#OtherCaption').text('Franz Kline Portrait. Acrylic Housepaint on paper. 51.5" x 46" 2010.')
})

$('#two').click (function() {
	$('.big-image').attr('src', '../black_and_white/self_portrait.jpeg');
	$('#OtherCaption').text('Self Portrait. Acrylic Housepaint on paper. 51.5" x 34" 2010.')
})

$('#three').click (function() {
	$('.big-image').attr('src', '../black_and_white/black_and_white_3.jpeg');
	$('#OtherCaption').text('Untitled. Acrylic Housepaint on paper. 75" x 50" 2010.')
})

$('.fa').click( function () {
		$('#mobile-nav').slideToggle();
	})

})



/*

give all thumbnails a 'thumb' class.

html
<div class="sidebar">
        	<ul> 
        			<a class="thumb" href="..largeimage.jpeg"><img src="../black_and_white/franzkline_portrait.jpeg"></a> 
                    <img id="two" src="../black_and_white/self_portrait_thumb.jpg"> 
                    <img id="three" src="../black_and_white/large_b_w_thumb.jpg"> 
                  

        	</ul>
        </div>


<div >


js

$('.thumb').click(function(){
	e.preventDefault();
	var imgSrc = $(this).attr('href');
	$('.big-image').attr('src', imgSrc);
});







*/