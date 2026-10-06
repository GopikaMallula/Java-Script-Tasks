//object creation
let student1 = {
    institute_name:"innomatics",
    student_name: "Gopika",                         
    age: 21,                               
    contact: {                             
        mobile: "9876543210",              
        email: "gopika@gmail.com"          
    },
    institute_address: {                           
        house_number: "12-45",                    
        city: "jntu",                
        state: "Telangana",               
        pincode: 546732                 
    },
    courses: {                               
        c_name:" python",                     
        period: {                         
            starting:"29 june 2026", 
            ending:"29 jan 2027",              
            fees: {                       
                finalPrice: 80000
            }
        }
    }
}
let student2 = {
    institute_name:"innomatics",
    student_name: "suvarna",                         
    age: 21,                               
    contact: {                             
        mobile: "9876543552",              
        email: "suvarna@gmail.com"          
    },
    institute_address: {                           
        house_number: "12-45",                    
        city: "jntu",                
        state: "Telangana",               
        pincode: 546732                 
    },
    courses: {                               
        c_name: "java",                     
        period: {                         
            starting:"29 june 2026", 
            ending:"29 jan 2027",              
            fees: {                       
                finalPrice: 80000
            }
        }
    }
}
//retriving or accessing
console.log(student1)
console.log(student2)
console.log(student1.courses.c_name)
console.log(student2.institute_address.house_number)
console.log(student1.courses.period.fees.finalPrice)
//add  new property or student3
//before adding
student1.apparment_name="FULL STACK EXPERTS ACADAMY"
student2.apparment_name="FULL STACK EXPERTS ACADAMY"
// console.log(student1)
// console.log(student2)
//3.update
student1.student_name="Ananya"
student2.courses.period.ending="3 feb 2027"
// console.log(student1)
// console.log(student2)
//delete
delete student1.house_number
delete student2.age
console.log(student1)
console.log(student2)
