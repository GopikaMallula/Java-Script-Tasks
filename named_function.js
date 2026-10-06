//1.print a message
function hello(){
    console.log("this a named function")
}
hello()

//2.print your details
function data(){
    console.log("phone: +91 7278735639")
}
data()

//3.print numbers 1 to 10
function num(){
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
num()
//4.print even numbers
function even(){
    for(let i=1;i<=10;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
even()

//5.print odd numbers
function odd(){
    for(let i=1;i<=10;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
odd()
//6.sum of numbers
function sum(){
    let sum=0
    for(let i=1;i<=10;i++){
        sum+=i
    }
    console.log(sum)
}
sum()

//7.Multiplication table
function multi(){
    let n=6
    for(let i=1;i<=10;i++){
        console.log(n, " x ", i ," = ",n*i)
    }
}
multi()

//8.count numbers
function count(){
    let count=0
    for(let i=1;i<=10;i++){
        count+=1
    }
    console.log(count)
}
count()

//9.Sum of even numbers
function evensum(){
    let sum=0
    for(let i=1;i<=10;i++){
        if(i%2==0){
            sum+=i
        }
    }
    console.log(sum)
}
evensum()

//10.factorial
function fact(){
    let fact=1;
    let n=5
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    console.log(fact)
}
fact()

//11.prime number
function prime(){
    for(let i=1;i<=100;i++){
        let factt=0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                factt+=1
            }
        }
        if(factt==2){
            console.log(i)
        }
    }
}
prime()

//12. sum of prime numbers
function primes(){
    let sum1=0
    for(let i=1;i<=100;i++){
        let factt=0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                factt+=1
            }
        }
        if(factt==2){
            sum1+=i
        }
    }
    console.log(sum1)
}
primes()

//13. perfect number
function perfect(){
    let n=12
    let f=0
    for(let i=1;i<n;i++){
        if(n%i==0){
            f+=i
        }
    }
    if(n==f){
        console.log(n," prfect number")
    }
    else{
        console.log(n," not a perfect numbeer")
    }
}
perfect()

// 14.palidrome number
function palidrome(){
    let n1=151
    let temp=n1
    let p=0
    while(n1!=0){
        x=n1%10
        p=p*10+x
        n1=parseInt(n1/10)
        if(n1==0){
           break
        }
    }
    if(temp==p){
        console.log(temp," is a palidrome")
    }
    else{
        console.log(temp," not a palidrome number")
    }
}
palidrome()
//15 .Amstrong number
function amstrong(){
    let nn=153
    let temp=nn
    let a=0
    let aa=0
    while(nn!=0){
        x=nn%10
        a+=1
        nn=parseInt(nn/10)
        if(nn==0){
            break
        }
    }
nn=temp
while(nn>0){
    x=nn%10
    aa=aa+x**a
    nn=parseInt(nn/10)
    if(nn==0){
        break
    }
}
console.log(aa)
if(aa==temp){
    console.log(temp," Amstrong");
    
}
else{
    console.log(temp," Not a amstrong")
}
}
amstrong()