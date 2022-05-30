var currentTab = 0;
var payment_method

window.addEventListener("load", function(){
	
	
	//******************************** opening the basket **********************************
	document.querySelector(".basket").addEventListener("click", function(){
		window.open("basket.html", "_self")
	})
	
	
	showTab(currentTab);
	
	document.querySelector("#prevBtn").addEventListener("click", nextPrev(-1));
	
	document.querySelector("#nextBtn").addEventListener("click", nextPrev(1));
	
	
    
})




function showTab(n) {
	
	var x = document.getElementsByClassName("tab");
	
   x[n].style.display = "block";
  
 
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    
		//replace the next button with a form submit button
		var submit_btn = document.createElement("input");
		submit_btn.setAttribute("id", "nextBtn");
		submit_btn.setAttribute("type", "submit");
		submit_btn.setAttribute("value", "Place order");
		
		
		document.getElementById("nextBtn").parentNode.replaceChild(submit_btn, document.getElementById("nextBtn"));
		
		document.getElementById("nextBtn").addEventListener("click", submit_form);
		
  } else {
	  
	  if(document.getElementById("nextBtn").getAttribute("type") == "submit") {
			
			//replace the submit button with a next button when the user moves to a previous tab
			var next_btn = document.createElement("button");
			next_btn.setAttribute("id", "nextBtn");
			next_btn.setAttribute("type", "button");
			next_btn.textContent = "Payment";
			
			
			document.getElementById("nextBtn").parentNode.replaceChild(next_btn, document.getElementById("nextBtn"));
			
			document.getElementById("nextBtn").addEventListener("click", nextPrev(1));
	  }
		 
  }
  
  
  fixStepIndicator(n);

}





const nextPrev = (n) => {
	return (e) => {
				
		
	var radios = document.getElementsByTagName('input');
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].type === 'radio' && radios[i].name === 'payment-method' && radios[i].checked) {
			payment_method = radios[i].value;       
		}
	}
			
	// Exit the function if no category type was selected
	  if (payment_method == undefined) {
		  alert("Select a payment method");
		  return false;
	  }
	  
	  
	 // This function will figure out which tab to display
	  var x = document.getElementsByClassName("tab");
	  
	  
	  // Hide the current tab:
	  x[currentTab].style.display = "none";
	  
	  // Increase or decrease the current tab by 1:
	  currentTab = currentTab + n;
	  
	  // if you have reached the end of the form...
	  if (currentTab >= x.length) {
		// ... the form gets submitted:
		document.getElementById("regForm").submit();
		return false;
	  }
	  
	  
	  // Otherwise, display the correct tab:
	  showTab(currentTab);
		
		
	}
	
}



function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  for(let j = 0 ; j <= n; j++){
	x[j].className += " active";
   }
   
   if(n==0){
	   x[n].className += " active";
   }
   
}


function submit_form() {
	
	
}