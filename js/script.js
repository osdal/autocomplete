var base = ["vghkf", "dthdt", "gigi"];

var suggestion = $('<div></div>');


$('#autocomplete').keyup(function() {
			suggestion.text($('#autocomplete').val())
		});


$("#autocomplete").after(suggestion);

