let n1=24
let n2=30
let op="**"
switch(op){
    case "+":
        console.log("addition of",n1,"and ",n2," is ",n1+n2); 
        break;
    case "-":
        console.log("subtractiontion of",n1,"and ",n2," is ",n1-n2); 
        break;
    case "*":
        console.log("Multiplicationtion of",n1,"and ",n2," is ",n1*n2); 
        break;
    case "/":
        console.log("division of",n1,"and ",n2," is ",n1/n2); 
        break;
    case "%":
        console.log("modular division of",n1,"and ",n2," is ",n1%n2); 
        break;
    case "**":
        console.log("exponential of",n1,"and ",n2," is ",n1**n2); 
        break;
    default:
        console.log("this is not valid operator");
}