// functions

// function syntax

function myFunctionName(){
    console.log('before return: function message')
    return 'this is my first function'
}

console.log(myFunctionName()) //invoked

function calculateIt(a,b){
    console.log(a,b)
    return a+b;
}

//calculateIt(5,"Jack");

let sumResult = calculateIt(5,6);
console.log(sumResult);

// var var1 = 5
// var var2 = 6;
// var result = 5+6;
// console.log(result);

function getUser(userObj){
    return userObj.firstname;
}

let student = {
    firstname:'Jack',
    lastname:'Sparrow'
}

let showUserName = getUser(student)

console.log("GetUserFunction says", showUserName)

// CNTRL + K + C > comment it
// CNTRL + K + U > uncomment it

// ..?

let autoDrive = {
    forward: function(){console.log('Forward')},
    backward: function(){console.log('Backward')},
    turnLeft: function(){console.log('Turn left')},
    turnRight: function(){console.log('Turn right')},
}

autoDrive.turnLeft();
autoDrive.backward();
autoDrive.turnRight();
autoDrive.forward();

// local variables

function printService(){
    let localVariable = 'this is a local variable';
    console.log(localVariable);
}

printService();


// global variables