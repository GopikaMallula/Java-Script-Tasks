class Arithmaticoperations{
    //static method with out input and with out return
    static add(){
        let a=10
        let b=20
        console.log("addition of ",a," and ",b , " is ",a+b);
    }
    //static method with  input and with out return
    static subtraction(a,b){
        console.log("subtraction of ",a," and ",b , " is ",a-b);   
    }
    //static method without input and with  return
    static multi(){
        let a=10
        let b=20
        return a*b
    }
    //static method with input and with  return
    static mod(x,y){
        return x%y
    }
}
Arithmaticoperations.add()
Arithmaticoperations.subtraction(45,89)
console.log(Arithmaticoperations.multi());
console.log(Arithmaticoperations.mod(46,3));
