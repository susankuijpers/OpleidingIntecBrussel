/*
const api = "http://localhost:3000/database" //link of info server

fetch(api)
.then(intec=>intec.text()) //fetch data from api
.then(data=>console.log(data)) //filter data
*/

/*
fetch data from users api endpoint X

parse response data as json format X
(use promise chain and .then)

filter this data by city 'mckenziehave'

annd then print data in the last method
*/

/*
const apiUrl = "http://localhost:3000/database"
const jumbotron = document.querySelector('.jumbotron')
const usersbtn = document.querySelector('.usersbtn')
const userID = document.querySelector('#userID')

//async promise chain
async function singleUser(id) {
    let response = await fetch(`${apiUrl}/${id}`)
    let data = await response.json(); //parse response data as json format
    return data
}

async function getEndpoint(endpoint) {
    let response = await fetch(`${apiUrl}/${endpoint}`)
    let data = await response.json(); //parse response data as json format
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
 <strong>Adress:</strong> ${response.adress.city}<br/>
 </p>
 </div>
 </div>`
    })
})​​

*/

//ATILLA SOLUTION

const api = "http://localhost:3000/database" //link of info server
const city = "Gwenborough"

fetch(api)
//converted data into json
.then(intec=>intec.json()) //fetch data from api
.then(data=>data.filter((e)=>{  //filter data
    // extracted the specific data by cityname
    return e.adress.city == 'McKenziehaven'
}))

.then(data=>data.filter((e)=>{  //filter data
    // extracted the specific data by cityname
    return e.adress.city == 'Gwenborough'
}))

.then(lastupdated=>{
    // here we have last filtered data ready to print
    console.log(lastupdated)
})