//*********************************** Setting the quantity of a product ********************************************/

window.addEventListener("load", function(){
	
	

	
	//******************************** updating the quantities of the products in the basket *********************************		
		
	
	for (var i = 1 ; i < 4 ; i ++)
	
	{   productNum = "product" + i.toString();
		   
	    console.log(productNum);
	
		document.querySelector('.' + productNum + ' .fa-square-minus').addEventListener("click", reduceQTY(productNum));
		
		
		document.querySelector("." + productNum + " .fa-square-plus").addEventListener("click", addQTY(productNum))
	
	
	}
	
})




const reduceQTY = (productNum) => {
  	return (e) => {
      var quantity = document.querySelector('.' + productNum + ' #quantity');
		var n = quantity.getAttribute("value");
		
		n = parseFloat(n);
		
		if(n != 0) {
			quantity.setAttribute("value", n-1);
			
			totalAmount = parseFloat(document.querySelector("#totalAmount").textContent);
				
			document.querySelector("#totalAmount").textContent = (totalAmount - 
			parseFloat(document.querySelector('.' + productNum + ' #thePrice').textContent.slice(9))).toFixed(2)
			
		}
		
		if(quantity.getAttribute("value") == 0) {
			remove(productNum);
		}
    }
}




const addQTY = (productNum) => {
	
  	return (e) => {
	
		var quantity = document.querySelector("." + productNum + " #quantity");
		var n = quantity.getAttribute("value");
		
		n= parseFloat(n);
		quantity.setAttribute("value", n + 1);
		
		totalAmount = parseFloat(document.querySelector("#totalAmount").textContent);
		
		document.querySelector("#totalAmount").textContent = (totalAmount + 
		parseFloat(document.querySelector("." + productNum + " #thePrice").textContent.slice(9))).toFixed(2);
	}

}


function remove(productNum) {
	
	console.log("success");
	document.querySelector("." + productNum).style.display = "none";
}
