//EXERCISE ES6 ToDo 
// 1) you have to store todo in sessionStorage
// 2) you have to shorten the todo exercise Ecmascript style 


 let todoInput = document.querySelector('#todo');
 let addTodoBtn = document.querySelector('button.btn.btn-danger'); // old button
 let todoForm = document.querySelector('#todo-form')
 let ListofTodos = document.querySelector('.list-group')
 let ClearTodos = document.querySelector('#clear-todos')
 let Output;


 Output = todoInput.classList
 Output = todoInput.placeholder;
 Output = todoInput.getAttribute('placeholder')
 Output = todoInput.getAttribute('company');
 todoInput.setAttribute('attrName', 'AttributeValue')
 todoInput.removeAttribute('attrName')
 Output = addTodoBtn;
 let todoArray;
 addTodoBtn.className = "btn btn-primary"

 //
 function createHTML(tagname) {
     return document.createElement(tagname)
 }

 var div = createHTML('div')

 div.className = "container"
 console.log(div)
 //

 


 //add ToDo
 function addTodoToArray(todo) {

     if (todoArray === null || todoArray === undefined) {
         todoArray = []; // init array
         console.log('array initialized')
         todoArray.push(todo)
         window.sessionStorage.setItem('todo', todoInput.value) //1) you have to store todo in sessionStorage
         e.preventDefault();
     } else {
         todoArray.push(todo)
     }

     console.log(todoArray)

 }



//remove ToDo
 ListofTodos.addEventListener('click', function (e) {
     if (e.target.className === "fa fa-remove") {
         console.log('remove action')
         console.log(e.target.parentElement.parentElement)
         e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
 })


 ClearTodos.addEventListener('click', function (e) {

    console.log(ListofTodos.firstElementChild)
    while (ListofTodos.firstElementChild != null) {
        ListofTodos.removeChild(ListofTodos.firstElementChild)
     }

})

// todo HTML innerHTML creeëren

/*
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
*/

/*
<li class="list-group-item d-flex justify-content-between">
                        My todo title
                        <a href="#" class="delete-item">
                            <i class="fa fa-remove"></i>
                        </a>
                    </li>
*/

// 2) you have to shorten the todo exercise Ecmascript style