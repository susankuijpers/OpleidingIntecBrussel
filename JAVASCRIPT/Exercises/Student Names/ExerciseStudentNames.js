//object


var students = [
    {
        name: "Mikail",
        score: 10
    },
    {
        name: "Priya",
        score: 8
    },

    {
        name: "Susan",
        score: 5
    },
    {
        name: "Mochi",
        score: 3
    }
]

//1st try 
/*function CheckScore(){
if { "score"<5 }else{ "score">5 }}

function getStudentName(){
students.name.sort()
document.getElementById("demo").innerHTML = students;
}

function printerService(){

}

// print
console.log()*/

//2de try

// functions
// Checking Scores above or equal to 5
const checkScores = students.filter((students) => {
    return students.score >= 5})
    console.log(checkScores)
    
    //sorting studentd alfabetically with a score higher or equal than 5
    checkScores.sort((a,b) => {
    var nameA = a.score;
    var nameB = b.score;
    if (nameA<nameB){
    return -1; 
    }
    if (nameA>nameB){
    return 1;
    }
    return 0;
    })
    console.log(checkScores)


//MIKAIL

/*
get student names who got 5 or >5 and print alphabetically sorted new list

CheckScore() // function
getStudentName // function
printerService // function
*/

/*
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort();
  document.getElementById("demo").innerHTML = fruits;
}
*/

/////////////////////////////////////////////////////////////////

/* SOLUTION ATILLA

The solution for last mission:



CheckScore(student){

return student.score >=5

}) // function


 

getStudentName(student){

return student.name

} // function


 

printerService(data){

return data

.filter(pass).sort((a,b)=>{return a.score - b.score}).map(
getStudentName)
*/
