// a function with input and without return(Object)
function details(person){
    console.log(person.fname)
    console.log(person.age)
    console.log(person.job)
    console.log(person.salary)
    console.log(person.company)
    console.log(person.address.city)
    console.log(person.address.appartment.a_name)
    console.log(person.address.appartment.floor_no)
    console.log(person.address.appartment.cabin.c_no)
}
    let person={
    fname:"MAHI",
    age:22,
    job:"software",
    salary:50000,
    company:"sql solutions",
    address :{
        city:"hi-techcity",
        appartment:{
            a_name:"orbit",
            floor_no:28,
            cabin:{
                c_no:5
            }
        }
    }
}
details(person)
console.log(person)



//with return
function details(person1){
    console.log(person1.fname)
    console.log(person1.age)
    console.log(person1.job)
    console.log(person1.salary)
    console.log(person1.company)
    console.log(person1.address.city)
    console.log(person1.address.appartment.a_name)
    console.log(person1.address.appartment.floor_no)
    console.log(person1.address.appartment.cabin.c_no)
    return(person1)
}
let person1={
    fname:"RAVALI",
    age:25,
    job:"software",
    salary:80000,
    company:"Cyber solutions",
    address :{
        city:"cybercitymall",
        appartment:{
            a_name:"cyber towers",
            floor_no:12,
            cabin:{
                c_no:1
            }
        }
    }
}
let data=details(person1)
console.log(data)