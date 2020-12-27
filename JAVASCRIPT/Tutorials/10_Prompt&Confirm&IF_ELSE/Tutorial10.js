
// prompt something

let askuser = prompt('are you admin?','no');
console.log(askuser);

let username = prompt('what is your username?','default');
console.log(username);

// confirm attribute

let askAge = confirm('are you under age 17?','17')
console.log(askAge); 

// if else statement (conditional statement)
let user = 'admin';
if(user === 'admin') {
   console.log('welcome to dashboard') // if you are
} else {
    console.log ('welcome tu user dashboard') //if not
}

// let username = prompt ('enter your username','default')
// alert statement

if (username == 'admin') {
    alert ('welcome admin')
} else {
    alert ('welcome user!')
} 

//more if statement..

var totalProduct = 0;

if (totalProduct <=0){
    totalProduct++;
    console.log("totalProduct =>", totalProduct) 
}

//increment button
let count=0; //=global variable for following 2functions

function increment(){
    if(count>=100){
        console.log(count)
    }else{
        count++;
        console.log(count)
    }
}

//decrement button
function decrement(){
    if(count <=0){
        console.log(count)
    }else{
        count--;
        console.log(count)
    }
}

//something with 2functions
 function gebruiker(){
     console.log('hello gebruiker')
 }

 function administratie(){
    console.log('hello administratie')
}

if('administratie'=='administratie'){
    administratie();
}else{
    gebruiker();
}


// something with bool ...??????????
function getUser(username,password){
    let user_bool = (username=='admin')? true:false;
    let pass_bool = (password=='12345')? true:false;
    console.log('username result>',user_bool)
    console.log('password result>',pass_bool)

    let user={
        isUserAdmin:user_bool,
        isPasswordValid:pass_bool
    }
    return user;
}

let result = getUser('root','12345')

if(result.isUserAdmin == false || result.isPasswordValid == false){
    console.group('Username or password incorrect')
}else{
    console.log('welcome admin! username and password are correct')
}
console.log(result)






// NOTES ATILLA

// let askuser = prompt('Are you admin?','no');
// let username = prompt('What is your username?','default');
// let askAge = confirm('are you under age 17',17);
// console.log(askAge)
// console.log(askuser);
// console.log(username);


// if statement
let user = 'admin';
if( user == 'user' ){
    console.log('welcome to admin dashboard')
}else{
    console.log('welcome to user dashboard')
}

//let username = prompt('enter your username','default');

// if(username == 'admin'){
//     alert('welcome admin!')
// }else{
//     alert('welcome user!')
// }

var totalProduct= 0;

if(totalProduct <=0){
    totalProduct++;
    console.log("TotalProduct=> ",totalProduct)
}

let jack = 10;
let michail = 80;
if(michail>jack){
    console.log(michail>jack)
    console.log("Michail's age is greater than Jack")
}else{
    console.log(michail>jack)
    console.log("Jack's age is greater than Michail")
}
// counter
let count =0;
function increment(){
    count++
    console.log(count)
}

function decrement(){
    if(count <=0){
        console.log(count)
    }else{
        count--;
        console.log(count)
    }
}
// end of counter


function _user(){
    console.log('hello user')
}

function admin(){
    console.log('hello admin')
}

if('admin'=='admin'){
    admin();
}else{
    _user();
}