// nanonymous functions  without input and with out return
// 1.print hello
let a=function(){
    console.log("hello")
}
a()

//2.print numbers
let b=function(){
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
b()
//3.print Even numbers
let c=function(){
    for(let i=1;i<=10;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
c()
//4.print sum of 1 to 10
let d=function(){
    let sum=0
    for(let i=1;i<=10;i++){
        sum+=i
    }
console.log(sum)
}
d()
//5.Print multiplication table
let e=function(){
    let n=2
    for(i=1;i<=10;i++){
        console.log(n," x ",i," = ",n*i)
    }
}
e()
//a function with input and without return
// 1.print square
let f=function(x){
    console.log(x**2)
}
f(3)
//2. Check Even or Odd
let g=function(x){
    if(x%2==0){
        console.log(x," is even")
    }
    else{
        console.log(x," is odd")
    }
}
g(10)
// 3. Check Positive, Negative or Zero
let h=function(x){
    if(x>0){
        console.log(x," is positive")
    }
    else if(x<0){
        console.log(x," is negative")
    }
    else{
        console.log(x," is zero")
    }
}
h(-8)
//4. Find the Largest of Two Numbers
let k=function(x,y){
    if(x>y){
        console.log(x," is largest")
    }
    else{
        console.log(y," is largest")
    }
}
k(86,23)
// 5. Find Sum of Digits
let l=function(x){
    let sum=0
    for(i=1;i<=10;i++){
        aa=x%10
        sum+=aa
        x=parseInt(x/10)
    }
    console.log(sum)
}
l(4365)

//Annonymous function without input and with return
// 1. Return a Number
let m=function(){
    return 100
}
console.log(m())
//2. Return the Sum
let n=function(){
    let summ=0
    for(let i=1;i<=10;i++){
        summ+=i
    }
return summ
}
console.log(n())
// 3. Return the Largest Number
let p=function(){
    let n1=10;
    let n2=15;
    let n3=20;
    if(n1>n2&&n1>n3){
        return n1+" is largest"
    }
    else if(n2>n1&&n2>n3){
        return n2+" is largest"
    }
    else{
        return n3+" is largest"
    }
}
console.log(p())

//4. Return the Even Numbers
let q=function(){
    let res=""
    for(let i=1;i<=10;i++){
        if(i%2==0){
            res=res+i+""
        }
    }
    return res
}
console.log(q())

//factorial return
let r=function(){
    let n=3
    let fact=1
    for(i=1;i<=n;i++){
        fact=fact*i
    }
    return fact
}
console.log(r())

//Annonymous function with input and with return
// 1. Find the Last Digit
let s=function(x){
    while(x!=0){
        a1=x%10
        x=parseInt(x/10)
        break
    }
    return a1
}
console.log(s(5643))
//2. Find the Number of Digits
let s1=function(x){
    let count=0
    while(x!=0){
        a1=x%10
        x=parseInt(x/10)
        count++
    }
    return count
}
console.log(s1(56434))
// 3. Reverse a Number
let b1=function(x){
    let reverse=0
    while(x!=0){
        a1=x%10
        reverse=reverse*10+a1
        x=parseInt(x/10)
    }
    return reverse
}
console.log(b1(23765))
//4. Check Palindrome
let c1=function(x){
     let temp=x
    let rev=0
    while(x!=0){
         a=x%10
        rev=rev*10+a
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
if(temp==rev){
    return "palidrome"
}
else{
    return "not a palidrome"
}
}
console.log(c1(151))

//5. Find the First Digit
let v=function(x){
    let reverse=0
    while(x!=0){
        a1=x%10
        reverse=reverse*10+a1
        x=parseInt(x/10)
    }
    while(reverse!=0){
        a1=reverse%10
        reverse=parseInt(reverse/10)
        break
    }
    return a1
}
console.log(v(2456))