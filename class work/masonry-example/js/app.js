$(document).ready(function () {
})
$('.grid').masonry({
  
  itemSelector: '.grid-item',
  columnWidth: 200
});

$(.'grid').on( 'click', '.grid-item', function() {
  // remove clicked element
  $(.'grid').masonry( 'remove', this ).masonry('layout');
    // layout remaining item elements
    
});