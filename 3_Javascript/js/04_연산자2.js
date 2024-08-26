//두수가 같은지 비교 
const cv1=document.getElementById("compareValue1"); //input
const cv2=document.getElementById("compareValue2");//input
const result1=document.getElementById("result1"); //span



function compareFn1(){

const v1 = cv1.value;
const v2 = cv2.value;

//console.log(v1==v2);

//span태그 안에 넣어서 화면에 출력되게 
result1.innerText = (v1!=v2);


}


const cv3=document.getElementById("compareValue3"); //input
const cv4=document.getElementById("compareValue4");//input
const result2=document.getElementById("result2"); //span




//A > B 초과 비교 
//A < B 미만 비교  
function compareFn2(){
  const v3 =Number(cv3.value);
  const v4 =Number(cv4.value);
//문자열 형태로 비교되고 있음 number로 형변환 해야함
  console.log(v3>v4); 
  result2.innerText=v3>v4;

  console.log("apple">"banana");



}

//배수 확인
const input3_1 =document.getElementById("input3_1");
const input3_2 =document.getElementById("input3_2");
const result3 =document.getElementById("result3");


function checkFn3(){
 const v1= Number(input3_1.value);
 const v2= Number(input3_2.value);

 //A가 B의 배수 ==  A를 B로 나눴을때 나머지가 0;

 //5은 2의 배수 : false

 //result3.innerText=v1 +"은는"+v2+"의 배수 :"+(v1%v2==0);

 //백틱(`)를 이용한 문자열 작성하기 
 //문자열 전체를 백틱(`` 물결표시 아래에있는 )로 감싼후 
 //변수 , 연산결과 등이 출력되는 자리에 
 //${변수명} 또는 ${연산식}을 작성 

 result3.innerText=`${v1}은는 ${v2}의 배수 :${v1%v2==0}`;
}

//입력된 값 만큼 누적 /차감하기 



//재대입이 되어야하니까 const아니고 let 
let count4=0;
const input4= document.getElementById("input4"); //input
const result4= document.getElementById("result4"); //span

//차감
function minus4(){
  const value=Number(input4.value);
 //count4 =count4-value;
count4 -= value;
result4.innerText=count4;
}

//누적
function plus4(){
  const value=Number(input4.value);
  //count4 =count4+value;
 count4+=value;
 result4.innerText=count4;
}

//논리연산자 확인하기 
function checkFn5(){
  // and (&&)
  //104는 100 이상의 수 이면서 짝수인가?
  const bool1=(104>=100) && (104%2==0);
  console.log(`104는 100 이상의 수 이면서 짝수인가? ${bool1}`);

// 50은 70 이하이고, 4의 배수인가?
const bool2=(50<=70) && (50%4==0);
console.log(` 50은 70 이하이고, 4의 배수인가?${bool2}`);

//13은 1 부터 10 사이의 수가 맞는가?
const bool3=(1<=13) && (13<=10);
console.log(`13은 1 부터 10 사이의 수가 맞는가?${bool3}`);

//OR연산 (||)
//4는 10을 초과 하거나, 짝수인가
const bool4=(4>10) || (4%2==0);
console.log(`4는 10을 초과 하거나, 짝수인가${bool4}`);

//50은 0 이하 또는 40 이상인가?
const bool5=(50<=0)||(50>=40);
console.log(`50은 0 이하 또는 40 이상인가?${bool5}`)


//NOT (!) 

console.log(`!true=${!true}`);
console.log(`!false=${!false}`);

const bool6= false;
console.log(!(bool6 != true)); //f
}

//삼항연산자
// 조건식이 트루면 앞에꺼 실행 false면 뒷꺼실행

/*- 입력된 ID가 'member01',
입력된 PW가 'pass01!' 가 맞을 경우
alert("로그인 성공!");

- ID 또는 PW 중 하나라도 일치하지 않으면
alert("아이디 또는 비밀번호가 일치하지 않습니다");
*/



const inputId=document.getElementById("inputId");
const inputPw=document.getElementById("inputPw");


function login(){

//id,pw input에 작성된 값 얻어오기 
const id=inputId.value;
const pw=inputPw.value;

const success ="로그인 성공!";
const fail ="아이디 또는 비밀번호 불일치";

//alert에 출력할 내용을 저장할 변수 선언  (삼항연산자)
//조건식 ? true인 경우 : false인 경우 
const message
//?앞부분까지 조건식 
//조건식이 트루일 경우 success("로그인성공!"") 
// 
=(id=='member01') && (pw=='pass01')?success : fail

alert(message);
}


