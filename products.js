
window.addEventListener("load", function() {

	document.querySelector("#filter").addEventListener("click", function () {
		if(window.innerWidth >= 800) {
			document.querySelector("#filters").style.width = "30%";
		}
		else {
			document.querySelector("#filters").style.width = "100%";
		}
	})

	document.querySelector(".closebtn").addEventListener("click", function () {
		document.querySelector("#filters").style.width = "0";
	})

	document.querySelector("#apply-filters").addEventListener("click", function(){
		document.querySelector("#filters").style.width = "0";
	})
	
	
	var stars= document.querySelectorAll(".fa-star");

	for (let i =0; i < stars.length ; i++){
		stars[i].addEventListener("click", function(){
		    
			for( var j = 0 ; j < i + 1 ; j++) {
				stars[j].classList.add("checked");
				stars[j].classList.remove("unchecked");
			}
			
			for( var j = i + 1 ; j < stars.length ; j++) {
				stars[j].classList.add("unchecked");
				stars[j].classList.remove("checked");
			}
			
			
		    document.querySelector("#stars").setAttribute("value", i+1);
		})
	}
	
	
	
	//******************************** Selecting a subcategory **********************************
	
	document.querySelector("#item").addEventListener("click", function(){ 
		window.open("product.html", "_self")
	})
	
	
	//******************************** opening the basket **********************************
	
	document.querySelector(".basket").addEventListener("click", function(){
		window.open("basket.html", "_self")
	})
	
})


//hiding the filters on scroll

window.addEventListener("scroll", function() {
	if(window.innerWidth >= 800)
		document.querySelector("#filters").style.width = "0";
})


