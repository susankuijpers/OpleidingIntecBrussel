

let favorite = document.getElementById('favorite');
let comment = document.getElementById('comment');
let name = document.getElementById('name');
let message = document.getElementById('message');
let save = document.getElementById('save');

//favorite

var favCount=0;

function favCounting() {
    favCount++ // increase favCount 
    return favorite.innerHTML = favCount;
}

favorite.addEventListener('click',favCounting)

//name en comment

function addComments() {
    comment.innerHTML += `${name.value} : ${message.value}`; //not work yet
}

save.addEventListener('click',addComments)