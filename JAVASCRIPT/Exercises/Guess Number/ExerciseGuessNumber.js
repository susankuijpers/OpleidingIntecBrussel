//object
let userNumber = document.getElementById('inputField');
let scaleIndicator = document.getElementById('scale');
let guessButton = document.getElementById('guessButton');

let computerNumber = 10;


//function
function guessNumber(){
    let _result = userNumber.value
    if (_result == computerNumber){
        scaleIndicator.innerText = `${_result} is Correct!`
    }else if (_result > computerNumber){    
        scaleIndicator.innerText = `${_result} is too high!`
    } else if (_result < computerNumber){
        scaleIndicator.innerText = `${_result} is too low!`
    }
}
 
//print
guessButton.addEventListener('click',guessNumber);