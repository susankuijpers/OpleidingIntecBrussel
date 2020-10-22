var number1 = 5
var number2 = "5"

var result = number1 === number2; //false

var jack = 25

if (jack == 28) {
    console.log ('yes he is very young boy')
    }else{
        console.log ('No, he is not!')
    }


var string1 = "intec", string2 ='intec'
result = string1 != string2

result = jack > 25; //true
result = jack > 30; //false

result = jack < 30; //true
result = jack < 16; //false

result = jack >= 26; //true
result = jack >= 27; //false

let myNumber = 10

myNumber++; // both same =11
++myNumber; // both same =12 
--myNumber; // both same=11
myNumber--; // both same=10 

console.log(result);
console.log(myNumber)

//ternary operator

// variable =(condition) ? value1: value2
                           //(true) (false)
result = (jack<18) ? 'he is a kid' : 'he is a young boy';

console.log(result)

var productStock = 20;
var alert= "Out of stock",success="Still available";
var cart = (productStock < 1 ) ?  alert:success;

console.log(cart)

//tutorial

var studentScore = 50
var passed = "student passed", failed = "student failed";

var score = (studentScore <50) ? failed:passed;
console.log(score)

//tutorial

var susanCoffee = 5
var awake = "susan is awake", asleep = "susan is asleep";

var wokeness = (susanCoffee >6) ? awake:asleep;
console.log(wokeness)

//tutorial

var fail="student failed with the exam", success=" student passed the exam";
lowScore=50; studentScore=60;

var testResult = (studentScore <=lowScore) ? fail:success 
console.log(testResult)


// Logical Operator:

//tutorial

var myNewNumber = 10;
var result = (myNumber <11) && (myNumber>9) ? true : false;

console.log (result)

//true false = false
//false false = false
//true true = true

result = (myNewNumber <11) || (myNewNumber>12) ? true : false;
console.log(result);

console.log(!true)

result = (myNewNumber<11) || !(myNewNumber>12) ? true:false;
console.log(result, "logical not operator");

//Data type: object
// ????????? rewatch recording of this cuz wuuuuuut

var student = {
 name : "priya",
 jobtitel: "Web Developer",
 printIT: function(){
     console.log('hello function')
 },//always a comma after
 isStudent:true,
 age:26
}

console.log(student.name,student.jobtitel)
student.printIT();
console.log(student.isStudent)

let auto = {
    model: "BMW",
    year: 2005,
    color: "blue"
}

console.log(auto)
console.log(auto.model)
console.log(auto.color)

let me = {
    name: "Susan",
    lastname: "Kuijpers",
    age: 27,
    profession: "Graphic Designer",
    checktIt: function (){//what does this function do inside this...?
        console.log('looking for a job!')
    },
}

console.log (me.name , me.lastname, me.age)
