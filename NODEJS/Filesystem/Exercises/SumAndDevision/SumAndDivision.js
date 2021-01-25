
// const { fstat } = require('fs');
// 2 node js module for sum and division
//import and use those modules in app.js

//je moet 2 apps maken om info van document mee op te tellen of te delen door..?

//const sumModule = require('./customModule/sum')

//SUSAN SOLUTION


//sum
/*
fs.sum('./customModule/sum',()=>{
    function(){
        return 5 + 6
    }
    if(err) throw err;
    console.log('this is the sum of')
})
*/

//division
/*
fs.division('./customModule/sum',()=>{
    function(){
        return 5 / 6
    }
    if(err) throw err;
    console.log('this is the divided result of')
})


let result = sumModule(5,6);
console.log(result)
*/


//ATILLA SOLUTION

//import node js modules
const SumModule =  require('./custimModule/sum')
const DivisionModule = require('./customModule/Division')
const sum = require('./sum')


// use here
//console.log(SumModule)
SumModule(5,6)

//console.log(DivisionModule)
DivisionModule(12,3)

// use  'nodemon node' to see if it works in terminal

const {a,b,c,sum,division} = require('/customModule/manyFunctions')

 a()
 b()
 c()

 sum(10,10)
 division(20,4)