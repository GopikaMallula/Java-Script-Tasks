function vowel(){
    let ch=document.getElementById("v1").value;
    let result;
    if(ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"){
        result=ch+" is a vowel"
    }
    else{
        result=ch+ "  Not a vowel"
    }
    document.getElementById("v2").value=result;
}

function number(){
    let num=parseInt(document.getElementById("b1").value);
    let res;
    if(num>=1&&num<=10){
        res=num +" is in between"
    }
    else{
        res=num +" is not in between"
    }
    document.getElementById("b2").value=res;
}

function alphabet(){
    let char=document.getElementById("a1").value;
    let a;
    if(char>="A"&&char<="Z"){
        a=char+" is a uppercase"
    }
    else{
        a=char +" is not a uppercase"
    }
    document.getElementById("a2").value=a
}

function lower(){
    let low_char=document.getElementById("l1").value;
    let low;
    if(low_char>="a"&&low_char<="z"){
        low=low_char+" is a lowercase"
    }
    else{
        low=low_char +" is not a lowercase"
    }
    document.getElementById("l2").value=low
}

function low(){
    let n1=document.getElementById("c1").value;
    let aa;
    if((n1>="a"&&n1<="z")||(n1>="A"&&n1<="Z")){
        aa=n1+" is a alphabet"
    }
    else{
        aa=n1+" is not a alphabet"
    }
    document.getElementById("c2").value=aa;
}

function digit(){
    let num1=parseInt(document.getElementById("d1").value);
    let result1;
    if(num1>=0&&num1<=9){
        result1=num1+" is a digit"
    }
    else{
        result1=num1 +" is not a digit"
    }
    document.getElementById("d2").value=result1;
}

function password(){
    let name=document.getElementById("n1").value;
    let password=document.getElementById("n2").value;
    let my_var;
    if(name=="hero"&&password=="hero@123"){
        my_var=" Login successful"
    }
    else{
        my_var="Invalid Credentials"
    }
    document.getElementById("n3").value=my_var;
}