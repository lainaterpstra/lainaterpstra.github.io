// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

$(document).ready(function () {

$('#a10').click(a10)
$('#a20').click(a20)
$('#a30').click(a30)

$('#n10').click(s10)
$('#n20').click(s20)
$('#n30').click(s30)

$('#red').click(red)
$('#out').click(out)
$('#blue').click(blue)



function a10() {

var centernumber = $('#out').text();
centernumber = parseInt(centernumber) + 10;
$('#out').text(centernumber);
}

function a20() {
var centernumber = $('#out').text();
centernumber = parseInt(centernumber) + 20;
$('#out').text(centernumber);

}

function a30() {
var centernumber = $('#out').text();
centernumber = parseInt(centernumber) + 30;
$('#out').text(centernumber);

}

function s10() {

var centernumber = $('#out').text();
centernumber = parseInt(centernumber) - 10;
$('#out').text(centernumber);
}

function s20() {

var centernumber = $('#out').text();
centernumber = parseInt(centernumber) - 20;
$('#out').text(centernumber);
}

function s30() {

var centernumber = $('#out').text();
centernumber = parseInt(centernumber) - 30;
$('#out').text(centernumber);
}

function out() {
var centernumber = $('#out').text();
centernumber = 0;
$('#out').text(centernumber);

}

function red() {
var red = $('#red').text();
red = $('#wrapper').css('backgroundColor', 'red')

}

function blue () {
var blue = $('#blue').text();
red = $('#wrapper').css('backgroundColor', 'blue')

}


})