function positive(){
    let n1=parseInt(document.getElementById("t1").value);
    let result1;
    if(n1>0){
        result1=n1+"is positive"
    }
    else{
        result1=n1+"is negative"
    }
    document.getElementById("t2").value=result1;
}

function smallest(){
    let n1=parseInt(document.getElementById("s1").value);
    let n2=parseInt(document.getElementById("s2").value);
    let result2;
    if(n1<n2){
        result2="n1 is smallest"
    }
    else{
        result2="n2 is smallest"
    }
    document.getElementById("s3").value=result2

}

function bill(){
    let bill=parseInt(document.getElementById("b1").value);
    let dis_percen=parseInt(document.getElementById("b2").value);
    let result;
    if(bill>5000){
        discount=bill*(dis_percen/100)
        result=bill-discount
    }
    else{
        result=bill
    }
    document.getElementById("b3").value=result
}

function five(){
    let n=parseInt(document.getElementById("f1").value);
    let res;
    if(n%5==0){
        res=n+"is divisible by 5"
    }
    else{
        res=n+"is not divisible 5"
    }
    document.getElementById("f2").value=res
}

function odd(){
    let num=parseInt(document.getElementById("e1").value);
    let result5;
    if(num%2==0){
        result5=num+" is even"
    }
    else{
        result5=num+" is odd"
    }
    document.getElementById("e2").value=result5
}