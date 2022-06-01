window.addEventListener('load', function(evt){
	
	//******************************** opening the basket **********************************
	document.querySelector(".basket").addEventListener("click", function(){
		window.open("basket.html", "_self")
	})
	
	
    var past = document.querySelector('#past');
    var current = document.querySelector('#current');
    var currentBtn = document.querySelector('#current-order-btn');
    var pastBtn = document.querySelector('#past-order-btn2');

    currentBtn.addEventListener('click', currentOrders);
    pastBtn.addEventListener('click', pastOrders);

    function currentOrders(){
        past.style.display = 'none';
        current.style.display = 'block';
    }

    function pastOrders(){
        current.style.display = 'none';
        past.style.display = 'block';
    }
})