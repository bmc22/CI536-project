

var currentTab = 0;
var category;

const categories_map = new Map();

categories_map.set('books', ["Fiction", "History", "Science", "Other"]);
categories_map.set('electronics', ["Mobile phones", "Tablets/iPads", "Computers", "Cameras"]);
categories_map.set('furniture', ["Tables", "Chairs", "Home accessories"]);
categories_map.set('accessories', ["Jewellery", "Glasses", "Watches", "Bags/Purses"]);
categories_map.set('stationery', ["Student essentials", "Calendars/planners", "Filing/Folders", "Notebooks/Papers"]);
categories_map.set('gardening', ["Seeds", "Flowers", "Pots", "Tools"]);




window.addEventListener("load", function(){
	
	//******************************** opening the basket **********************************
	document.querySelector(".basket").addEventListener("click", function(){
		window.open("basket.html", "_self")
	})
	
	//****************************** The upload-an-item form ****************************************
	
	
	document.getElementById("prevBtn").addEventListener("click", nextPrev(-1));
	
	document.getElementById("nextBtn").addEventListener("click", nextPrev(1));
    
	
	showTab(currentTab); // Display the current tab
	
	
	//******************* Highlighting the selected category *****************
	category_classes = ['.sell-books', '.sell-electronics', '.sell-stationery', '.sell-furniture', '.sell-accessories', '.sell-gardening'];
	for(let i =0; i< category_classes.length ; i++){
		document.querySelector('.item_category .upload-item-cat ' + category_classes[i]).addEventListener("click", function(){
			
			for(let i =0; i< category_classes.length ; i++){
				document.querySelector('.item_category .upload-item-cat ' + category_classes[i]).style.border= "none";
			}
			
			this.style.border= "solid #40EAE9";
		})
	}
	
	
	
	//******************* Highlighting the selected delivery option *****************
	delivery_options = document.querySelectorAll(".delivery-info");
	for(let i =0; i< delivery_options.length ; i++){
		delivery_options[i].addEventListener("click", function(){
			
			for(let i =0; i< delivery_options.length ; i++){
				delivery_options[i].style.border= "none";
			}
			
			this.style.border= "solid #40EAE9";
		})
	}
	
	//****************************** Show the delivery options and delivery price when the user selects "delivery" *****************
		document.querySelector("#delivery-option").addEventListener("click", function(){
		document.querySelector(".delivery-options").style.display = "flex";
		document.querySelector(".delivery-fee").style.display = "block";
		 
		document.querySelector("#collection-location").style.display = "none";
		
	});
	
	
	
	//********************* show the delivery price input if the user chooses charged-delivery **********************
	document.querySelector("#charged-delivery").addEventListener("click", function(){
		document.querySelector("#delivery-price").style.display = "block";
	});
	
	
	
	//********************* hide the delivery price input if the user chooses free-delivery **********************
	document.querySelector("#free-delivery").addEventListener("click", function(){
		document.querySelector("#delivery-price").style.display = "none";
	});
	
	
	//********************* hide the delivery price input if the user chooses collection **********************
	document.querySelector("#collection-option").addEventListener("click", function(){
		
		document.querySelector("#delivery-price").style.display = "none";
		document.querySelector("#charged-delivery").checked = false;
		document.querySelector("#free-delivery").checked = false;
		
		//uncheck the delivery option 
		var radios = document.getElementsByTagName('input');
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].type === 'radio' && radios[i].name === 'delivery-option' && radios[i].checked) {
				radios[i].checked = false;
				console.log(radios[i].value);
			}
		}
		
		document.querySelector(".delivery-options").style.display = "none";
		document.querySelector(".delivery-fee").style.display = "none";
		
		document.querySelector("#collection-location").style.display = "block";
		
	});
	
	
	//******************************* read the image *************************
	document.querySelector('#file-upload-input').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('#item-image');
		  var prv_img = document.querySelector('#preview-image');
          img.onload = () => {
              URL.revokeObjectURL(img.src); 
          }

          img.src = URL.createObjectURL(this.files[0]); 
		  img.style.display = "block";
		  
		  prv_img.src = URL.createObjectURL(this.files[0]); 
		  
		  //show the image remove button
		  document.querySelector(".image-title").textContent= this.files[0].name;
		  document.querySelector(".remove-image").style.display= "block";
		  
		  //hide the image input
          document.querySelector('.upload-btn').style.display= "none";
		  document.querySelector('.image-upload').style.border= "none";
		  
      }
	});
	
	
	//create a remove image function which:
	// 1) hides the remove button and the image
	// 2) display the image input back again
	document.querySelector(".remove-image").addEventListener("click", function(){
		this.style.display= "none";
		var img = document.querySelector('#item-image');
		img.style.display= "none";
		img.setAttribute("scr", "images/placeholder.png");
		document.querySelector('#preview-image').setAttribute("src", "images/placeholder.png");
		
		document.querySelector('.upload-btn').style.display= "block";
		document.querySelector('.upload-btn').style.marginTop= "-0.3em";
		document.querySelector('.image-upload').style.border= "solid 1px #000";
	});
	
	
}
);


function showTab(n) {
	
	var x = document.getElementsByClassName("tab");
	
   if(n == 1){
	   //set the content of the next tab depending on the value of the category
	   if(x[n].hasChildNodes()) 
		   displaytabContent(category, x[n]);	  
   }
	
  
  // display the tab after setting its content
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
		submit_btn.setAttribute("value", "Submit");
		
		
		document.getElementById("nextBtn").parentNode.replaceChild(submit_btn, document.getElementById("nextBtn"));
		
		document.getElementById("nextBtn").addEventListener("click", submit_form);
		
		showPreview();
		
  } else {
	  
	  if(document.getElementById("nextBtn").getAttribute("type") == "submit") {
			
			//replace the submit button with a next button when the user moves to a previous tab
			var next_btn = document.createElement("button");
			next_btn.setAttribute("id", "nextBtn");
			next_btn.setAttribute("type", "button");
			next_btn.textContent = "Next";
			
			
			document.getElementById("nextBtn").parentNode.replaceChild(next_btn, document.getElementById("nextBtn"));
			
			document.getElementById("nextBtn").addEventListener("click", nextPrev(1));
	  }
		 
  }
  
  
  fixStepIndicator(n)
  
  
}





const nextPrev = (n) => {
	return (e) => {
				
	
		var radios = document.getElementsByTagName('input');
		for (var i = 0; i < radios.length; i++) {
			if (radios[i].type === 'radio' && radios[i].name === 'category' && radios[i].checked) {
				category = radios[i].value;       
			}
		}
		
		
		
	// Exit the function if no category type was selected
	  if (category == undefined) {
		  alert("You must select a category first");
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




function displaytabContent(cat, tab) {
	
	while(tab.firstChild) {
		tab.removeChild(tab.lastChild);
	}
	
	var left_div = document.createElement("div");
	left_div.classList.add("left");
	
	var right_div = document.createElement("div");
	right_div.classList.add("right");
	
	for( let i = 0; i < categories_map.get(cat).length ; i++) 
	{
	   var div= document.createElement("div");
	   div.classList.add("sell-input");
	   
	   var input = document.createElement("input");
	   input.setAttribute("name", "type");
	   input.setAttribute("type", "radio");
	   input.setAttribute("id", "item-type");
	   input.setAttribute("value", categories_map.get(cat)[i]);
	   div.appendChild(input);
	   
	   var label = document.createElement("label");
	   label.setAttribute("for", "item-type");
	   label.textContent = categories_map.get(cat)[i];			   
	   div.appendChild(label);
	   
	   if(i < categories_map.get(cat).length/2) left_div.appendChild(div);
	   else { right_div.appendChild(div);}
	   
	}

	
	var clear = document.createElement("div");
	clear.classList.add("clear");
	
	var header = document.createElement("h1");
	header.classList.add("form-header");
	header.textContent = "What type of " + cat + " items?"
	
	tab.appendChild(header);
	tab.appendChild(left_div);
	tab.appendChild(right_div);			
	tab.appendChild(clear);
	
}
	
	
	
function showPreview(){
	
	document.querySelector("#preview-item-name").textContent = document.querySelector("#item-name").value;
	
	document.querySelector("#preview-item-description").textContent = document.querySelector("#item-description").value;
	
	document.querySelector("#preview-item-price").textContent = "£" + document.querySelector("#item-price").value;
	
	
	var condition = document.querySelector("#item-condition");
		
	document.querySelector("#preview-item-condition").textContent = condition.selectedOptions[0].value
	
}



function submit_form() {
	
		
	
	if(!(document.querySelector("#collection-option").checked || document.querySelector("#delivery-option").checked)){
		window.alert("Choose a delivery method or collection, and a delivery charge");
		event. preventDefault()
		return false;
	}
	
	
	if(document.querySelector("#delivery-option").checked && 
	!(document.querySelector("#charged-delivery").checked || document.querySelector("#free-delivery").checked)){

		window.alert("Choose a delivery charge");
		event. preventDefault()
		return false;
	}
	
	
	if(document.querySelector("#item-name").value == ""){
		window.alert("enter the item's name");
		event. preventDefault()
		return ;
	}
	
	if(document.querySelector("#item-description").value == ""){
		window.alert("enter the item's description");
		event. preventDefault()
		return ;
	}
	
	
	if(document.querySelector("#item-price").value == ""){
		window.alert("enter the item's price");
		event. preventDefault()
		return ;
	}
	
	
	if(document.querySelector("#item-condition").selectedOptions[0].value == "" ){
		window.alert("enter the item's condition");
		event. preventDefault()
		return ;
	}
	
	
	
}