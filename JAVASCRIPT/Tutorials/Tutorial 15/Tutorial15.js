// ARRAY METHODS P 2

//method find index()




//method find()



//method concat()


//method Fill() ???


//metod Includes() ???


//method reverse()

// ARRAY METHODS

// const { check } = require("yargs");

let myNumberArray = [1,2,3,4,5,67,77,88,44,33,34,56,5,4,99];
let myStringArray = ["Comedy","Horror","Action","Thriller","Sci-Fi","Fantasy"];
let students = [
    {fullname:"Jack Sparrow", age:25, profession:"Pirate"},
    {fullname:"Marisol R. Tyler", age:27, profession:"Developer"},
    {fullname:"Jack Sparrow", age:22, profession:"Police"},
    {fullname:"Thomas S. Digirolamo", age:21, profession:"Doctor"},
]

/*
method: PUSH()
    The push() method adds a new element to an array (at the end)
*/

// myNumberArray.push(1000)
myStringArray.push("Drama")
console.log(myStringArray)

let newStudent = {
    fullname:"Drema J. Hull", age:29, profession:"Developer"
}
students.push(newStudent)


/*
method: JOIN()
    The join() method also joins all array elements into a string.
*/

// console.log(myStringArray.join(" / "))

/*
method: POP()
    The pop() method removes the last element from an array:
*/


myStringArray.pop();
// students.pop();

/*
method: SHIFT()
    The shift() method removes the first array element and "shifts" all other elements to a lower index.
*/

myStringArray.shift();
myStringArray[0] = "Documentary"


/*
method: SOME()
    The some() method checks if any of the elements in an array pass a test
*/

function someFunction(value){
    return value>=100
}

let some_Result = myNumberArray.some(someFunction)
console.log(some_Result)

/*
method: EVERY()

    The every() method checks if all elements in an array pass a test
*/

// myNumberArray = [44,44,44] // true

function everyFunction(value){
    return value>=44
}

let every_result = myNumberArray.every(everyFunction)
console.log(every_result)



/*
method: REDUCE()

    The reduce() method reduces the array to a single value.
    accumulator
    currentValue
    currentIndex
    arrayItself
*/

function reduceFunction(accumulator,currentValue,currentIndex){
    console.log(currentIndex)
    return `${accumulator} ${currentValue}`
}

let reduceResult = myStringArray.reduce(reduceFunction)
console.log("Reduce Result", reduceResult)

// 1, 2, 3, 4, 5, 67, 77, 88, 44, 33, 34, 56, 5, 4, 99
// 1+2+3+4+5+67+77+88+44+33+34+56+5+4+99 // reduce


/*
method: FOREACH()

    The forEach() method calls a function once for each element in an array, in order.
    array.forEach(function(currentValue, index, arr), thisValue)
*/

let listofStudents = document.getElementById('students')

// myNumberArray.forEach(forEachFunction)
students.forEach(forEachFunction)

function forEachFunction(val,index){ // callback function
    // console.log("forEach method", index,":",val)
    // console.log(val.fullname)
    return listofStudents.innerHTML += `<li>${val.fullname}</li>`
}


/*
method: UNSHIFT()

    The unshift() method adds new items to the beginning of an array, and returns the new length.
*/

// difference between push and unshift
myNumberArray.unshift(4000)
myNumberArray.push(9000)
// difference between push and unshift



/*
method: MAP()
    The map() method creates a new array with the results of calling a function for every array element.
*/

function mapCallBackFunction(value,index,currentArr){
    console.log(`index:${index} value:${value.fullname}`)
}

//myNumberArray.map(mapCallBackFunction)

students.map(mapCallBackFunction)

/*
method: FLAT()

    convert multidimensional arrays into single dimensional array
*/

let multidimensionalArr = [1,2,3,4,[5,6,7,8,[9,10]]]
console.log(multidimensionalArr)
let dimensional = multidimensionalArr.flat(Infinity)
console.log(dimensional)


/*
method: FILTER()

    The filter() method creates an array filled with all array elements that pass a test 
*/

function findNumberByInput(value){
    return value >=30
}

function findOldPeople(obj){ 
    return obj.age >=27
}

console.log(students.filter(findOldPeople),"filter obj")


let filterResult=  myNumberArray.filter(findNumberByInput)
console.log('filter result', filterResult)


console.log(myNumberArray)
console.log(myStringArray)
console.log(students)

/*
method: SORT()

    The sort() method sorts the items of an array.
*/

myNumberArray.sort(function(a,b){return b-a});
var strings= ['f','s','e','l','q','x']
strings.sort();
console.log(strings)
console.log(myNumberArray)

////////////////////////////////////////////////////////////// P2

/*
method: FINDINDEX();

    The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
*/

function findIndexByValue_negative(value){
    return value >=10000
}

function findIndexByValue_positive(value){
    return value >=60
}

let negative_result  = myNumberArray.findIndex(findIndexByValue_negative)
let positive_result  = myNumberArray.findIndex(findIndexByValue_positive)
console.log(`Negative:${negative_result}\nPositive:${positive_result}`)

/*
method: find()
    The find() method returns the value of the first element in an array that pass a test
*/

let _students = [
    {name:"Jack",age:25},
    {name:"Mikail",age:27},
    {name:"Priya",age:28}
]

function findStudent(student){
    return student.name === "Priya"
}

let studentResult= _students.find(findStudent)

console.log(studentResult)


/*
method: concat()
    The concat() method is used to join two or more arrays.
*/

let oldArray= [1,2,3,4,5,'string']
let newArray = [true,{hello:"world"}]
let updatedArr = oldArray.concat(newArray);
updatedArr = updatedArr.concat('Hello world!',34,45)
console.log(updatedArr)

/*
method: fill();
    Fill all the array elements with a static value
*/
myNumberArray = myNumberArray.fill('none')
console.log(myNumberArray)

/*
method: includes();
    This method returns true if the array contains the element, and false if not.
*/

myNumberArray = [1,2,3,4,5,67,77,88,44,33,34,56,5,4,99];

let isNumberExist = myNumberArray.includes(77);

console.log(isNumberExist)

function checkNumber(obj,value){
    let isExist = obj.includes(value);
    if(isExist === false){
        console.log('this number is not in array')
    }else{
        console.log('this number is in this array')
    }
}
    checkNumber(myNumberArray,35);


/*
method: reverse();
    The reverse() method reverses the order of the elements in an array.
*/
myNumberArray = myNumberArray.reverse();
console.log(myNumberArray);

////////MATH METHODS......

var result;

// PI number

result = Math.PI

// round () method

result = Math.round(9.3) // 9
result = Math.round(9.6) // 10

// power method

result = Math.pow(8,2)

// square root method

result = Math.sqrt(64)

// absolute positive value or abs method

result = Math.abs(-9.5)

// Sin and Cos
/*
math:sin(90 * math:pi() / 180).
*/

result = Math.sin(90 * Math.PI / 180);
result = Math.cos(0 * Math.PI / 180);

// min and max number
// max

result = Math.max(33,44,22,55,66,554,43);

// min
result = Math.min(99,88,77,66,55,1)

let numbers = [22,33,44,55,66,77,88]

result = Math.min(...numbers);

// generate random numbers

result = Math.round(Math.random()*100)+1;

function RandomNumberGenerator(min,max){
    console.log("math",(max - min + 1)+min)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let generator = RandomNumberGenerator(15,20);
console.log(generator,"test")

Math.floor(Math.random() * 10) // between 0-9 
Math.floor(Math.random() * 11) // between 0-10
Math.floor(Math.random() * 100) // between 0-99
Math.floor(Math.random() * 101) // between 0-100
Math.floor(Math.random() * 10)+1  // between 1-10
Math.floor(Math.random() * 100)+1 // between 1-100

////////DATE OBJECTS/////////
// date object 
result = new Date();

// get full year()

result = new Date()
// result = result.getFullYear();
var fullYear = result.getFullYear();
console.log(fullYear)

// get current month()

result = result.getMonth();

// to locale string()

result = new Date();
let opt = {weekday:'short',year:'numeric',month:'long',day:'numeric',}
result = result.toLocaleString('nl-BE',opt);
result = new Date();

// seconds minutes and hours()

result = result.getSeconds();
result = new Date().getMinutes();
result = new Date().getHours();
result = new Date();
result = `${result.getHours()}:${result.getMinutes()}:${result.getSeconds()}`

let nl_days = ['Zondag','Maandag','Dinsdag','Woensdag','Vrijdag','Zaterdag'];
console.log(nl_days)
result = nl_days[new Date().getDay()];

console.log(result)