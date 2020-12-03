//selectors

let emailInput = document.querySelector('#exampleInputEmail1');
let passInput = document.querySelector('#exampleInputPassword1');
let submitButton = document.querySelector('.btn btn-primary');
let rememberMeBox = document.querySelector('#exampleCheck1');

//functions
//submit & save email and pass in sessionstorage
//check if sessionstorage remember my email & pass

document.getElementsByClassName(".btn btn-primary").addEventListener('click',function(e){
    console.log(emailInput.value)
    console.log(passInput.value)
    console.log(rememberMeBox.checked) //remember me box checked
    window.sessionStorage.setItem('email', emailInput.value)
    window.sessionStorage.setItem('pass', passInput.value)
    e.preventDefault();
    ​​​​​​​}​​​​​​​)

//Remember me checkbox
/*
function rememberMeBox(event){
if(emailInput.value === 'email' && passInput.value === 'pass'){ 
    return true
}​​​​​​​else{
    // if they are not in session storage = false
    return false
    }
}
*/

/*
function rememberMeBox(){
    if(emailInput.value == something && passInput.value == something}){ 
        return true
    }​​​​​​​if(){
        // if they are not in session storage = false
        return false
    }
}​​​​​​​
*/

/*
function submitData(e){
    console.log(emailInput.value)
    console.log(passInput.value)
    //sessionStorage.setItem(emailInput.value, passInput.value)
    ​​​​​​​}​​​​​​​

submitButton.addEventListener('click', submitData)
*/

/* 
let arr=[]
let user = 'atilla'
let pass = 'balin'
let isRemember:true


function addUser(obj){​​​​​​​
return arr.push(obj)
}​​​​​​​

function App(){​​​​​​​
let temp = {​​​​​​​
username:user,
password:pass
remember:isRemember
}​​​​​​​
addUser(temp)
console.log(arr)
}​​​​​​​
*/