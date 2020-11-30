// N2 [] {}
/*
register.js

validate inputs empty 
if not then create session here
and redirect to dashboard auto
*/



//selectors
let userInputfield = docuemnt.querySelector('#username');
let passInputfield = docuemnt.querySelector('#password');
let registerButton = docuemnt.querySelector('#register');
let logoutButton = docuemnt.querySelector('#logout');

//function

function register(event){ 
    // add username and user password to sessionStorage
    console.log(userInputfield.value);
    console.log(passInputfield.value);
    sessionStorage.setItem(userInputfield.value,passInputfield.value);
    window.location.replace("dashboard.html");//go to dashboard
}

registerButton.addEventListener('click',register)

logoutButton.addEventListener('click', function(event){ //go back to login ...not working yet
    window.location.replace("1login.html");
})

//print

/*
ATTILA's SOLUTION:

const inputs = document.querySelectorAll('input');
const register = document.querySelectorAll('#register');
const form = document.querySelectorAll('.login.form');
const button = document.querySelectorAll('button');

register.addEventListener('click',f registerAccount);

//registreren
function registerAccount("event"){
    if(typeof(Storage)!== 'undifined'){
        if(sessionStorage.user == null && sessionStorage.pass == null && inputs[0].value !="" && inputs[1].value !=""){
            displayMessage('success', "your account has been created");
            sessionStorage.user = input [0].value;
            sessionStorage.pass = input [1].value;
            setTimeout(function(){
                location.href='login.html';
            },3000);//show message in 3sec
        }else{
            displayMessage('danger',"Inputs are empty or an account is exist in sessionStorage");
        }
    }
    event.preventDefault();
}

//logout
button[1].addEventListener('click',logoutFunction);

function logoutFunction(event){
    console.log('hello');
    sessionStorage.clear();
    event.preventDefault();
}

//message
function displayMessage(type,message){
    const div = document.createElement('div')
    div.className = `alert alert-${type}`;
    div.role = "alert";
    div.innerHTML = message;
    form.appendChild(div);
    console.log(div);
    setTimeout(function(){
        div.remove();
    },2000);
}
*/