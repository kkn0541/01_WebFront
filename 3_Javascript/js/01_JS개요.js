//.js파일 내부를 <script></script> 내부라고 생각하면 됨 

console.log("html파일과 연결됨");


function externalFn(){
  alert("외부파일에 작성된 externalFn()함수가 호출됨");

}

//----------------------------------------------------------

//js맛보기
//버튼 클릭시 body 태그의 글자색, 배경색 변경 

//1. body 태그를 선택 
//바디라는 이름의 상자 만들고  = 바디태그를 선택해서  바디 상자에 넣는다
const body = document.querySelector("body");


//함수 정의

/*실행되면 다크모드로 바꾸는 함수(기능)*/
function darkMode(){
  body.style.color = "white"; //글자색을 흰색으로 변경 
  body.style.backgroundColor = "black";
}

function lightMode(){
  //바디 스타일 색상을 변경할껀디 검정색으로
  body.style.color = "black"; //글자색을 흰색으로 변경 
  /*실행되면 라이트모드로 바꾸는 함수(기능)*/
  body.style.backgroundColor = "white";
}




