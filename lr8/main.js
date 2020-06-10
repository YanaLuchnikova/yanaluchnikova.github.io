console.log("Part 1");
console.log("Task 1");
let aa = Array();
aa[0]=2;
aa[1]=3;
aa[2]=4;
aa[3]=5;
aa[4]=4;
aa[5]=3;
aa[6]=2;
aa[7]=1;
aa[8]=5;
aa[9]=6;
console.log(aa[0] + " " + aa[1] + " " + aa[2] + " " + aa[3] + " " + aa[4]+ " " + aa[5]+ " " + aa[6]+ " " + aa[7]+ " " + aa[8]+ " " + aa[9]);

console.log("");
console.log("Task 2");
let cc = Array();
cc[0]=2;
cc[1]=2*2;
cc[2]=2*2*2;
cc[3]=2*2*2*2;
cc[4]=2*2*2*2*2;
cc[5]=2*2*2*2*2*2;
console.log(cc[0]+" "+cc[1]+" "+cc[2]+" "+cc[3]+" "+cc[4]+" "+cc[5]);

console.log("");
console.log("Task 3");
let dd=Array();
let mass="";
for(let i=0;i<6;i++){
    dd[i]=Math.pow(2, i+1);
    mass+=dd[i]+" ";
}
console.log(mass);

console.log("");
console.log("Task 4");
let ee = Array();
ee[0] = Math.floor(Math.random() * 10);
ee[1] = ee[0]*2;
ee[2] = ee[1]+1;
ee[3] = ee[0]*ee[1];
ee[4] = ee[1]*ee[3];
console.log(ee[0] + " " + ee[1] + " " + ee[2] + " " + ee[3] + " " + ee[4]);

console.log("");
console.log("");
console.log("Part 2");
let ff = Array();
for (let i = 0; i <= 9; i++) {
     ff[i] = parseFloat((Math.random() * 50).toFixed(2));
}
let st = '';
for (let i = 0; i <= 9; i++) {
    st += ff[i] + ' ';
}
document.getElementById('result_st_1').innerHTML = st;

let sum = 0;
let n = 0;
for (let i = 0; i < ff.length; i++) {
    sum += ff[i];
    n += 1;
}
let avg = sum / n;
document.getElementById('result_st_2').innerHTML = avg;

let ll = Array();
let sum_2=0;
let str =" ";
pp=prompt("Введите количество букв в слове");
for (let i = 0; i < pp; i++) {
    ll[i] = prompt("Введите " + (i+1) + "-ю букву");
    str += ll[i] + " ";
    if(ll[i]=="a" || ll[i]=="а"){ 
        sum_2+=1;
    }
}
document.getElementById('result_multi_21').innerHTML = str;
document.getElementById('result_multi_22').innerHTML = sum_2;

let hh = Array();
let str_3 = '';
let sum_31=0;
let sum_32=0;
let result;

for (let i = 0; i < 10; i++) {
    hh[i] = Math.floor(Math.random() * 2);
    if(hh[i]==0){
        hh[i]="Ложь";
        sum_31+=1;
    }
    else{
        hh[i]="Истина";
        sum_32+=1;
    }
    str_3 += hh[i] + ' ';
}

document.getElementById('result_multi_3_1').innerHTML = str_3;
document.getElementById('result_multi_3_2').innerHTML = sum_31;
document.getElementById('result_multi_3_3').innerHTML = sum_32;

if(sum_31>sum_32){
    result="Больше ложных значений'";
}
else if(sum_31<sum_32){
    result="Больше истинных значений";
}
else{
    result="Количество истинных и ложных значений равно";
}

document.getElementById('result_multi_3_4').innerHTML = result;