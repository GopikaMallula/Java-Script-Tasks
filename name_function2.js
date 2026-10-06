//1.print a name
function names(x){
    console.log("my name is: "+x)
}
names("gopika")

//2.add two numbers
function add(x,y){
    console.log("the sum of two numbers is",x+y)
}
add(13,14)

//  3. find the square of a number
function square(x){
    console.log("the square of ",x," is ",x**2)
}
square(9)
//4.check even or odd
function even_odd(x){
    if(x%2==0){
        console.log(x ," is Even")
    }
    else{
        console.log(x ," is Odd")
    }
}
even_odd(8)
//5.find largest of two
function largest(x,y){
    if(x>y){
        console.log(x," is largest")
    }
    else{
        console.log(y," is largest")
    }
}
largest(6,9)

//6.find the largest f three numbers
function three(x,y,z){
    if(x>y &&x>z){
        console.log(x," is largest")
    }
    else if(y>x && y>z){
        console.log(y," is largest")
    }
    else{
        console.log(z," is largest")
    }
}
three(5,6,7)

//7.find factorial of a numbber
function fact(x){
    let fact=1
    for(let i=1;i<=x;i++){
            fact=fact*i
    }
    console.log(fact)
}
fact(5)

//8.check prime number
function prime(x){
    let factt=0
    for(let i=1;i<=x;i++){
        if(x%i==0){
            factt+=1
        }
    }
    if(factt==2){
        console.log(x," is a prime")
    }
    else{
        console.log(x," is not a prime")
    }
}
prime(11)

//9.find sum of digits
function sum(x){
    let sum=0
    while(x!=0){
        a=x%10
        sum=sum+a
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
console.log("the sum of digits is",sum)
}
sum(123)

//10.reverse a number
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
    console.log(rev)
}
reverse(123)

//11.CHECK PALIDROME NUMBER
function palidrome(x){
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
    console.log("palidrome")
}
else{
    console.log("not a palidrome")
}
}
palidrome(151)

//12.Amstrong number
function amstrong(x){
    let temp=x
    let count=0
    let am=0
    while(x!=0){
        a=x%10
        count++
        x=parseInt(x/10)
        if(x==0){
            break
        }
    }
    x=temp
while(x!=0){
    a=x%10
    am=am+a**count
    x=parseInt(x/10)
    if(x==0){
        break
    }
}
if(temp==am){
    console.log(temp," Amstrong Number")
}
else{
    console.log(temp," Not an amstrong number")
}
}
amstrong(153)

//13.sum of prime numbers in raange
function primesum(x,y){
    let sum=0
    for(let i=x;i<=y;i++){
        let factt=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            factt+=1
        }
    }
    if(factt==2){
        sum=sum+i
    }
    }
    console.log(sum)
}
primesum(1,100)

//14.Armstrong numbers in a range
function amstrong(x, y) {
    for (let i = x; i <= y; i++) {
        let temp=i
        let count= 0
        let am=0
        while (i!= 0) {
            a = i % 10
            count++
            i = parseInt(i/10)
            if (i==0) {
                break
            }
        }
        i=temp
        while(i!=0) {
            a =i%10
            am = am + a ** count
            i = parseInt(i / 10)
            if (i == 0) {
                break
            }
        }
        if(temp == am){
            console.log(temp)
        }
        i = temp
    }
}
amstrong(1, 500)

//15.count multiples of 5
function multi(x,y){
    for(let i=x;i<=y;i++){
        if(i%5==0){
            console.log(i)
        }
    }
}
multi(100,150)