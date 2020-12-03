// N1 [] {}

//selectors

let userInputfield = document.querySelector('#username');
let passInputfield = document.querySelector('#password');
let loginButton = document.querySelector('#login');
let registerButton = document.querySelector('#register');

let correctUsername = sessionStorage.getItem('correctUser');
let correctPassword = sessionStorage.getItem('correctPass');

//function
//zoek? user name and password in sessionStorage 

//loginButton.addEventListener('click', function(e){} 

function login(event){//... this is not working yet
    console.log(userInputfield.value)
    console.log(passInputfield.value)
    if (userInputfield.value === correctUsername && passInputfield.value === correctPassword){
        window.location.replace("4dashboard.html");
    }else {alert("Username and/or password ar wrong. If your not registerd yet, please click register to continue");
    }
    event.preventDefault();
}

loginButton.addEventListener('click', login); //... this is not working yet

registerButton.addEventListener('click', function(e){ //go to register
    window.location.replace("2register.html");
}) 











/* 
ATILLA's SOLUTION:

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const loginbtn = document.querySelector('#login')

loginbtn.addEventListener('click',checkAuth);

function checkAuth(event){
    if (typeof(Storage)!== 'undifined'){
        if(sessionStorage.user == username.value && sessionStorage.pass == password.value){
            location.href = "dashboard.html";
        }else{
        }
    }
    event.preventDefault();
}

//LOGIN PAGE
var expireDate = new Date (2020,2,25);

document.cookie = `name=Atilla; expires=${expireData.toUTCSring()}`
*/