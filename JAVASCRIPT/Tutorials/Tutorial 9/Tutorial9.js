// keeper

function keeper1(param){
    return Number (param);

}

function keeper2(param){
    return Number (param) +3;
}

function keeper3(param){
    return Number (param) +10;
}

function keeper4(param){
    return `this is the last process ${param++}`
}

// keeper1(1) > keeper2(keeper1(1)) > keeper3(keeper2(keeper1(1))) > keeper4(keeper3(keeper2(keeper1(1))));

//data flow

let result = keeper4(keeper3(keeper2(keeper1(1))));
console.log(result)
console.log(keeper2(keeper1(1))) // WTF


// 2 > 12 > 12
//WTF

//data flow javascript
let student = {}
function str1(param){
    return param;

}

function str2(param){
    param.firstname='Jack';
    return param;
}

function str3(param){
    param.lastname='Sparrow';
    return param;
}

function str4(param){
    //return `this is the last process ${param}`;
    //console.log (param)
    return param;
}

// str4(str3(str2(str1(student))));

//or use like this

console.log(str4(str3(str2(str1(student)))));

//or use like this = long version

/* 
var result1 = str1(student);
var result2 = str2(result1);
var result3 = str3(result2);
var printService = str4(result3);

console.log(printService) */

/*new exersize

3 function:
function 1 init object
function 2 add property (fullname,age,email)
function 3 printerService print info in this function

function3 collapse function 2  collapse function
function3> function2> function1 > result

*/

let employe = {}

function employe1(_data){
    return _data;
}

function employe2(_data){
    _data.firstname ='Susan';
    return _data;
}

function employe3(_data){
    _data.lastname ='Kuijpers';
    return _data;
}

function employe4(_data){
    _data.age =28;
    return _data;
}

function employe5(_data){
    _data.email ='susankuijpers10@hotmail.com';
    return _data;
}

function employe6(_data){
    console.log (_data);

}

let result3 = employe6(employe5(employe4(employe3(employe2(employe1(employe))))));
console.log (result3)

/*try exersize again by yourself!!!!!!!

3 function:
function 1 init object
function 2 add property (fullname,age,email)
function 3 printerService print info in this function

function3 collapse function 2  collapse function
function3> function2> function1 > result

*/

let person = {}

function person1(_info) {
    return _info;
}

function person2(_info) {
    _info.title ='front-end-developer';
    return _info;
}

function person3(_info) {
    _info.fullname ='Susan Kuijpers';
    return _info;
}

function person4(_info) {
    _info.ancieniteit = 3;
    return _info;
}

function person5(_info) {
    _info.company = 'intec brussel';
    return _info;
}

function person6(_info) {
    console.log (_info);
}

let result4 = person6(person5(person4(person3(person2(person1(person))))));
console.log (result4)



//agian !!! The short version woop woop

let itsMe = {}

function itsMe1(_me) {
    return _me;
}

function itsMe2(_me) {
    _me.title ='front-end-developer';
    _me.fullname ='Susan Kuijpers';
    _me.ancieniteit = 3;
    _me.company = 'intec brussel';
  //  console.log(_me,"test") <<< use consol.log all the time to find but or code mistake to see in which function it is..
    return _me;
}

function itsMe3(_me) {
    return _me
}

let result5 = itsMe3(itsMe2(itsMe1(itsMe)));
console.log (result5)

var resultObj1 = document.getElementById('mememe');
resultObj1.innerText = result5.company //why it not work???



// NOTES ATILLA

// keeper


function keeper1(param){
    return Number(param);
}

function keeper2(param){
    return Number(param) + 3;
}

function keeper3(param){
    return Number(param)+10;
}

function keeper4(param){
    return `This is the last process ${param++}`
}

// keeper1(1) > keeper2(keeper1(1)) > keeper3(keeper2(keeper1(1))) > keeper4(keeper3(keeper2(keeper1(1))));

// data flow

let result = keeper4(keeper3(keeper2(keeper1(1))));
console.log(result)
// 1+3+10 = 14


// data flow javascript

let student = {}
function str1(param){
    return param;
}

function str2(param){
    param.firstname='Jack';
    return param;
}

function str3(param){
    param.lastname="Sparrow";
    return param;
}

function str4(param){
    return param;
}

var result1 = str1(student);
var result2 = str2(result1)
var result3 = str3(result2)
var printService = str4(result3);

console.log(printService)


// 3 function

// function1 init object
// function2 add properties (fullname,age,email)
// function3 printerService print info in this function.

// function3 collapse function2 collapse function
// function3>function2>function1 > result