// selectors

var favorite = document.getElementById('favorite');
var comments = document.getElementById('comments');

var username = document.getElementById('name'); // input text
var user_message = document.getElementById('message'); // input textarea
var saveComment = document.getElementById('save'); // button

var favCount = 0;

function favFunction() {
    favCount++ // increase favCount 
    return favorite.innerText = favCount;
}

function commentCallBack() {
    console.log('test')
    console.log(username.value)
    console.log(user_message.value)
    comments.innerHTML += `
            <i class="fa fa-user" aria-hidden="true"></i> ${username.value}: 
            <p class="card-text"> ${user_message.value}</p>
            `
}


favorite.addEventListener('click', favFunction);
saveComment.addEventListener('click', commentCallBack);


/*

var = can be updated can be also re-declare

var
let
const


*/

// var intecbrussel = 1;
// intecbrussel =  2 // update
// var intecbrussel = [1,2,3] // re-declare

// let intec = 5;
// intec = {name:"Intec"}; // update
// let intec= 10; // not possible re-declare
