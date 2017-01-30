$(document).ready(function() {
    $('#example').DataTable();
} );
var table = $('#example').DataTable();

$('#test').on( 'click', function () {
    table.page.len( 5 ).draw();
} );
$('#test2').on( 'click', function () {
    table.page.len( 10 ).draw();
} );
$('#test3').on( 'click', function () {
    table.page.len( 15 ).draw();
} );
$('#test4').on( 'click', function () {
    table.page.len( 25 ).draw();
} );