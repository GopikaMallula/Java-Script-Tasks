class College{
    static college_name="FULL STACK"
    static branch_name="CSE"
    static section="B"
    constructor(name,rollno,admissionno,percentage,backlogs){
        this.student_name=name
        this.student_rollno=rollno
        this.student_admission=admissionno
        this.student_percentage=percentage
        this.student_backlogs=backlogs
    }
    displayacc(){
        console.log("college name : ",College.college_name);
        console.log("course branch : ",College.branch_name);
        console.log("section : ",College.section);
        console.log("Student name is : ",this.student_name);
        console.log("student roll number  is : ",this.student_rollno)
        console.log("student admission number is : ",this.student_admission)
        console.log("Student percentage is : ",this.student_percentage);
        console.log("no of backlogs  is : ",this.student_backlogs);
    }
}
console.log("--------Student 1--------------");
let student1=new College("harshini","229P1A0576",654,"76%",3)
student1.displayacc()

console.log("--------Student 2--------------");
let student2=new College("ramya","229P1A0576",654,"76%",3)
student2.displayacc()

console.log("--------Student 3--------------");
let student3=new College("ratna","229P1A0576",654,"76%",3)
student3.displayacc()

// 2.Employee
class Employee {
    static company_name = "TCS"
    static location = "Hyderabad"
    static department = "IT"
    constructor(name, id, salary, experience, role) {
        this.emp_name = name
        this.emp_id = id
        this.emp_salary = salary
        this.emp_experience = experience
        this.emp_role = role
    }
    display() {
        console.log("Company name : ", Employee.company_name)
        console.log("Location : ", Employee.location)
        console.log("Department : ", Employee.department)
        console.log("Employee name : ", this.emp_name)
        console.log("Employee ID : ", this.emp_id)
        console.log("Salary : ", this.emp_salary)
        console.log("Experience : ", this.emp_experience)
        console.log("Role : ", this.emp_role)
    }
}
console.log("------Employee 1------")
let emp1 = new Employee("Rahul", 101, 35000, "2 years", "Developer")
emp1.display()

console.log("------Employee 2------")
let emp2 = new Employee("Priya", 102, 45000, "3 years", "Tester")
emp2.display()

console.log("------Employee 3------")
let emp3 = new Employee("Kiran", 103, 55000, "4 years", "Manager")
emp3.display()

//3.ATM

class ATM {
    static bank_name = "SBI"
    static atm_location = "Hyderabad"
    static atm_type = "DEBIT"
    constructor(name, cardno, accountno, balance, cardtype) {
        this.customer_name = name
        this.cardno = cardno
        this.accountno = accountno
        this.balance = balance
        this.cardtype = cardtype
    }
    display() {
        console.log("Bank name : ", ATM.bank_name)
        console.log("ATM location : ", ATM.atm_location)
        console.log("ATM type : ", ATM.atm_type)
        console.log("Customer name : ", this.customer_name)
        console.log("Card number : ", this.cardno)
        console.log("Account number : ", this.accountno)
        console.log("Balance : ", this.balance)
        console.log("Card type : ", this.cardtype)
    }
}
console.log("--------Customer 1--------")
let user1 = new ATM("Rahul", "XXXX1234", 1001, 25000, "Debit")
user1.display()

console.log("--------Customer 2--------")
let user2 = new ATM("Priya", "XXXX5678", 1002, 45000, "Credit")
user2.display()

console.log("--------Customer 3--------")
let user3 = new ATM("Kiran", "XXXX9012", 1003, 35000, "Debit")
user3.display()

