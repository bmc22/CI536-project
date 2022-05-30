
var nav2;
var index = 0;


window.addEventListener("load", function() {
	
	var url = window.location.href.split("/");
	
	var page = url[url.length -1];
	
	if(page != "index.html"){
		
		let navPages = [...new Set(localStorage.getItem("previous_pages").split(" "))];
		
		for(let i =0; i < navPages.length ; i++){
			
			// ****************** if the current page is in the list stop iterating
			if((navPages[i] + ".html") == page) return;
			
			var a = document.createElement("a");
			page_name= (navPages[i] == "Home")? "index":navPages[i]
			a.setAttribute("href", page_name + ".html");
			a.setAttribute("id", "previous_page");
			a.textContent = navPages[i];
			
			document.querySelector("#nav2").appendChild(a);
			
			var arrow = document.createElement("span");
			arrow.textContent= "  \u21D2  " ;
			
			document.querySelector("#nav2").appendChild(arrow);
			
		}
	}
	
	
	if(page == "index.html") {
		nav2 = "Home";
	}
	
	else {
		nav2= page.split(".")[0];
	}
	
	
	if(nav2 == "Home") 
		localStorage.setItem('previous_pages', "Home");
	else {
		localStorage.setItem('previous_pages', localStorage.getItem("previous_pages") + " " + nav2);
	}
})