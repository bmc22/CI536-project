window.addEventListener('load', function(evt){
	
	//******************************** opening the basket **********************************
	
	document.querySelector(".basket").addEventListener("click", function(){
		window.open("basket.html", "_self")
	})
	
	
    var contactBtn = document.querySelector('#contact-btn');
    var addressBtn = document.querySelector('#address-btn');
    var passwordBtn = document.querySelector('#password-btn');

    
    
    var passwordForm = document.querySelector('#update-pass-frm');

    var currentPass = document.querySelector('#current-pass');
    var newPass = document.querySelector('#new-pass');
    var confirmPass = document.querySelector('#confirm-pass');

    var success = document.querySelector('#success-msg');
    var blank = document.querySelector('#blank-msg');
    var invalid = document.querySelector('#invalid-msg');
    
    contactBtn.addEventListener('click', togglePanel);
    addressBtn.addEventListener('click', togglePanel);
    passwordBtn.addEventListener('click', togglePanel);

    function togglePanel(evt){
        var panelContent = this.nextElementSibling;
        var panelID = this.parentElement.id;
        var panel = this.parentElement;
        var height;
        var icon = this.lastElementChild;

        /*
        Ignore for now

        if(panelID == 'contact'){
            height = '130px';
        } else if(panelID == 'address'){
            height = '170px';
        }
        */


        if(panelContent.style.display === 'block'){
            panelContent.style.display = 'none';
            //panel.style.height = 'fit-content';
            icon.className = 'fa-solid fa-angle-down';
        } else {
            panelContent.style.display = 'block';
            //panel.style.height = height;
            icon.className = 'fa-solid fa-angle-up';
        }
        
        console.log('Div id:' + panelID);
    }

    passwordForm.addEventListener('submit', function(evt){
        evt.preventDefault();

        var okToUpdate = true;
        var noBlanks = true;
        var dataValid = true;

        passwordForm.reset();
        success.style.display = 'none';
        blank.style.display = 'none';
        invalid.style.display = 'none';

        if(currentPass.length === 0){
            noBlanks = false;
        }

        if(newPass.length === 0){
            noBlanks = false;
        }

        if(confirmPass.length === 0){
            noBlanks = false;
        }

        if(newPass != confirmPass){
            dataValid = false;
        }

        if(noBlanks == false || dataValid == false){
            okToUpdate = false;
        }

        if(noBlanks == false){
            blank.style.display = 'block';
        }

        if(dataValid == false){
            invalid.style.display = 'block';
        }

        if(okToUpdate == true){
            currentPass.value = "";
            newPass.value = "";
            confirmPass.value = "";

            success.style.display = 'block';
            blank.style.display = 'none';
            invalid.style.display = 'none';
        }
    })

})