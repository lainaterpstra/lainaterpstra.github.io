$(document).ready(function () {

$('#one').click (function() {
	$('.big-image').attr('src', '../black_and_white/franzkline_portrait.jpeg');
})

$('#two').click (function() {
	$('.big-image').attr('src', '../black_and_white/self_portrait.jpeg');
})

$('#three').click (function() {
	$('.big-image').attr('src', '../black_and_white/black_and_white_3.jpeg');
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