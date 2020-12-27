//rewatch recording

//exercise try to find something in url..? 

var url = "http://www.w3schools.com/js/js_string_methods.asp"
getUrl = url.substring(7,24);
getUrl = url.slice(7,24); // or with slice
console.log(getUrl) 

//doesnt work yet....

// some othr exercise... 
function whenMouseOverIt(){
 
    var cap = document.getElementById("heading").innerText = "JAVASCRIPT"
    
    
}
 
function whenMouseOffIt(){
    document.getElementById("heading").innerText = "Javascript"
 
}

//something else ...

function whenMouseOverIt(){
 
    var cap = document.getElementById("heading").innerText 
    var res = cap.toUpperCase();
    document.getElementById("heading").innerHTML = res;
        
        
     }
    
function whenMouseOffIt(){
    var cap = document.getElementById("heading").innerText 
    var res = cap.toLowerCase();

    document.getElementById("heading").innerHTML = res;
    
    }

    // NOTES ATILLA

    /*
toString(); The toString() method returns a number as a string.
Number();
parseInt();
parseFloat()
*/

let myNumber = 10;
console.log(typeof myNumber)
let typeOfVariable = myNumber.toString();
console.log(typeOfVariable)
console.log(typeof typeOfVariable)

let sum = "5" / "5";
console.log(sum)

let salaryPerMonth = 12.948
// salaryPerMonth = salaryPerMonth.toExponential(4) // returns a string, with a number rounded and written using exponential notation.
salaryPerMonth = salaryPerMonth.toFixed(1) // returns a string, with the number written with a specified number of decimals
console.log(salaryPerMonth);


var myNumberVar = "1354" // string data type

var showinConsole = parseInt(myNumberVar);


showinConsole = Number.isFinite("5");
showinConsole = Number.isInteger(5);


function fixedTheSalary(salary) {
    return `Salary> ${Number.parseFloat(salary).toFixed(2)}`
}


let result = fixedTheSalary('2.3432')
console.log(result)


console.log(showinConsole, typeof showinConsole)
