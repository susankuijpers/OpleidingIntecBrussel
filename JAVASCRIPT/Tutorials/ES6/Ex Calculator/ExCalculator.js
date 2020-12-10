//calculator project with what we learned

var x = document.getElementById('number1');
var y = document.getElementById('number2');
var result = document.getElementById('result');

const math = (x,y) => {
        console.log(Number(number1.value)+ Number(number2.value))
        return result.innerText=`RESULT=> ${Number(number1.value)+ Number(number2.value)}` 
}

//make sum with 2 number values..in a prototype?
math.prototype.Sum = function(){

}














// Must Read:
//freecodecamp article 
//'javascript prototype for beginners'

/*

 https://www.freecodecamp.org/news/a-beginners-guide-to-javascripts-prototype/

 https://www.freecodecamp.org/news/javascript-prototype-explained-with-examples/

 */


 /* calculator exercise other tutorial:
 var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var result = document.getElementById('result');

function calc(){
    console.log(Number(number1.value)+Number(number2.value))
    return result.innerText=`RESULT=> ${Number(number1.value)+ Number(number2.value)}` 
 */



//DEV ED []{}

///////////////////////////
//old
//scoping = were is var available (global or local)

var counter = 5;

function sayName(){
    var name = "ed";
    console.log(name);//local
}

console.log(name);//global
sayName();

//new ES6

let counter = 10

counter = 5;

//when you want to reassign use let otherwise always use const

//block scoping = var that is only available between brackets
const list = [1,2,3,4,5];
for (let i = 0; i < list.length; i++){
    console.log(i);
}


///////////////////////////
//Concatination
//OLD
var name = 'Susan';

console.log("Hello my name is " + name);

//NEW ES6
const catname = 'Mochi';

console.log(`Hello my name is ${catname}`);



///////////////////////////
//Object literals
//OLD

/*
function getBook(title, author){
    return{
        title: title,
        author: author
    }
}

var book = getBook ('Harry Potter', 'jk');
console.log(book);
*/

//NEW ES6

function getBook(title, author){
    return{
        title,
        author
    };
}

var book = getBook ('Harry Potter', 'jk');
console.log(book);


///////////////////////////
//Object Deconstruction
//OLD

var user = {
    name: 'susan',
    age: 28
}

var myName = user.name;
console.log(myName);

//NEW ES6

const list = {
    name: 'shoppinglist',
    items: ['Milk', 'cow']
}

const { name, items} = list;
console.log(name, items);


///////////////////////////
//Arrow Functions
//OLD
function zegNaam(){
    console.log('Hello i am Ed');

}

var zegLeeftijd = function(){
    console.log('my age is 28')
}

zegNaam();
zegLeeftijd();

//NEW ES6
//vb:1
const sayLocation = () => {
    console.log('my location is Antwerp');
};

sayLocation();

//vb:2
/*
const zegLocatie = (locatie) => {
    console.log(`Mijn locatie is ${locatie}`);
};

zegLocatie('Antwerp');
*/

//vb:3 is zonder curly brackets, DEZE WERKT ENKEL VOOR 1 CODE LIJN !
const zegLocatie = locatie => console.log(`Mijn locatie is ${locatie}`);

zegLocatie('Antwerpen');

//THIS keyword
//OLD way

var gebruiker = {
    name:'ed',
    age: 28
    zegdeNaam: function(){
        console.log('My name is' + this.name);
    }
}

user.zegdeNaam();

//NEW ES6

