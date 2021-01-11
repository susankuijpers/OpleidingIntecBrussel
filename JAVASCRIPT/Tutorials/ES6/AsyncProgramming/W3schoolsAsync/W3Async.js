//ASYNC PROGRAMMING

/*"I will finish later!"
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
*/

//CALCULATOR EXAMPLE

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

/* 
WAITING FOR TIME-OUT:
When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
*/

setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}

/*
WAITING FOR INTERVALS:
When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
*/

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" + 
  d.getSeconds();
}

/*
WAITING FOR FILES:
If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded.
This is the perfect time to use a callback.
This example loads a HTML file (mycar.html), and displays the HTML file in a web page, after the file is fully loaded:
*/

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);

//ASYNC SYNTAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//The keyword async before a function makes the function return a promise:
  
//bv.:

async function myFunction() {
    return "Hello";
  }

//or
//bv.:

async function myFunction() {
    return Promise.resolve("Hello");
  }

// how to use async with promise:

sync function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);}, 
    function(error) {myDisplayer(error);}
  );

//or

async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);}, 
  );

//AWAIT SYNTAX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//The keyword await before a function makes the function wait for a promise:

let value = await promise;

//The await keyword can only be used inside an async function.

//a full SYNTAX with AWAIT & ASYNC

async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      myResolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();