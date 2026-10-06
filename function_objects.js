//named function
//without input and without return
let student = {
    name: "Mahi",
    age: 22,
    course: "Python",
    data:function details(){
        console.log(student.name)
        console.log(student.age)
        console.log(student.course)
}
}
student.data()
// student["data"]()
//with input and without return
// with input and without return

let student1 = {
    name: "kavya",
    age: 22,
    course: "java",
    data1: function details(student1) {
        console.log(student1.name)
        console.log(student1.age)
        console.log(student1.course)
    }
}
student1.data1(student1)
// student1["data1"](student1)
//without input and with return
let student3 = {
    name: "ratna",
    age: 20,
    course: "database",
    data3:function details(){
    console.log(student3.name)
    console.log(student3.age)
    console.log(student3.course)
    return student3
}
}
let msg=student3.data3()
// let msg=student3["data3"]()
// console.log(msg)

//with return and with input
let student4 = {
    name: "ramya",
    age: 23,
    course: "cyber security",
    data4:function details(student4){
    console.log(student4.name)
    console.log(student4.age)
    console.log(student4.course)
    return student4
}
}
let d=student4.data4(student4)
// let d=student4["data4"](student4)



//anonymous funtion
//without input without return
let hello={
    fname:"sranya",
    salary:50000,
    hello1:function(){
        console.log(hello)
    }
}
hello.hello1()
//with input without return
let car={
    color:"balck",
    model:"Audi",
    carr:function(car){
        console.log(car)
    }
}
car.carr(car)

//without input and with return
let mobile={
    ram:"16 GB",
    color:"duskey black",
    model:"samsung",
    mob:function(){
        return mobile
    }
}
console.log(mobile.mob())

//with input and with return
let fan={
    model:"tufan",
    plates:3,
    fann:function(fan){
        return fan
    }
}
console.log(fan.fann(fan))

//arrow function
// without input and without return
let fullstack={
    courses:"java,python,datscince",
    fees:80000,
    time:()=>{
        console.log(fullstack)
    }
}
fullstack.time(fullstack)
//with input and  and without return
let javascript={
    topics:"dom,bom,functios,objects,etc",
    trainer:"vineeth sir",
    js:(javascript)=>{
        console.log(javascript)
    }
}
javascript.js(javascript)
//without input andd withr return
let kukatpally={
    distict:"rangareddy",
    state:"Telangana",
    hyd:()=>{
        return kukatpally
    }
}
console.log(kukatpally.hyd())
//with input and with return
let employee={
    salary:"based on position",
    timing:"9 am to 6 pm",
    duty:(employee)=>{
        return employee
    }
}
console.log(employee.duty(employee))