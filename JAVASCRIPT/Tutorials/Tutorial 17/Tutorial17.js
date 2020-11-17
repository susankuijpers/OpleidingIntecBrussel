/*

LOOOOPSSS

- while
- do while
- for
- for/in
- for/of


Different Kinds of Loops
JavaScript supports different kinds of loops:
	
   for - loops through a block of code a number of times

    for/in : loops through the properties of an object
    
    for/of : loops through the values of an iterable object
    
    while : loops through a block of code while a specified condition is true
    
    do/while : also loops through a block of code while a specified condition is true
    
*/

/* while() LOOP
while : loops through a block of code while a specified condition is true
*/

//bv.:
let students = [
    {name:"Jack",age:25},
    {name:"Mikail",age:27},
    {name:"Priya",age:28},
    20,
    "Test"
]

// console.log(students.length) //gives lenght number in console


//bv.:
let i=0

while(i<100){ //condition tussen de haakjes
    //code
    i++;
    if (i%2==0){
        console.log(i)
    }  
}                    

//bv.:
var answer;
var result =0;

while(answer%2!=0){
    answer = prompt ('enter a number!');
    result += parseInt(answer);
    //result = result + parseInt(answer);
}

document.log(parseInt(result),"result")



// do while() LOOP
/* enige verschil met while is de syntax opbouw
do/while : also loops through a block of code while a specified condition is true
*/

//bv.:
do{
    //codeblock
}while(condition)

//bv.:
var i=0;

do{
    console.log(i)
    i++;

}while(i<=10);


//bv.:
var randomNumber;

do{
    randomNumber= Matg.floor(Math.random()*100)+1
    console.log(randomNumber)

}while(randomNumber>=50);


//bv.:
var number;
var sum=0

do{
    number = Number(prompt('enter a number!'))
    sum+=number;
    console.log("sum result=>",sum)
    console.log(number)
    console.log(number!=0)

}while(number!=0)

/* for() LOOP
for - loops through a block of code a number of times
*/

//bv.:

let i=0

for(i;i<=10;i++){
console.log('count',i)
}

//bv.:
//print odd numbers

for(let i=1,i<=50;i++){
    var oddNumber = i%2;
    console.log(i)
    }

//bv.:
//print even numbers

for(let i=1,i<=100;i++){
    let res = i*2;
    console.log(res)
    
    }

//bv.:
//several conditions possible with For()
let x,y;

for(let i=1, let; x=20; i<=10; x>=50;i++){
    
    //something something

    }
    
//nested for loop exercise see webdev atilla........

//bv.:

let NumbersInArray = []
console.log("before",NumbersInArray)

for (let index =0; index < 10; index++){
    NumbersInArray.push(index)
}

console.log("after", NumbersInArray)



/*for/in() LOOP
for/in : loops through the properties of an object

whats best For/Of() loop or forEach()...? they all itterate object but in different way

*/

//bv.:

let student = {
    name:"Susan",
    age: 23,
    profession:"Developer"
}

for(objectName in student){
    console.log(student [objectName]) //property of value
}

for(name in student){
    console.log(`
    attributeName:${name}
    attributeValue: ${student[name]} 
    `)
}



/* for/of() LOOP
for/of : loops through the values of an iterable object
for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
*/

//bv.:

let WebDevClass = ['Priya','Susan','Lotte','Elnura','Mikail','Adnan','Emmanuel','Kobe','Arne','Yannick','Jotye','Oguz']

for (let [index,student] of WebDevClass.entries()){
    console.log(`${student}:${index}`)
}

let companyName = "INTECBRUSSEL"

for(let letter of companyName){
    console.log(letter)
}