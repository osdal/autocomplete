var arr = ['aaabbb', 'aacc', 'aadd', 'bbcc'];

function autocomplete(inp, arr) {
	/*функция принимает два аргумента,
  значеие поля ввода и массив возможных значений*/
  var currentFocus;
  /*функция запускается, когда ничмнают что-либо вводить в поле ввода*/
  $('#myInput').on('input', function(event) {
  	var a, b, val = this.value; /*получаем значение поля ввода*/
  	
	  	/*функция, которая убирает все открытые поля автодополнения кроме того, котрое указано в аргументе*/
	      closeAllLists();
		      function closeAllLists(elem) {
			    var x = $(".autocomplete-items");
			    for (let i = 0; i < x.length; i++) {
			      if (elem != x[i] && elem != inp) {
			        x[i].parent().children(x[i]).remove();
			      }
			    }
			  }
	  if (!val) { return false;} /*Проверяем пустой ли инпут*/
	  currentFocus = -1;
	  /*создаем DIV который будет содержать результаты автодополнения*/
	  a = '<div></div>';
	  $(a).attr("id", this.id + "autocomplete-list");
	  $(a).attr("class", "autocomplete-items");
  	  /*добавляем созданный DIV к блоку, который содержит поле ввода
      */
       console.log(a);
  	  $(this).parent().append(a);
  	 /*перебираем базу в которой производится поиск*/
  	 for (i = 0; i < arr.length; i++) {
  	 	// проверяем начинаются ли строки в массиве с тех же символов, котрые введены в поле ввода
  	 	if (arr[i].substr(0, val.length) == val.toUpperCase()) {
  	 		/*для каждого совпадения создаем div:*/
  	 		b = '<div></div>';
  	 		// совпадающие буквы делаем жирными
  	 		b.html("<strong>" + arr[i].substr(0, val.length) + "</strong>");
  	 		b += b.html(arr[i].substr(val.length));
  	 		// добавляем к этому div поле input  которое будет содержать массив выбранных значений
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.on("click", function(event) {
              // отправляем значение поля ввода в параметр основной функции
              inp.value = val;
              // закрываем все открытые списки автодополнений
              closeAllLists();
          });
          a.append(b);
  	 	}	
  	 }
  	
  });
 
}

autocomplete($("myInput"), arr);

var abc = '<p></p>';


console.log(div1);
	





