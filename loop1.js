function add(){
   let n1=parseInt(document.getElementById("a1").value);
   let result=0;
   for(let i=1;i<=n1;i++){
    result=result+10
   }
   document.getElementById("a2").value=result;
}

function seq(){
    let n2=parseInt(document.getElementById("b1").value);
    let sum=0;
    for(let i=1;i<=n2;i++){
        sum=sum+i
    }
    document.getElementById("b2").value=sum
}

function table(){
    let n3=parseInt(document.getElementById("c1").value);
    let table=0;
    for(let i=1;i<=10;i++){
        table= table +n3 +" x "+i+ " = " +n3*i  +"\n"
     }
     document.getElementById("c2").value=table;
}

function fact(){
    let n4=parseInt(document.getElementById("d1").value);
    let fact=1;
    for(let i=n4;i>=1;i--){
        fact=fact*i
    }
    document.getElementById("d2").value=fact;
}
function febi(){
    let n5=parseInt(document.getElementById("e1").value);
    let n6=parseInt(document.getElementById("e2").value);
    let result=" ";
    for(let i=1;i<=10;i++){
        let feb=n5+n6
        result=result+feb+"\n"
        n5=n6
        n6=feb
    }
     document.getElementById("e3").value=result
}