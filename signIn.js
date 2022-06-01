window.addEventListener('load', function(evt){
    
	
    var lgFrm = document.querySelector('#log-in');
    var snFrm = document.querySelector('#sign-up');
    var lgBtn = document.querySelector('#log-in-btn');
    var snBtn = document.querySelector('#sign-up-btn');
    var lgBtn2 = document.querySelector('#log-in-btn2');

    snBtn.addEventListener('click', signUpForm);
    lgBtn2.addEventListener('click', logInForm);

    function signUpForm(){
        lgFrm.style.display = 'none';
        snFrm.style.display = 'block';

    }

    function logInForm(){
        snFrm.style.display = 'none';
        lgFrm.style.display = 'block';
    }


    lgFrm.addEventListener('submit', function(evt){
        evt.preventDefault();
        location.replace('index.html');
    });
    
    snFrm.addEventListener('submit', function(evt){
        evt.preventDefault();
        location.replace('index.html');
    });

    


})