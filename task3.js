// 1.using only Inheritance:
class College {
    college_details() {
        console.log("College Name: INNOMATICS");
        console.log("Location:JNTU");
    }
}
class Student extends College {
    student_details(){
        console.log("Student Name: Gopika");
        console.log("Branch: FSD Python");
    }
}
let s = new Student();
s.college_details();
s.student_details();

// 2.using constuctor
class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    displayMobile() {
        console.log("Brand:", this.brand);
        console.log("Price:", this.price);
    }
}
class SmartMobile extends Mobile {
    displayCamera() {
        console.log("Camera: 200 MP");
    }
}
let m = new SmartMobile("Samsung", 60000);
m.displayMobile();
m.displayCamera();


// 3.Super()
class TravelBooking {
    constructor(app,code) {
        this.app = app
        this.code=code
    }
    displayRapo() {
        console.log("Captain Name:", this.app);
        console.log("price:", this.code);
    }
}
class User  extends TravelBooking {
    constructor(app,code,location) {
        super(app,code);
        this.location = location;
    }
    displayUser() {
        console.log("location : ", this.location);
    }
}
let c = new User("Ravi",9876, "Ratnadeep , hyd");
c.displayRapo();
c.displayUser();

//4.with supr.method()
class Employee {
    display() {
        console.log("Employee Name: Gopika");
        console.log("Company: TCS");
    }
}
class Developer extends Employee {
    displayDeveloper() {
        super.display();
        console.log("Role: Pyhton Full Stack Developer");
    }
}
let d = new Developer();
d.displayDeveloper();