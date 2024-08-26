
const number1= document.getElementById("input1");
console.log(number1);

const number2= document.getElementById("input2");
console.log(number2);

const result = document.getElementById("calcResult");
console.log(result);

function plusFn(){

  //  value 자리랑 number 자리 변수명 다르게 할것 
const value1=number1.value;
const value2=number2.value;

console.log(Number(value1)+Number(value2));

result.innerText= Number(value1)+ Number(value2);
}

//빼기함수 
function minusFn() {
const value3=Number(number1.value);
const value4=Number(number2.value);

console.log(value3 - value4)

result.innerText=value3-value4;
}


const num1=document.getElementById("num1");
const num2=document.getElementById("num2");
const num3=document.getElementById("num3");


function sum(){
  total.innerText= Number(num1.value)+Number(num2.value)+Number(num3.value);
}

let count=0;

const result2=document.getElementById("result2");

function increase(){
  count++;
  result2.innerText=count;
}

function decrease(){
  
  //한줄로 하면 
  result2.innerText=--count;
}

function check(){
  let count=100;
  console.log(count++); 100
  console.log(count);101
  console.log(count--);101
  console.log(count);100

}

function printJSObject(){

  const userName= document.getElementById("userName");
  const userAge=document.getElementById("userAge");
  const userGender=document.getElementById("userGender");

  const userInfo={"이름": userName.value, "나이": userAge.value, "성별" : userGender.value};
console.log(userInfo);
}