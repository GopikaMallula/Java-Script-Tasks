// 1.Return a fixed number
function fix(){
    return 100
}
let ans=fix()
console.log(ans)

//2.Return a fixed message "hello world"
function mssg(){
    return "hello world"
}
let anss=mssg()
console.log(anss)

//3.Sum of 1 to 10
function sum(){
    let sum=0
    for(let i=1;i<=10;i++){
        sum+=i
    }
    return sum
}
let summ=sum()
console.log(summ);

//4.Sum of even numbers from 1 to 20
function even(){
    let esum=0
    for(let i=1;i<=20;i++){
        if(i%2==0){
            esum+=i
        }
    }
    return esum
}
let esumm=even()
console.log(esumm)

//5.Sum of odd numbers
function odd(){
    let esum=0
    for(let i=1;i<=20;i++){
        if(i%2!=0){
            esum+=i
        }
    }
    return esum
}
let esummm=odd()
console.log(esummm)

// 6.Count numbers divisible by 5
function five(){
    let count=0
    for(let i=1;i<=100;i++){
        if(i%5==0){
            count+=1
        }
    }
    return count
}
let c=five()
console.log(c)

//7.find the largest
function largest(){
    let a=10;
    let b=20;
    let c=30
    if(a>b&&a>c){
        return a+" is largest"
    }
    else if(b>a&&b>c){
        return b+" is largest"
    }
    else{
        return c+" is largest"
    }
}
let anns=largest()
console.log(anns)

//8. Find the smallest number
function small(){
    let a = 35
    let b = 12
    let c = 50
    if(a<b&&a<c){
        return a+" is small"
    }
    else if(b<a&&b<c){
        return b+" is  small"
    }
    else{
        return c+" is small"
    }
}
let smallest=small()
console.log(smallest)

// 9.factorial of 3
function factt(){
    let n=3
    let fact=1
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    return fact+"  is the factorial of "+ n
}
let facCt=factt()
console.log(facCt)

//10.powers
function power(){
    let base=2
    let p=5
    let result=1
    for(let i=1;i<=p;i++){
        result=result*base
    }
    return result
}
console.log(power())

// 11.Reverse a number
function reverse(){
    let a=123456
    let rev=0
    while(a!=0){
        x=a%10
        rev=rev*10+x
        a=parseInt(a/10)
        if(a==0){
            break
        }
    }
    return rev
}
console.log(reverse())

//12. sum of digits
function digitsum(){
    let a=98575
    let sum=0
    while(a!=0){
        x=a%10
        sum=sum+x
        a=parseInt(a/10)
        if(a==0){
            break
        }
    }
    return sum
}
console.log(digitsum())

//13.Check Prime Number
function prime(){
    let a=17
    let count=0
    for(let i=1;i<=a;i++){
        if(a%i==0){
            count++
        }
    }
       if(count==2){
        return a+"  Prime"
    }
    else{
        return a+"  Not Prime"
    }
}
let xx=prime()
console.log(xx)

//14.Check Amstrong number
function amstrong(){
    let a=153
    let temp=a
    let count=0
    let am=0
    while(a!=0){
        x=a%10
        count++
        a=parseInt(a/10)
        if(a==0){
            break
        }
    }
    a=temp
    while(a!=0){
        x=a%10
        am=am+x**count
        a=parseInt(a/10)
          if(a==0){
            break
        }
    }
  if(temp==am){
        return temp+"Armstrong"
    }
    else{
        return temp+"Not Armstrong"
    }
}
let u=amstrong()
console.log(u)

// 15.sum of primes 1to 50
function primesum(){
    let sum=0
    for(let i=1;i<=50;i++){
        let factt=0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                factt++
            }
        }
        if(factt==2){
            sum=sum+i
        }
    }
    return sum
}
console.log(primesum())