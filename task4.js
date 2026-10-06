// 1.              Animal
            //     ___|___
            //     |     |
            //    dog  cat
class Animal{
    ani(){
        console.log("Animal eats");
    }
}
class Dog extends Animal{
    bow(){
        console.log("Dog barks");
    }
}
class Cat extends Animal{
    meow(){
        console.log("Cat meows");
    }
}
let d = new Dog();
d.ani();
d.bow();
let c = new Cat();
c.ani();
c.meow();

//2.        //     Veichle
            //     ___|___
            //     |     |
            //    car   bike
class Vehicle{
    start(){
        console.log("Vehicle starts");
    }
}
class Car extends Vehicle{
    drive(){
        console.log("Car is driving");
    }
}
class Bike extends Vehicle{
    ride(){
        console.log("Bike is riding");
    }
}
let c1 = new Car();
c1.start();
c1.drive();
let b1 = new Bike();
b1.start();
b1.ride();

// 3.       //     Hospital
            //     ___|___
            //     |     |
            //   Doctor Nurse

class Hospital{
    constructor(name){
        this.name = name;
    }
    display() {
        console.log("Hospital:", this.name);
    }
}
class Doctor extends Hospital{
    constructor(name, specialization){
        super(name);
        this.specialization = specialization;
    }
    displayDoctor() {
        console.log("Specialization:", this.specialization);
    }
}
class Nurse extends Hospital{
    constructor(name, shift){
        super(name);
        this.shift = shift;
    }
    displayNurse(){
        console.log("Shift:", this.shift);
    }
}
let d1 = new Doctor("Apollo", "Cardiology");
d1.display();
d1.displayDoctor();
let n = new Nurse("Apollo", "Morning");
n.display();
n.displayNurse();

4. //                Bank
            //     ___|___
            //     |     |
            //Savvings  current

class Bank{
    constructor(name){
        this.name = name;
    }
    display(){
        console.log("Bank:", this.name);
    }
}
class Savings extends Bank{
    constructor(name, interest){
        super(name);
        this.interest = interest;
    }
    displaySavings(){
        console.log("Interest:", this.interest);
    }
}
class Current extends Bank{
    constructor(name, limit){
        super(name);
        this.limit = limit;
    }
    displayCurrent() {
        console.log("Limit:", this.limit);
    }
}
let s = new Savings("SBI", "7%");
s.display();
s.displaySavings();
let y = new Current("HDFC", "5 Lakhs");
y.display();
y.displayCurrent();

// 5.               School
            //     ___|___
            //     |     |
            //  Teacher Principal
class School{
    constructor(name){
        this.name = name;
    }
    display(){
        console.log("School:", this.name);
    }
}
class Teacher extends School{
    constructor(name, subject){
        super(name);
        this.subject = subject;
    }
    displayTeacher(){
        console.log("Subject:", this.subject);
    }
}
class Principal extends School{
    constructor(name, experience){
        super(name);
        this.experience = experience;
    }
    displayPrincipal(){
        console.log("Experience:", this.experience);
    }
}
let t = new Teacher("Delhi Public School", "Maths");
t.display();
t.displayTeacher();
let p = new Principal("Delhi Public School", "15 Years");
p.display();
p.displayPrincipal();