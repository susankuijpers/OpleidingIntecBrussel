/*

Explain global and block scope function
DOM Manipulation
Keyboard Events
Mouse Events
Input Events
Event Capturing and Bubbling events
Browser storage area
localstorage
sessionstorage
arrow function
destructing
spread operator
for in and for of
es6 maps
es6 sets
OOP (object orianted programming) 
classes   
static methods   
inheritance
Async Programming
ajax and callbacks  
promise 
fetch api 
async await

*/




// DOM Manipulation Methods

//bv.: 

// window object

var windowObj = window;
windowObj = this;

var windows = {
    alert: function (string) {
        console.log(string)
    }
}


windows.alert('test')


var windowObj = window;

console.log(window.outerHeight)
console.log(window.outerWidth)

// window.addEventListener('resize', function () {
//     console.log(window.outerHeight)
//     console.log(window.outerWidth)
// })

var parent = document;
parent = document.all;
parent = document.all.length;
parent = document.all[document.all.length -1]
parent = document.body;
parent = document.head;
parent = document.location
parent = document.scripts;
parent = document.links;
parent = document.links[0].getAttribute('href')
parent = document.links[0].classList
parent = document.links[0].className

// forms

parent = document.forms;
parent = document.forms.length;
parent = document.forms[0].id
parent = document.forms[0].method

console.log(parent)


// select elements with methods

/*
getElementById
getElementByClassName
getElementByTagName
querySelector
querySelectorAll
*/

// getElementById method

var htmlElement;

htmlElement = document.getElementById('intecbrussel')


// by className

htmlElement = document.getElementsByClassName('btn')
htmlElement = document.getElementsByClassName('form-control')

// by tagName

htmlElement = document.getElementsByTagName('a')
htmlElement = document.getElementsByTagName('input')


// querySelector and querySelectorAll

htmlElement = document.querySelector('a.btn.btn-primary')
htmlElement = document.querySelector('input')
//htmlElement = document.querySelector('#intecbrussel');

// querySelectorAll

htmlElement = document.querySelectorAll('input');
htmlElement = document.querySelectorAll('a.btn.btn-primary')
htmlElement = document.querySelectorAll('#intecbrussel')
htmlElement = document.querySelectorAll('input')

// htmlElement = htmlElement[1].value

htmlElement.forEach(function(element){
    console.log(element.value)
    
})


htmlElement = document.querySelectorAll('a.btn.btn-primary');

htmlElement.forEach(function(button){ // forEach 
    console.log(button)
    button.innerHTML="CLICK"
    button.addEventListener('click',function(){ // dom event
        console.log('this is just a test!!!!')
    })
})


console.log(typeof htmlElement)

console.log(htmlElement)
© 2020 GitHub, Inc.