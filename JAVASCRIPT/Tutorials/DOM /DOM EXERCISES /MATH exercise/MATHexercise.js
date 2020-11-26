//object

let getQuestion = document.getElementById('question');
let answerField = document.getElementById('answer');
let checkButton = document.getElementById('check');
let correctScore = document.getElementById('correct');
let incorrectScore = document.getElementById('incorrect');


//function
/*question is random math eqasion with random numbers
fill the anwer of the math question, if correct scores change 
green square = correct, red square =  incorrect
*/

//question

let operators = ['+', '-', '/', '*']  // random Operators
let operator = operators[Math.round(Math.random()*3)];  
// Chooses a random operator

let val1 = Math.round(Math.random()*50 + 1) // random numbers 
let val2 = Math.round(Math.random()*50 + 1)

console.log(operator);

var solution = parseInt(eval(getQuestion.innerHTML = val1 + operator + val2));
console.log(val1)
console.log(val2)
console.log(solution)

var score1 = 0;
var score2 = 0;

//comparisson
function check(){
    if(parseInt(answerField.value) === solution){
        score1 ++
        correctScore.innerHTML = score1
    }else{
        score2 ++
        incorrectScore.innerHTML = score2
    }
}

checkButton.addEventListener('click', check)

console.log(typeof(answerField.value))

console.log(val1,operator,val2)
console.log(solution)

//reload function (reload question or whole page, use a reset button..?)
outputQuestion.innerHTML = `${numberOne()} ${mathSign[randomSign()]} ${numberTwo()}`;