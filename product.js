//*********************************** Setting the quantity of a product ********************************************/

window.addEventListener("load", function(){
	
	document.querySelector(".fa-circle-plus").addEventListener("click", function(){
		var quantity = document.querySelector("#quantity");
		var n = quantity.getAttribute("value");
		n= parseInt(n, 10);
		quantity.setAttribute("value", n + 1);
	})


	document.querySelector(".fa-circle-minus").addEventListener("click", function(){
		var quantity = document.querySelector("#quantity");
		var n = quantity.getAttribute("value");
		n= parseInt(n, 10);
		if(n != 0)
			quantity.setAttribute("value", n - 1);
	})
	
	
	//the recommended products slider
	$(document).ready(function(){
      $('.slider').bxSlider();
    });
})

