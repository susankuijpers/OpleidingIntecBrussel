//EXERCISES

//EXERCISE 1

//Can you find the numbers between 0-100 divided by 3 and 5, use while loop? and try to print also the sum of the numbers

let i=0;

while(i<100){
    //code
    i++;
    if (i%3 == 0 && i%5 == 0) {
        console.log(i)
    } 
}      




//EXERCISE 2

// ask user for correct password max 3 attempts for user to try
//make static password (123456)


/*var password = "123456"
var tryLimit = 3;

while(tryLimit>0){

    var askUserPassword = prompt('enter your password')
    tryLimit--;

    if{(aksUserPassword == password)
    console.log('welcome user')
    }else{console.log(`you've ${tryLimit} attelots left.`)}

console.log(tryLimit)
console.log(askUserPassword)
/*




// PRIYA exercise

let newStudentsArr = ['dhaval','Priya','kiyaan','agastya'];
 
function reduceFunctionNew(accumulator, currentValue, currentIndex){
    console.log(currentIndex);
    return `${accumulator} ${currentValue}`;
}
 
let reduce_Results = newStudentsArr.reduce(reduceFunctionNew)
console.log(reduce_Results)
*/





// SOLUTION MIKAIL

/*
var i = 0;
let arr = [];
while (i < 100){
 i++;
 if (i % 3 == 0 && i % 5 == 0){
 arr.push(i)
 console.log(arr)
 };
}
*/





// SOLUTION MIKAIL V2 .... with reducer() array method.... LOOK AT ARRAY METHODS

/*
var i = 0;
const arr = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
while (i < 100){
i++;
if (i % 3 == 0 && i % 5 == 0){
arr.push(i);
};
}

console.log(arr)
console.log(arr.reduce(reducer))
*/