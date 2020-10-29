
// selectors
let user = document.getElementById('username')
let pass = document.getElementById('password')

// real user and pass
const defaultUsername = "susan";
const defaultPassword = "123456"

// callback function
function loginHandler(){
    alert('yes you called me')
    console.log(user.value)
    console.log(pass.value)
    if(user.value != defaultUsername || pass.value != defaultPassword){
        console.log("User or Pass is incorrect")
    }else{
        console.log('username and password are correct')
    }
}

//    create login jumbotron (watch recordings 29/10)

// function definition ( it refers to "owner" of the function)

let student = {
    username: "root",
    password: "password",
    getUser: function(){
        console.log(this.username,password)
        console.log()
    },
    users:{
        title:'test'
    },
    getTodo: function(){
        console.log(this.getTodo.title)
    }
}
function test(){
console.log(this,"test")
function childOfTestFunciton (){
    console.log(this)
}
childOfTestFunciton();
}


test();

student.getUser();
student.getTodo()

/* exercise:

step1 init object
step2 define function inside object
step3 use this keyword
step4 print properties values by function u defined in job

*/

let me = {
    name: "Susan",
    lastname: "Kuijpers",
    age: 27,
    job: "front-end-developer",
    getUser: function(){
        let result = `name: ${this.name}`
        console.log(result)
    }

}


me.getUser()


function test(){

}


let TestObject = {


    title:"todo title", //string

    isValidTitle:true, // boolean

    id:1, // number

    category:['book','test'], // array

    testFunction: function(){ // function
        console.log('Test from object')
        console.log(this.title)
    }

}


TestObject.testFunction();

