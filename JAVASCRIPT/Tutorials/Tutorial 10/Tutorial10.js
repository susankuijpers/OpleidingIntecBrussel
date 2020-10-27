
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

//increment button
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
