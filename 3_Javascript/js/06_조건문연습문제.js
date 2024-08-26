
const number1= document.getElementById("number1");
const number2= document.getElementById("number2");
const calc1=document.getElementById("calcResult1");

let result;

function check1(){

const num1=number1.value;
const num2=number2.value;
const calc=calc1.value;


if(num1>num2){
alert("숫자1일 큽니다.");
result=("숫자1이 큽니다.");
}else{
alert("숫자2가 큽니다.");
result=("숫자1이 큽니다.");
}

console.log=result;
calc1.innerText=result;
}


const number3= document.getElementById("number3");
const calc2=document.getElementById("calcResult2");




let result1;
function check2(){

  const num1=number3.value;
  const calc = calc2.value;
  
  
  if(num1%2==0){
  alert("짝수");
  result1="짝수";
  }else{
  alert("홀수")
  result1="홀수"
  }
  
calc2.innerText=result1;

  }
  

function check3(){
   
  let x = 15;
  let y = 22;
  let z = 9;
  
let max;
  if(x>y){
   if(x>z){
    max=x
   } 
  }else if(y>z){
    

  } 
}


const str1= document.getElementById("str1");

function check4(){
const str=str1.value;

if(str=="apple"){
  alert("apple입니다.");
}else if(str=="banana"){
  alert ("banana");
}else{
  alert("다른문자열");
}

}



const number5 =document.getElementById("number5");
const calcResult5=document.getElementById("calcResult5");  

function check5(){
const num5= Number(number5.value);
//const calc=calcResult5.value;
let result;


if(60>num5){
  result="f";
  alert("F");
}else if(51>=num5 && 60>=num5){
 result="D";
 alert("D");
}else if(61>=num5 && 70>=num5){
 result="C";
 alert("C");
}else if(71>=num5 && 80>=num5){
  result="B";
  alert("C");
}else{
  result="A"
  alert("A")
}

console.log(result);
// calc.innerText=result;

}

const number6= document.getElementById("number6");
const number7= document.getElementById("number7");
//const calcResult6= document.getElementById("calcResult6");

function check6(){
const age=number6.value;
const height=Number(number7.value); 
//const calc6 = calcResult6.value;

if(age>=12 && height>=140.0){
 alert("사용가능");
}else if(age<12){
  alert("적정연령이 아닙니다.");
}else if(height<140.0){
  alert("적정 키가 아닙니다.");
}else if(age<0 || age>100){
  alert("잘못 입력 하셨습니다.");
}


}

const number8= document.getElementById("number8");
const number9= document.getElementById("number9");

function check8(){
const num8=Number(number8.value);
const num9=Number(number9.value);

if(num8>=3 && num8<=5){
alert("봄");
}else if(num8>=6 && num8<=8){
alert("여름");
    
}else if(num8>=9 && num8<=12){
alert("가을");
}


}