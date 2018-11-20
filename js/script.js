var base = ["vghkf", "dthdt", "gigi"];

var suggestion = $('<div></div>'),
    inputData = $("#autocomplete").val();

    console.log($("#autocomplete").val());

$('<div></div>').text(inputData);

$("#autocomplete").after(suggestion);

$( "input" )
  .keyup(function() {
    var value = $( this ).val();
    $( "p" ).text( value );
  })
  .keyup();