// 1.Sum of two numbers
function sum(x,y){
    let sum=x+y
    return x," + ",y," = " , sum
}
console.log(sum(10,20))
//2.Difference of two numbers
function diff(x,y){
    let differ=0
        differ=x-y
        return differ
    }
console.log(diff(20,10))
// 3.Even or odd
function evenodd(x){
    if(x%2==0){
        return x+" Even"
    }
    else{
        return x+" odd"
    }
}
console.log(evenodd(10))
//4.largest of two numbers
function largest(x,y){
    if(x>y){
        return x+" iis largest"
    }
    else{
        return y+" is largest"
    }
}
console.log(largest(10,20))
//5.Largest of three numbers
function three(x,y,z){
    if(x>y&&x>z){
        return x+" is largest"
    }
    else if(y>x&&y>z){
        return y+" is largest"
    }
    else{
        return z+" is largest"
    }
}
console.log(three(9,6,2))
//6.sum of range
function range(x,y){
    let sum=0
    for(let i=x;i<=y;i++){
        sum+=i
    }
    return sum
}
console.log(range(35,50))

//7.factorial
function fact(x){
    let factt=1
    for(let i=1;i<=x;i++){
        factt*=i
    }
    return factt
}
console.log(fact(4))

//8.powerr without **
function power(base,p){
    let result=1
    for(let i=1;i<=p;i++){
        result=result*base
    }
    return result
}
console.log(power(3,2))

//9.Count of even numbers in range
function evenn(x,y){
    let count=0
    for(let i=x;i<=y;i++){
        if(i%2==0){
            count++
        }
    }
    return count
}
console.log(evenn(50,60))

//10.Sum of even numbers in a range
function evennsum(x,y){
    let sum=0
    for(let i=x;i<=y;i++){
        if(i%2==0){
            sum+=i
        }
    }
    return sum
}
console.log(evennsum(1,10))
// 11.Reverse a number
function reverse(x){
    let rev=0
    while(x!=0){
        a=x%10
        rev=rev*10+a
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
    return rev
}
console.log(reverse(347265))
// 13.Sum of digits
function summ(x){
    let rev=0
    while(x!=0){
        a=x%10
        rev+=a
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
    return rev
}
console.log(summ(347265))
//13.Check Prime
function prime(x){
    let fact=0
    for(let i=1;i<=x;i++){
        if(x%i==0){
            fact+=1
        }
    }
    if(fact==2){
        return x+" is a prime"
    }
    else{
        return x+" is not a prime"
    }
}
console.log(prime(13))

// 14.Check Amstrong
function amstrong(x){
    let temp=x
    let count=0
    let am=0
    while(x!=0){
        a=x%10
        count++
        x=parseInt(x/10)
    }
x=temp
while(x!=0){
    a=x%10
    am=am+a**count
    x=parseInt(x/10)
}
if(temp==am){
    return temp+" is amstrong"
}
else{
    return temp+" is not an amstrong number"
}
}
console.log(amstrong(153))

//15.Sum of Prime Numbers in a Range
function primesum(x,y){
    let sum=0
    for(let i=x;i<=y;i++){
         let fact=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            fact+=1
        }
    }
    if(fact==2){
        sum=sum+i
    }
}
return sum
}
console.log(primesum(1,100))