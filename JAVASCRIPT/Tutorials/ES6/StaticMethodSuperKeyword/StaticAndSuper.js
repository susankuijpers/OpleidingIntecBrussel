//STATIC METHOD, SUPER KEYWORD, CLASS INHERITANCE

//Static Method

// class Student {

//     constructor(name) {
//         this.name = name;
//         this.users = []
//         this.count = 0
//     }

//     printName() {
//         console.log("Non-static method")
//     }

//     static showName() {
//         console.log("Static Method")
//     }

//     static s_Increase() {
//         return this.count
//     }

//     increase() {

//         return Student.s_Increase();

//     }

//     static collectUserInfo() {
//         let temp = {
//             fullname: this.name
//         }
//         return temp
//     }

// }


class Students {
    constructor(name){
        this.name = name;
        this.count=0
    }

    static addStudent(name){
        // factory pattern
        //this._name = name;
        let temp = {
            name: name
        }
        return temp
    }

    showStudent(){
        console.log(Students.addStudent(this.name))
    }
}

let student = new Students("Emmanuel")
student.showStudent();

// let st1 = new Student("Priya")
// console.log(st1.increase())


//Student.showName()
// Student.printName()


//SUPER KEYWORD //////////////////////////////////////////////////

class A {
    constructor(name,age){
        this.name = name
        this.age=age
    }

    print(){
        console.log(this.name,this.age,this.job)
    }
}



///// 

class B extends A{
    constructor(name,age,job){
        super(name,age)
        this.job=job;
    }

    show(){
        this.print()
    }
}

let test = new B('Susan',25,"Programmer")
test.show()

//CLASS INHERITANCE //////////////////////////////////////////////////

class UFO{

    constructor(name,_type,model){
        this.name=name;
        this._type=_type;
        this.model=model;
    }

    droneInfo(){
        console.log(`
        Drone NAME: ${this.name}
        Drone Type: ${this._type}
        Drone Model: ${this.model}
        Drone Color: ${this.color}
        `)
    }

}

class CivilDrone extends UFO{
    constructor(name,_type,model,color){
        super(name,_type,model)
        this.color=color
       
    }

    civilInfo(){
        this.droneInfo()
        console.log("Civil Drone")
    }

}

class MilitaryDrone extends UFO{
    constructor(name,_type,model,color){
        super(name,_type,model)
        this.color=color
       
    }

    militaryInfo(){
        this.droneInfo()
        console.log("MilitaryDrone")
    }
}

// let drone = new UFO("Tello","Civil Drone","v.1","Black");
let drone = new CivilDrone("Tello","Civil Drone","v.1","Black")
let drone1 = new MilitaryDrone("IHA","Military Drone","v.1","Grey")
drone1.militaryInfo()
drone.civilInfo()


// ANOTHER EXAMPLE //////////////////////////////////////////////////

class MainClass{
    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
        this.data=[]
    }

    makeData(){
        let temp ={
            x:this.x,
            y:this.y,
            z:this.z,
            a:this.a,
            b:this.b,
            c:this.c
        }
        this.data.push(temp)
        return this.data
    }

    addDataStorage(){
        return localStorage.setItem('inheritance',JSON.stringify(this.data))
    }

}


class SubClass extends MainClass{
    constructor(x,y,z,a,b,c){
        super(x,y,z)
        this.a=a;
        this.b=b;
        this.c=c;
    }
}

let app = new SubClass("test1","test2","test3","anothertest1","anothertest2","anothertest3")
console.log(app.makeData())
app.addDataStorage()