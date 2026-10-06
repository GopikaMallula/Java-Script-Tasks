// 1.Find the average of numbers from 1 to N.
//     Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.
let n=5
sum0=0
for(let i=1;i<=n;i++){
    sum0=sum0+i
}
console.log("Average =", sum0/n)

// 2.Find the sum of squares of numbers from 1 to N.
//     Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².
let n1=5
let sum1=0
for(i=1;i<=n1;i++){
    sum1=sum1+(i*i)
}
console.log(sum1)

// 3..Find the sum of cubes of numbers from 1 to N.
    // Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.
let n2=5
let sum2=0
for(i=1;i<=n2;i++){
    sum2=sum2+(i**3)
}
console.log(sum2)

// 4.Calculate the power of a number without using the ** operator.
//     Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.
let base=2
let power=5
let sum3=1
for(let i=1;i<=power;i++){
    sum3=sum3*base
}
console.log(sum3)

// 5.Display the first N terms of the Fibonacci series.
//     Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.
let n4=7
let a=0
let b=1
for(let i=1;i<=n4;i++){
    console.log(a);
   let c=a+b
    a=b
    b=c
}

// #6.Display the first N terms of the series:
//     1, 1/2, 1/3, 1/4, ...
//     Example: If N = 4, display 1, 1/2, 1/3, 1/4.
let n5=4
for(let i=1;i<=4;i++){
    console.log("1/",i)
}

// 7.Display the first N terms of the series:
//     1, 11, 111, 1111, 11111, ...
//     Example: If N = 5, display 1, 11, 111, 1111, 11111.
let n6=5
let c=0
for(let i=1;i<=n6;i++){
   c=c*10+1
   console.log(c);
}

//8. Display the first N terms of the series:
    // 1, 3, 9, 27, 81, ...
    // Each term is obtained by multiplying the previous term by 3.
let n7=5
let b1=1
for(let i=1;i<=n7;i++){
    console.log(b1);
    b1=b1*3
    
}

//9.Print all numbers from 10 to 150 that are divisible by both 3 and 5
let n8=150
for(let i=10;i<=150;i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
}

//10 .Count how many numbers from 200 down to 50 are divisible by 7
let n9=50
count1=0
for(let i=200;i>=50;i--){
    if(i%7==0){
       count1+=1
    }
}
 console.log(count1)

//11.Print numbers from 120 down to 20 that are not divisible by 5.
let x=20
for(let i=120;i>=20;i--){
    if(i%5!=0){
        console.log(i)
    }
}

//12.
// Find the average of all even numbers in the range from 10 to 100
let y=100
summ=0
sum4=0
for(let i=10;i<=y;i++){
    if(i%2==0){
        summ=summ+1
        sum4+=i
    }
}
console.log(sum4/summ)

// 13.Find the average of all factors of a given number
let h=9
let y1=0
let d=0
for(i=1;i<=h;i++){
    if(h%i==0){
        y1=y1+1
        d+=i
        console.log(i)
    }
}
console.log("average = ",d/y1)