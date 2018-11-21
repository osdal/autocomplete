$(function autocomplete(inp, arr) {
	/*функция принимает два аргумента,
  значеие поля ввода и массив возможных значений*/
  var currentFocus;
  /*функция запускается, когда ничмнают что-либо вводить в поле ввода*/
  $('#myInput').on('input', function() {
  	var a, b, i, val = this.value; /*получаем значение поля ввода*/
  	
      closeAllLists();/*функция, которая убирает все открытые поля автодополнения кроме того, котрое указано в аргументе*/
      function closeAllLists(elem) {
	    var x = $(".autocomplete-items");
	    for (let i = 0; i < x.length; i++) {
	      if (elem != x[i] && elem != inp) {
	        x[i].parent().children(x[i]).remove();
	      }
	    }
	  }
  	 console.log(val);
  });
 
})
	





