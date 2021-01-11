const apiUrl = "http://localhost:3000/database"
const jumbotron = document.querySelector('.jumbotron')
const usersbtn = document.querySelector('.usersbtn')
const userID = document.querySelector('#userID')


async function singleUser(id) {
    let response = await fetch(`${apiUrl}/${id}`)
    let data = await response.json();
    return data
}

usersbtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('test',userID.value)
    singleUser(userID.value).then(response=>{
            return jumbotron.innerHTML += `
 <div class="card">
 <img class="card-img-top" src="img/images.png" alt="">
 <div class="card-body">
 <h4 class="card-title" id="title">${response.name}. ${response.username}</h4>
 <p class="card-text">
 <strong>Email:</strong> ${response.email}<br/>
 <strong>Adress:</strong> ${response.adress}<br/>
 <strong>Contact:</strong> ${response.phone}<br/>
 </p>
 </div>
 </div>`
    })
})

// // getUsers();
// singleUser();

//YANNICK SOLUTION
/*
// FETCH API
const apiUrl= "http://localhost:3000/users";
// fetch(apiUrl).then(res => res.json()).then(makeCards);

async function getUsers(){
    let response = await fetch(apiUrl); //get data from server
    let data = await response.json(); //translate data to json
    makeCards(data);
}

function makeCards(data){
    //iterate over data, which is an array of users
    data.forEach(element => {
        //create a new node by copying the contents of the template with ID cardTemplate and store in card variable
        const card = document.querySelector('#cardTemplate').content.cloneNode(true);
        //in that new node, select the title and set its text content to the username of the element
        card.querySelector('.card-title').textContent = element.name;
        card.querySelector('#email').textContent = element.email;
        card.querySelector('#username').textContent = element.username;
        card.querySelector('#phone').textContent = element.phone;
        card.querySelector('#website').textContent = element.website;
        //append the element to container
        document.querySelector('.container').appendChild(card);
    });
}

getUsers();
*/