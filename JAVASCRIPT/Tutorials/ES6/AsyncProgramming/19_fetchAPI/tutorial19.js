


/*
INSTALL JSON-SERVER

on Windows : npm install json-server -g

on Linux/MacOS : sudo npm install json-server -g



BASIC USAGE OF json-server

json-server file.json



with custom port

json-server file.json -p 5000
*/





//fetch API


const apiUrl= "http://localhost:3000/database"
const single= document.querySelector('#singleUser')
const output= document.querySelector('#output')
const button = document.querySelector('button')
// let response = fetch(apiUrl);
// response.then(res=>console.log(res))
// response.then(res=>res.json()).then(data=>console.log(data))


async function getUsers(){
    let response = await fetch(apiUrl);  
    let data = await response.json() 
    console.log(data)
}


async function singleUser(id){
    let response = await fetch(`http://localhost:3000/database/${id}`)
    let data = await response.json();
    return JSON.stringify(data)
}


button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('test')
    output.value=""
    console.log(single.value)
    singleUser(single.value).then(response=>{
        output.value=response
    })
   
})

getUsers();
singleUser();

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//methods we use now:
//get 
/*The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.*/

//post
/*The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.*/

//Put
/*The PUT method replaces all current representations of the target resource with the request payload.*/

//delete
/*The DELETE method deletes the specified resource.*/ 