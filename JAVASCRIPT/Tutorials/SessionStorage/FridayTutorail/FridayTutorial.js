//For loop
//loops always need increment index++

for (let index =0; Index < Array.length; index ++){
    const element = array [index];
}

/*

"hello world" display X 3

*/

for (let index =0; Index < 2; index ++){
    console.log('hello world', index)
}



//other loop (something is wrong)

/*let times = 10

funciton printNtimes(n){
for (let index =0; Index < n; index ++){
    console.log('hello world', index);}
}

printNtimes(20);
*/


//other loop local storage

console.log(localStorage.length)
console.log(localStorage.key(0))

for (let index =0; Index < localStorage.length; index ++){
    console.log(index);
    let keyName = localStorage.key(index);
    console.log(keyName);
    let value = localStorage.getItem(keyName);
    console.log(JSON.parse(value))
}

//other loop
let students=[]

function addStudent(student){
    return students.push(student)
}

function getStudents(){
    return students
}

function sendDataToStorage(){
    let temp = students;
    return localStorage.setItem('students',JSON.stringify(temp)) // localStorage allow string data only
}

function App(){
    addStudent('Mikail') // backend
    addStudent('Priya') // backend
    sendDataToStorage(); // backend
    console.log(getStudents()) // frontend
}

App(); // Run tasks

