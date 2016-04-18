$(document).ready(function () {


$("convertoC").click(function () {

var finput = $("#farenheitinput").val();
finput = parseInt(finput) * 1.8 + 32;
$('celciusoutput').html() = finput;

})

$("convertoF").click(function () {

var cinput = $("#celsiusinput").val()
cinput = parseInt(cinput) * 1.8 + 32;
$('celciusoutput').html() = cinput;

})


})