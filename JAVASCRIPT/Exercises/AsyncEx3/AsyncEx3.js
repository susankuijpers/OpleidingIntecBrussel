//use bootstrap model "live demo"
// when click button and show text from a post in model pop-up
const api = "https://jsonplaceholder.typicode.com/posts"

const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const response = document.querySelector(".response")
const modal = document.querySelector("#myModal");
let modalTitle = document.querySelector(".modal-title")
let modalBody = document.querySelector(".modal-body")


//fetching the body when you click on submit
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    temporary = input.value

    fetch(api) //fetch data from api
    .then(data=>data.json()) //converted data into json
    .then(resp=>resp.filter((e)=>{  //filter data
    return e.id == temporary 
}))
.then(result=>makeModal(result))
})



// making the modal with the body text in it
function makeModal(result) {
    modal.style.display = "block";
    modalTitle.innerHTML=result
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}




//SUSAN NOT-SOLUTION
async function getBody(id) {
    let response = await fetch(`${apiUrl}/${id}`)
    let data = await response.json();
    return data
}

usersbtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('test',userID.value)
    getBody(userID.value).then(response=>{
            return modalBody.innerHTML += `
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-id" id="exampleModalLabel">${response.id}</h5>
                  <h5 class="modal-title" id="exampleModalLabel">${response.title}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <strong class="responseBody">body:</strong> ${response.body}<br/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>`
    })
})



/*
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
*/

// ARNE SOLUTION
/*
const api = "https://jsonplaceholder.typicode.com/posts"

const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const response = document.querySelector(".response")
const modal = document.querySelector("#myModal");
const modalTitle = document.querySelector(".modal-title")

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    temp = input.value
    
    
    fetch(api)
    .then(data=>data.json())
    .then(res=>res.filter((e)=>{
    console.log(input.value)
    return e.id == temp
    }))
    .then(user=>user[0].title)
    .then(result=>makeModal(result))


})

function makeModal(result) {
    modal.style.display = "block";
    modalTitle.innerHTML=result
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



// `<div class="modal" tabindex="-1" role="dialog">
//         <div class="modal-dialog" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title">${result}</h5>
//               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">
//               <p>Modal body text goes here.</p>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-primary">Save changes</button>
//               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//       </div>`
*/