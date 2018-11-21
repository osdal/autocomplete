var base = ["aaabbb", "aabcdc", "aaaddd", "e", "ea"],
	inp =$('#autocomplete').val(),
	res,
	listRes,
	suggestion = $('<div></div>');




$('#autocomplete').keyup(function() {
			 inp = $('#autocomplete').val();
			
			 for (let i= 0; i < base.length; i++) {
					if(base[i].indexOf(inp) != -1 && inp != '') {
						console.log(base[i]);
						res = $("<p>" + base[i] + "</p>");
						listRes = $("#autocomplete").after(res);

					} else if () {

					}
			}
			
		});


	





