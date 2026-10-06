// 🔹 break
//1. Find the first even digit from the left in 753914286.
let n=753914286
let y=0
while(n!=0){
    x=n%10
    y=y*10+x
    n=parseInt(n/10)
    if(n==0){
        break
    }
}
while(y!=0){
    a=y%10
    if(a%2==0){
        console.log(a)
        break
    }
    y=parseInt(y/10)
}
// 2.Find the first prime number between 50 and 100.
// let n1=100
// for(i=50;i<=n1;i++){
//     let fact=0
//     for(let j=1;j<=i;j++){
//         if(i%j==0){
//             fact+=1
//         }
//     }
// if(fact==2){
//     console.log(i,"the first prime")
//     break
// }
// }

// 3.Find the first number whose digit sum is 10.
let n2=10
let i=1
while(i<=100){
    let sum=0
    let x=i
    while(x>0){
        y=x%10
        sum=sum+y
        x=parseInt(x/10)
    }
      if(sum==n2){
            console.log(i);
            break
    }
    i++
}


// 4.Find the first number with exactly 3 divisors between 1 and 100.
for(let i=1;i<=100;i++){
    let fact=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            fact++
        }
    }
if(fact==3){
        console.log(i)
        break
    }
}

//5.  Stop when 3 consecutive odd numbers occur between 1 and 50.
let count=0
for(let i=1;i<=50;i++){
    if(i%2!=0){
        count++
        console.log(i)
    }
if(count==3){
   break
}
}

//6. Find the first palindrome between 10 and 500.
for(let i=10;i<=500;i++){
    let o=i
let temp=o
let y1=0
for(let j=1;j<=i;j++){
    x=o%10
    y1=y1*10+x
    o=parseInt(o/10)
    if(o==0){
        break
    }
}
if(temp==y1){
    console.log(i)
    break
}
}

//7.Find the first perfect number between 1 and 1000
for(let j=1;j<=1000;j++){
    let r=j
let sum=0
for(let i=1;i<=j-1;i++){
    if(r%i==0){
        sum=sum+i
    }
}
if(sum==r){
    console.log(j)
    break
}
}

//8.Print the first 5 even numbers.
let countt=0
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i)
        countt++
    }
    if(countt==5){
        break
    }
}

//9.Print the first 5 prime numbers.
let counttt=0
for(let i=1;i<=100;i++){
    let fact=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            fact++
        }
    }
if(fact==2){
    counttt++
    console.log(i)
}
if(counttt==5){
    break
}
}

//10. Print the first 3 numbers divisible by 7
let c=0
for(i=1;i<=100;i++){
    if(i%7==0){
        c++
        console.log(i)
    }
    if(c==3){
        break
    }
}

// 🔹 continue
// 1.Print 1–30, skipping even numbers.
for(let i=1;i<=30;i++){
    if(i%2==0){
        continue
    }
console.log(i)
}

//2.Print 1–40, skipping multiples of 4.
for(let i=1;i<=40;i++){
    if(i%4==0){
        continue
    }
console.log(i)
}

//3.Print 1–30, skipping numbers from 10–20
for(let i=1;i<=30;i++){
    if(i>=10&&i<=20){
        continue
    }
console.log(i)
}

//4.Print 1–50, skipping multiples of 3
for(let i=1;i<=50;i++){
    if(i%3==0){
        continue
    }
console.log(i)
}

//5.Extract 502304, skipping digit 0
let f=502304
let u=0
while(f!=0){
    g=f%10
     f=parseInt(f/10)
    if(g==0){
        continue
    }
console.log(g)
}

//6.Extract 5832461, printing only even digits
let d=5832461
let j=0
while(d!=0){
    h=d%10
    d=parseInt(d/10)
    if(h%2!=0){
        continue
    }
    j=j*10+h
}
console.log(j)

//7. Extract 1432578, skipping odd digits.
let k=1432578
let j1=0
while(k!=0){
    h=k%10
    k=parseInt(k/10)
    if(h%2!=0){
        continue
    }
    j1=j1*10+h
}
console.log(j1)

//8.Print 1–200, skipping multiples of 3 or 5
for(let i=1;i<=200;i++){
    if(i%3==0 || i%5==0){
        continue
    }
console.log(i)
}

//9.Print 1–500, skipping numbers with odd digit sum
for(let i=1;i<=500;i++){
    let x=i
    let sum=0
    for(let j=1;j<=x;j++){
        g=x%10
        sum=sum+g
        x=parseInt(x/10)
    }
     if(sum%2!=0){
            continue
        }
    console.log(i)
}

//10.Print 1–500, skipping numbers containing digit 0
for(let i=1;i<=500;i++){
    let x=i
    let ff=0
    for(let j=1;j<=x;j++){
        g=x%10
        x=parseInt(x/10)
     if(g==0){
        ff=1
        }
    }
    if(ff==1){
        continue
    }
    console.log(i)
}


// 🔹 break + continue
// Print 1–50, skip multiples of 3, stop at 40.
for(let i=1;i<=50;i++){
    if(i%3==0){
        continue
    }
    if(i==40){
        break
    }
console.log(i)
}
//2. Print odd numbers, skip evens, stop at the first multiple of 7
i=1
while(i<=7){
    if(i%2!=0){
        i++
        continue
    }
    if(i%7==0){
        break
    }
console.log(i)
i++
}
//3.Extract 5830421, skip odd digits, stop at 0.
let v=5830421
while(v!=0){
    l=v%10
    v=parseInt(v/10)
    if(l%2!=0){
        continue
    }
    if(l==0){
        break
    }
    console.log(l)
}
// 4.Extract 8325147, print digits until 5.
let e=8325147
while(e!=0){
    y=e%10
    e=parseInt(e/10)
    if(y==5){
        break
    }
console.log(y)
}
// 5.Search from 51, skip non-multiples of 9, stop at the first multiple of 9.
let z=51
while(z<=100){
    if(z%9!=0){
        z++
        continue
    }
console.log(z)
break
}


//unreachable code
function displayname(){
    return "hero";
    console.log("hello"); //unreachable code
}
console.log(displayname());