/* exercise ASYNC USER FINDER
Write Async function
use For each
in bootstrap card
to search and show users from json server
http://localhost:3000/database
*/

const apiUrl= "http://localhost:3000/database"
const singleUser= document.querySelector('#singleUser')
const output= document.querySelector('#output')
const button = document.querySelector('button')

/*
async function getUsers(){
    let response = await fetch(apiUrl);
    let data = await response.json()
    console.log(data)
}
*/

async function singleUser(id){
    let response = await fetch(`http://localhost:3000/database/${id}`)
    let data = await response.json();
    return JSON.stringify(data)
}


button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('test')
    singleUser(single.value).then(response=>{
        output.value=response})
        return database.innerHTML += `
                <div class="card">
                    <img class="card-img-top" src="img/images.png" alt="">
                    <div class="card-body">
                        <h4 class="card-title" id="title">${id.name}. ${id.username}</h4>
                        <p class="card-text">
                            <strong>Email:</strong> ${id.email}<br/>
                            <strong>Adress:</strong> ${id.adress}<br/>
                            <strong>Contact:</strong> ${id.phone}<br/>
                        </p>
                    </div>
                </div>`
        
}singleUser.data.forEach(singleUser)
)

// getUsers();
singleUser();


// add card in for each loop
// fetch data from url,  in second then method you will have an array
//array should be iterated in the same then method

/*
for (i = 0; i < something; i++) {}

.then(data=>{
data.forEach
})

data.filter().map()
*/

//extract specific data
//use array methods to extract the specific data

