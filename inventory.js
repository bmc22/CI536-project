window.addEventListener('load', function(evt){
	
	//******************************** opening the basket **********************************
	
	document.querySelector(".basket").addEventListener("click", function(){
		window.open("basket.html", "_self")
	})
	
	
    var panelButton = document.querySelectorAll('.header-btn');

    for(let i = 0; i < panelButton.length; i++){
        panelButton[i].addEventListener('click', togglePanel);
    }

    
    

    function togglePanel(evt){
        var panelContent = this.nextElementSibling;
        var panelID = this.parentElement.id;
        var panel = this.parentElement;
        var height;
        var icon = this.lastElementChild;



        if(panelContent.style.display === 'block'){
            panelContent.style.display = 'none';
            icon.className = 'fa-solid fa-angle-down';
        } else {
            panelContent.style.display = 'block';
            icon.className = 'fa-solid fa-angle-up';
        }
        
        
    }


})