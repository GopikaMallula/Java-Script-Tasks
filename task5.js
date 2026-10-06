// 1.
class College {
    static collegeName = "ABC College";
    displayCollege() {
        console.log("College:", College.collegeName);
    }
}
class Student1 extends College {
    studentName = "Gopika";

    displayStudent() {
        console.log("Student:", this.studentName);
    }
}
class Result1 extends Student1 {
    marks = 85;
    displayResult() {
        console.log("Marks:", this.marks);
    }
}
let r = new Result1();
r.displayCollege();
r.displayStudent();
r.displayResult();

// 2.
class Student {
    constructor(name) {
        this.name = name;
        console.log("Student:", this.name);
    }
}
class Exam extends Student {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
        console.log("Subject:", this.subject);
    }
}
class Result extends Exam {
    constructor(name, subject, marks) {
        super(name, subject);
        this.marks = marks;
        console.log("Marks:", this.marks);
    }
}
let r1 = new Result("Gopika", "JavaScript", 85);

// 3.
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    displayVehicle() {
        console.log("Brand:", this.brand);
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    displayCar() {
        console.log("Model:", this.model);
    }
}
class ElectricCar extends Car {
    constructor(brand, model, battery) {
        super(brand, model);
        this.battery = battery;
    }
   displayElectricCar() {
        console.log("Battery:", this.battery);
    }
}
let e = new ElectricCar("Tesla", "Model 3", "75 kWh");
e.displayVehicle();
e.displayCar();
e.displayElectricCar();

// 4.
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Name:", this.name);
    }
}
class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
    display() {
        super.display();
        console.log("Salary:", this.salary);
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
display() {
        super.display();
        console.log("Department:", this.department);
    }
}
let m = new Manager("Ravi", 50000, "IT");
m.display();