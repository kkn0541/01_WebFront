function test1(){
 let a=5;
 let b=10;

if(a>b){
console.log("a가 더 크다");

 }else if(a<b){
console.log("b가 더 크다 ");
 }else{
  console.log("a와 b가 같다.")
 }
 
}

function test2(){
  let n=7;

  if(n%2==0){
    console.log(n);
  }else{
    console.log("홀수입니다.");
  }
}

function check3(){
let x = 15;
let y = 22;
let z = 9;

//최대값을 저장해둘 변수(max)
let max=x; //x값을 일단 가장 큰 값으로 저장해둠 
//max ==15 
if(y>max){ //현재 max(x)와 y값을 비교
  //y가 더 크면 max에 y값 덮어쓰기 
  max=y;
}
if (z>max){
  max=z;
}

//최종적으로 가장 큰 값이 max에 저장되어 있음
console.log("가장큰숫자는"+max);
}

function check4(){
  const str=document.getElementById("str").value;
if(str.length==0){
  console.log("미입력");
}else if(str=="apple"){
  console.log("사과입니다.");

}
else if(str=="apple"){
  console.log("사과입니다.");
  
}
else{
  console.log("다른과일입니다.");
}
}



function check5(){
const score= Number(document.getElementById("score").value);

let grade; //학점 저장할 변수 
if(score >90){
 grade='A';
}else if(score >80){
  grade='b';
}


}

function test6(){
  const number6=document.getElementById("number6");
  const number7= document.getElementById("number7");

let result;
if(a<0 || age >100){
  result="잘못 입력하셨습니다. "
}else if(age<12){
  result="적정 연령이 아닙니다."

}else{
  result="탑승가능";
}

console.log(result);




}

const inputMonth = document.getElementById("inputMonth");
const inputTemperature =document.getElementById("inputTemperature");

function test7(){

  const month= Number(inputMonth.value);
  const inputTemperature =Number(inputTemperature.value);

  let season; //계절이 뭔지
  let temperature; // 몇도인지 저장할 변수 

  //입력된 달에 따른 계절판단 
  if(month>=3 && month<=5) {
  season="봄";
  }else if(month>=6 && month <=8){
    season="여름";
    temperature=Number(inputTemperature.value);
    if(temperature>=30){
      season=`${season} [온도 ${temperature}도 폭염]`;
    }
  }else if(month>=9 && month <=11){
      season="가을";
  }else if(month>=1 && month <=2){
        season="겨울";
        temperature=Number(inputTemperature.value);
        if(temperature<=0){
          season=`${season} [온도 ${temperature}도 한파]`;
        }

  }else{
    season ="잘못입력";
  }
 alert(season);

  }

