//변수 선언 및 초기화 

//첫번쨰 인풋에 들어가는 숫자 값 가져오기 
//html문서내에서 
//get: 얻다
//elenment html요소
//Byid : 아이디가 일치하는 
const number1 = document.getElementById("input1");

console.log(number1);
//두번쨰 input  가져오기 
const number2 = document.getElementById("input2");

console.log(number2);

//결과값 input 가져오기 
const result = document.getElementById("calcResult");



//두수를 더해서 화면에 출력하는 함수 
function plusFn() {
  //input요소.value : input 요소에 작성된 값 얻어오기 ex) 10 20 
  const value1 = number1.value;
  const value2 = number2.value;

  console.log("두 수의 합 : ", value1 + value2);
  // ->input 요소에 작성된 값 무조건!!! 문자열(string) 무조건!!!! 형태라서 
  // 더했을때 이어쓰기가 되는 문제 발생 

  //해결방법 
  //문자열 string 을 숫자 number로 변경하는 코드를 수행 
  //숫자만 작성된 문자열 "123" 을 
  //진자 숫자타입으로 바꾸는 방법 
  // 대문자임 앞에 맨앞 대문자
  //     Number("123") -->숫자 123으로 바뀜 

  console.log(Number(value1) + Number(value2));

  //두 수의 합을 
  //아이디가 "calcResult" 요소 (result변수)의 
  //내부 글자(innerText)로 대입하기 

  result.innerText = Number(value1) + Number(value2);

  
  
}


//빼기함수 
function minusFn() {
// 아랫꺼 좀더 짧게 
  const value1= Number(number1.value);
  const value2=Number(number2.value);
  result.innerText= value1-value2;

  /*
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Number(value1) - Number(value2);
*/
  }


function multiFn() {

  const value1= Number(number1.value);
  const value2=Number(number2.value);
  result.innerText= value1*value2;



  // const value1 = number1.value;
  // const value2 = number2.value;
  // result.innerText = Number(value1) * Number(value2);
}

function divFn() {
 
 
  const value1= Number(number1.value);
  const value2=Number(number2.value);
  result.innerText= value1/value2;
 
 
  // const value1 = number1.value;
  // const value2 = number2.value;
  // result.innerText = Number(value1) / Number(value2);
}


function modFn() {


  const value1= Number(number1.value);
  const value2=Number(number2.value);
  result.innerText= value1%value2;
 
  // const value1 = number1.value;
  // const value2 = number2.value;
  // result.innerText = Number(value1) % Number(value2);
}

//3개합 



const num1= document.getElementById("num1");
const num2= document.getElementById("num2");
const num3= document.getElementById("num3");
const total1 = document.getElementById("total");


function sum(){

  total1.innerText=  Number(num1.value)
                   + Number(num2.value)
                   + Number(num3.value);


//   const value4 = Number(num1.value);
//   const value5 = Number(num2.value);
//   const value6 = Number(num3.value);

// total1.innerText=value4+value5+value6; 

}
//----------------------------------------------------
//증가 /감소 연산자 (++ , -- )

//숫자가 계속 변하니까 let
//증가 , 감소할 수를 저장할 변수 선언 및 0으로 초기화 
let count =0;
//(주의) const로 선언하면 값을 증가/감소 시킬수 없다. 

//필요한 요소 얻어오기 

//문서 내에서id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2= document.getElementById("result2");

// 1 증가 함수
function increase() {
  //count변수를 1증가 
  count++; //또는 ++count;  ->카운트라는 값이 1증가 

//증가한 카운트 값을 result2의 내부 글자로 대입 
result2.innerText=count;
}


function decrease(){
//감소한 count 값을 result2내부 글자로 대입 
//
 result2.innerText=--count;
}

//전위 , 후위 연산 확인하기 
function check(){
  // 함수 밖, 안은 구분되는 공간 
  // 밖에 작성한 변수 count, 
  // 안에 작성한 변수 count
  //위에 정의한 count와 다른변수(동명이인)
  let count =100;

  //컴퓨터한테 연산은 +-*/ 뿐만 아니라 
  //코드를 하나하나 실행하는 것들이 전부 연산 
  //전위 연산(++count , --count);
  //다른연산보다 먼저수행 
  // count값이 먼저 증가/감소 한 후에 console에 출력 

  console.log(++count); //101
  console.log(++count); //102   
  console.log(++count); //103   
  console.log(--count);  //찍히기 전에 마이너스1하고 출력

  //후위연산 (count++, count--)
  //->다른 연산이 다 끝나고 마지막에 수행 
count=50;
//50을 출력한후에 51로 증가가 되어있을 것 출력은 안됨 
console.log(count++)//50
console.log(count);//51
console.log(count--);//51
console.log(count);//50

let a=10;
let b=5;
let c=++a * b--;


// a 11 
//b 5   코드는 위에서 아래로 흐름 위에서 b는 5지만 -- 붙어서 다음줄 -- 4 
//c 


console.log(a,b,c);
}



//연습문제
function printJSObject(){

  const userName= document.getElementById("userName");
  //const userName= document.getElementById("userName").value;
  // 밑에 userInfo 에서 value 값 빼도됨 이미 벨류값까지 대입하고 넘어감
  
  
  const userAge= document.getElementById("userAge");
  const userGender= document.getElementById("userGender");

  //js객체 생성  ->여기게 출력되게 할것임
  const userInfo={
  //key : value 
    "이름" : userName.value,
    //"이름" : userName,
    "나이" : userAge.value,
    "성별" : userGender.value
  };
 console.log(userInfo)
//   const name1 = userName.value;
//   const age1 = userAge.value;
//   const gender1 =userGender.value;

// console.log("이름 :"+ name1 ,"나이"+ age1 , +"성별" + gender1);

}

