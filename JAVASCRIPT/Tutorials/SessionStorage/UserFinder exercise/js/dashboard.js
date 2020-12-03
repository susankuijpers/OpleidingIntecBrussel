// N4
/*
dashboard
print username from sessionstorage / toon : username achter welcome
logout > clear sessions
*/

//selectors
let user = document.querySelector('.welcomeUser'); 
let getUsername = sessionStorage.getItem('.correctUser')
let logoutButton = document.querySelector('.logout'.logout)

console.log(getUsername)
user.innerHtml =`welcome ${getUsername}`


/*
//let newsCard = docuemnt.querySelector('.');  Are these necessary do i need to do something with these ?
//let commentsCard = docuemnt.querySelector('.');  Are these necessary do i need to do something with these ?
//function
//add username inside curly bracket
user.textContent = user.textContent.replace(`${userInputfield.value}`)
*/


logoutButton.addEventListener('click', function (event){ //go back to login ...not working yet i think
    window.location.replace("1login.html");
    sessionStorage.clear(); //remove session
    document.location='login.html' //redirect page to login
})












/*
ATILLA's SOLUTION:

const greeting = document.querySelector('.welcomeUser');
const logout = document.querySelector('.logout');

logout.addEventListener('click',lougoutFunction)

function logoutFunction(event){
    sessionStorage.clear();
    location.href'login.html';
    event.preventDefault();

}

if(typeof(storage)!== "undifined"{
    if(sesionStorage.user == undifined && sessionStorage.pass == undefined){
        location.href='login.html';
    }else{
        greeting.innerText = `Welcome ${sessionStorage.user.toUpperCase()}`;
    }
})
*/