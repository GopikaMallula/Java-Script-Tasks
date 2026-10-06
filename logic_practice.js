// --------------------
// if-else
// --------------------
// 1.Check whether a given number is a 3-digit number or not.
let n=987
if(n>=100&&n<=999){
    console.log(n, " is a three digit number")
}
else{
    console.log(n," not a three digit number");   
}
// 2.Check whether a given number is divisible by both 3 and 5 or nots
let a=32
if(a%3==0&&a%5==0){
    console.log(a," ,it is divisible by both 3 and 5");
}
else{console.log(a," its not divisible 3 and 5");}
//3.Check whether a given triangle is a valid triangle or not.
//hint :The sum of any two sides should be greater than the third side.
let a1=60
let a2=70
let sum_of_two_angles=a1+a2
let a3=180-sum_of_two_angles
if(sum_of_two_angles>a3){
    console.log("its avalid triangle")
}
else{
    console.log("not a valid triangle");
    
}
// 4.Check whether a given number is a multiple of 10 or not.
let t=90
if(t%10==0){
    console.log(t, " is the 10 multiple");
}
else{
    console.log(t, " is not  a 10 multiple")
}
// ---------------------
// if-elif-else
// -----------------------
//1.Check the type of triangle based on its sides.
       // Equilateral, Isosceles, or Scalene.
let an1=70
let an2=70
let an3=40
if((an1==an2)&&(an2==an3)&&(an3==an1)){
    console.log("its a Equilateral Triangle");
}
else if((an1==an2)&&(an2!=an3)&&(an1!=an3)){
    console.log("its a Isosceles Triangle");
}
else{
    console.log("its a Scalene Triangle");
}
//2.Calculate the electricity bill based on units consumed.
    //0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.
let bill=301
let u1=2
let u2=3
let u3=5
let u4=7
if(bill>=0&&bill<=100){
    console.log("the bill is" , u1*bill)
}
else if(bill>=101&&bill<=200){
    console.log("the bill is ",u2*bill);
}
else if(bill>=201&&bill<=300){
    console.log("the bill is ", u3*bill);
}
else{
    console.log("the bill is ",u4*bill);
}
//3.Display the age category.
// Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
let age=34
if(age<13){
    console.log(age," , Child");
}
else if(age>=13&&age<=19){
    console.log(age," , Teenager");
}
else if(age>=20&&age<=59){
    console.log(age," ,is Adult");
    
}
else{
    console.log(age," ,is senior citizen")
}

//4..Calculate the discount based on shopping amount.
   // Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
let sh_bill=9900
if(sh_bill<1000){ 
    console.log("No Discount");   
}
else if(sh_bill>=1000&&sh_bill<=4999){
    let dis1p=10
    let dis1=sh_bill*(dis1p/100)
     let total1=sh_bill-dis1
    console.log("bill is ",sh_bill," so discount is 10% the sh_bill is ",total1)
}
else if(sh_bill>=5000&&sh_bill<=9999){
    let dis2p=20
    let dis2=sh_bill*(dis2p/100)
    let total2=sh_bill-dis2
    console.log("bill is ",sh_bill," so discount is 20% the sh_bill is ",total2)
}
else{
    let dis3p=30
    let dis3=sh_bill*(dis3p/100)
     let total3=sh_bill-dis3
    console.log("bill is ",sh_bill," so discount is 30% the sh_bill is ",total3)
}
//5.Display the season based on the month number.
    //3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
let month=1
if(month>=3&&month<=5){
    console.log("its SPRING");   
}
else if(month>=6&&month<=8){
    console.log("its SUMMER");   
}
else if(month>=9&&month<=11){
    console.log("its AUTUMN");   
}
else{
    console.log("its WINTER");
}
//6.Check whether a given year is a Leap Year or not.
    // Condition 1: year % 400 == 0
    // Condition 2: year % 4 == 0 and year % 100 != 0
let year=2004
if(year%400==0){
    console.log(year ," is leap year");
}
else if(year%4==0&&year%100!=0){
    console.log(year ," is  a leap year");
}
else{
    console.log("Not a leap year");
}


// ---------------------------
// Nested if – Tasks
// --------------------------
//1.Check whether a person is eligible to donate blood.
    //Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
let agee=20
let weight=62
if(agee>=18&&age<=60){
    console.log("age is valid")
    if(weight>50){
        console.log("weight is valid so eligible for blood donation");
    }
    else{
        console.log("Not eligible beacause of weight");
    }
}
else{
    console.log("not eligible for donate blood because  age",agee)
}

//2.Display the grade based on average only if the student has passed in all 4 subjects.
let sub1=89
let sub2=67
let sub3=87
let sub4=69
let avg=(sub1+sub2+sub3+sub4)/4
if(sub1>=35&&sub2>=35&&sub3>=35&sub4>=35){
    console.log("the student has passed in all 4 subjects.")
    if(avg>90){
        console.log("A Grade")
    }
    else if(avg>=71&&avg<=90){
        console.log("B Grade")
    }
    else if(avg>=51&&avg<=70){
        console.log("C Grade")
    }
    else if(avg>=35&&avg<=50){
        console.log("D Grade")
    }
    else{
        console.log("fail")
    }
}
else{
    console.log(" subeject fail")
}

//3.Check whether a student is eligible for a scholarship.
  //  Age should be above 18. If eligible by age, score should be above 86.
let stud_age=43
let score=90
if(age>18){
    console.log(stud_age," so eligible ")
    if(score>86){
        console.log(score," so eligible")
    }
    else{
        console.log("not eligible  because of score")
    }
}
else{
    console.log("Not eligible beacuse of age")
}