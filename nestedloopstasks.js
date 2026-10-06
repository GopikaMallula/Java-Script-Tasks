//Sum of Prime Numbers
// Find the sum of all prime numbers between 20 and 150.
let sum = 0
for(let i=20;i<=150;i++){
    let fact=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            fact++
        }
    }
    if(fact==2){
        sum=sum+i
    }
}
console.log(sum)
//2.Average of Perfect Numbers
// Find the average of all perfect numbers between 1 and 1000.
let summ=0
let count=0
for(let i=1;i<=1000;i++){
    let sum1=0
    for(let j=1;j<i;j++){
        if(i%j==0){
            sum1=sum1+j
        }
    }
    if(sum1==i){
        summ=summ+i
        count++
    }
}
console.log(summ/count)
//3.Leap Years in a Range (Not Nested Loop Logic)
// Print all leap years between 1900 and 2026.
for(let i=1900;i<=2026;i++){
    if(i%400==0 || (i%4==0 && i%100!=0)){
        console.log(i)
    }
}
// 4.Palindrome Numbers
// Print all palindrome numbers between 100 and 500.

for(let i=100;i<=500;i++){
    let x=i
    let rev=0
    while(x>0){
        let r=x%10
        rev=rev*10+r
        x=parseInt(x/10)
    }
    if(rev==i){
        console.log(i)
    }
}
//5.Digit Sum = 10
// Print all numbers between 120 and 850 whose digit sum is exactly 10
for(let i=120;i<=850;i++){
    let x=i
    let sum=0
    while(x>0){
        let r=x%10
        sum=sum+r
        x=parseInt(x/10)
    }
    if(sum==10){
        console.log(i)
    }
}
//6.Pairs with Target Sum
// Print all pairs (a, b) between 1 and 50 whose sum is 30. Print each pair only once.
for(let i=1;i<=50;i++){
    for(let j=i+1;j<=50;j++){
        if(i+j==30){
            console.log(i,j)
        }
    }
}
//7.exactly 3 Factors
// Print all numbers between 10 and 300 that have exactly 3 factors.
for(let i=10;i<=300;i++){
    let fact=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            fact++
        }
    }
    if(fact==3){
        console.log(i)
    }
}
//8.Prime Factors
// Print the prime factors of every number between 20 and 50.
for(let i=20;i<=50;i++){
    console.log("Prime factors of",i)
    for(let j=2;j<=i;j++){
        if(i%j==0){
            let fact=0
            for(let k=1;k<=j;k++){
                if(j%k==0){
                    fact++
                }
            }
            if(fact==2){
                console.log(j)
            }
        }
    }
}
//9.Armstrong Numbers
// Print all Armstrong numbers between 100 and 999.
for(let i=100;i<=999;i++){
    let x=i
    let sum=0
    while(x>0){
        let r=x%10
        sum=sum+r*r*r
        x=parseInt(x/10)
    }
    if(sum==i){
        console.log(i)
    }
}
// 10.Maximum Factors
// Find the number between 50 and 150 that has the maximum number of factors.
let max=0
let maxnum=0
for(let i=50;i<=150;i++){
    let fact=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            fact++
        }
    }
    if(fact>max){
        max=fact
        maxnum=i
    }
}
console.log(maxnum)
console.log(max)