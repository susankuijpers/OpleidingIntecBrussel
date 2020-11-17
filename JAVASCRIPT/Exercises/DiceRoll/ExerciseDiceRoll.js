
// SUSAN CODE try 2

//object

//dice 1
//creeërt een random nummer van 1 tot 6
const firstRandomNum = Math.floor(Math.random()*6)+1;
//dit word IMAGE/dice1.png tot IMAGE/dice6.png
const firstDiceImage = 'IMAGES/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

//dice 2
const secondRandomNum = Math.floor(Math.random()*6)+1;
const secondDiceImage = 'IMAGES/dice' + secondRandomNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);
                        

/* SUSAN try 1 (doesnt work for some reason)

//object
let button = get.getElementById("diceRollerbutton")
let dice1 = get.getElementById("dice1")
let dice2 = get.getElementById("dice2")
var status = get.getElementById("status");

//function
function rollDice(){
    var d1 = Math.floor(Math.random()* 6 ) +1;
    var d2 = Math.floor(Math.random()* 6 ) +1;
    var diceTotal = d1 + d2 ;

    dice1.innerHTML = d1;
    dice2.innerHTML = d2;

    status.innerHTML = "you rolled "+diceTotal+".";
    if (d1 == d2) {
        status.innerHTML += " Doubles, roll again!";
    }
}

button.addEventListener('click',rollDice)
*/



/* exercise SOLUTION MIKAIL

let button = document.getElementById('diceRollerbutton');
const diceOne = document.getElementById('placeholder1');
const diceTwo = document.getElementById('placeholder2');
 
// function changeDice
 
function changeDice(){
    const firstRandomDice = Math.floor(Math.random() * 6) + 1;
    const secondRandomDice = Math.floor(Math.random() * 6) + 1;
    diceOne.innerHTML = `<img src="assets/dice${firstRandomDice}.png" style="height: 100px; width: 100px;">`;
    diceTwo.innerHTML = `<img src="assets/dice${secondRandomDice}.png" style="height: 100px; width: 100px;">`;
}
 
button.addEventListener('click',changeDice)
*/