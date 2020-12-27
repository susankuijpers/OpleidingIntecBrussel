//vb.:1
let firstName = document.querySelector('#firstname')
let lastName = document.querySelector('#lastname')
 
const fullName = document.querySelector('#answer3')
const greeting = document.querySelector('#answer4')
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.data = []
    }
 
    getFirstName() {
        return this.firstName.toLowerCase()
    }
    getLastName() {
        return this.lastName.toUpperCase()
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    };
 
    getMessage() {
        return `Welcome ${this.firstName}, to our channel!`
    }
}
 
lastName.addEventListener('keyup', e => {
    if (e.key == "Enter") {
        console.log(fullName)
        fullName.innerHTML = "test"
        let student = new Student(firstName.value, lastName.value)
        fullName.innerHTML = student.getFullName();
        greeting.innerHTML = student.getMessage();
    }
})



//vb.:2
class People {
    constructor(username,password,role="guest"){
        this.username = username;
        this.password = password;
        this.role = role;
        this.data = []
    }

    show(){
        let user = {
            username:this.username,
            password:this.password,
            role:this.role
        }
        this.data.push(user)
        console.log('User hass bee added')
    
    }

    test(){
        console.log(this.role)
    }
}

let user1= new People('root','toor','moderator')
let user2= new People('root1','toor','admin')
let user3= new People('root2','toor','guest')
user1.addUser(); //user added here
user2.addUser();
user3.addUser();
console.log(user1.show()); // users data shows here)
user1.addLocalStorage();
console.log(user2.show());
user2.addLocalStorage();
console.log(user3.show());
user3.addLocalStorage();