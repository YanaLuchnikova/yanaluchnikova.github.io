function multiply(a,b){
    a  =  document.getElementById('a').value;
    b  =  document.getElementById('b').value;
    let c=a*b
    document.getElementById('result_multi_1').innerHTML = c;
}


function multiple(a){
    var a, c;
    a  =  document.getElementById('d').value;
    if (a<0){
        c="Число отрицательное";
    }
    else{    
    if(a%4==0){
        c="Да";
    }
    else{
        c="Нет";
    }
    }
    document.getElementById('result_multi_2').innerHTML = c;
}


function year(a){
    var a, c;
    a  =  document.getElementById('e').value;
    if (a<0){
        c="Число отрицательное";
    }
    else{ 
    if(a%4==0){
        c="Да";
    }
    else{
        c="Нет";
    }
    }
    document.getElementById('result_multi_3').innerHTML = c;
}


function res(a,b){
    for (let i=a; i<=b; i++){
        console.log(i);
    }
}
let xx=res(1,10);


function block4(){
    let elem = document.createElement('p');
    elem.style.cssText  = "display: inline-block;margin: 5px; border: 1px dotted black; width:100px; height:100px; background:blue;";
    some_div.append(elem);
}
block4();
block4();
block4();
block4();