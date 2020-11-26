var CardBody = document.querySelectorAll('.card-body')
var listofTodos = document.querySelector('.list-group')
var singleTodo = document.querySelector('.list-group-item:nth-child(5)')
var nthChildsofTodos = document.querySelectorAll('.list-group-item:nth-child(even)')

console.log(nthChildsofTodos)
console.log(listofTodos)

console.log(singleTodo)


nthChildsofTodos.forEach(function(todo){
    todo.className="list-group-item d-flex justify-content-between bg-secondary"
})

// child nodes

var ConsoleResult;
ConsoleResult = listofTodos.childNodes[0];
ConsoleResult = listofTodos.children[0];
console.log("Console Result>",ConsoleResult)

let arr  = [1,2,3,4,5,6,"this is last item"]
console.log(arr[arr.length-1])

ConsoleResult.innerHTML="This is todo title - new "

ConsoleResult = CardBody[1];
ConsoleResult = ConsoleResult.children[1].textContent="Title has been updated";
ConsoleResult = CardBody[1];
ConsoleResult = ConsoleResult.firstElementChild
ConsoleResult = CardBody[1];
//ConsoleResult = ConsoleResult.childElementCount;
//ConsoleResult = ConsoleResult.children.length;
//ConsoleResult = ConsoleResult.lastElementChild


// nextElementSibling 

//ConsoleResult = singleTodo.nextElementSibling;

// previousElement
//ConsoleResult = singleTodo.previousElementSibling
ConsoleResult = singleTodo.nextElementSibling.nextElementSibling
ConsoleResult = singleTodo.previousElementSibling.previousElementSibling

console.log("Result", ConsoleResult)








// ASSIGNMENT TODO
// select todo change background color


var nextTodo = document.querySelector('.list-group-item:nth-child(1)');

nextTodo.setAttribute('CLASS', 'list-group-item d-flex justify-content-between bg-warning')

console.log(nextTodo)







// add new todo DOESNT WORK YET

console.log(listofTodos)

function addTodo(event){
    event.preventDefault();
    console.log(todoInput.value)
    var modal = `<li class="list-group-item d-flex justify-content-between">
    My todo title
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>
</li>`
listofTodos.innerHTML += modal
}
addTodobtn.addEventlistener('click','.btn btn-danger')



/* append child method TRY 1

//still have to creat connection with button

var node = document.createElement("llist-group-item d-flex justify-content-between");//creates li node
var textnode = document.createTextNode ("todo"); //text node

node.appendChild(textnode); //adds text to li

document.getElementById("list-group").appendChild(node); //adds li tu ul with id list-group */

