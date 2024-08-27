//정규 표현식 객체 생성 + 확인하기 
document.getElementById("btn1").addEventListener("click", () => {

  //정규표현식 객체 생성 
  const regExp1 = new RegExp("script");
  // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식 

  const regExp2 = /java/;
  //"java"와 일치하는 문자열이 있는지 검사하는 정규표현식 
  //확인하기 
  const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
  const str2 = "jsp(java server page)";
  const str3 = "java,java,java";

  console.log(regExp1.test(str1));
  //str1에 작성되어있는 문자열에 script라는 문자열이 있나없나검사 
  console.log(regExp1.exec(str1));

  console.log(regExp2.test(str2));
  //str2에 작성되어잇은 java 가 문자열에 있나없나 
  console.log(regExp2.exec(str2));

  console.log(regExp2.test(str3));
  console.log(regExp2.exec(str3)); //str중에 regexp2에 담긴값을 찾는다 찾으면index 값  몇번째에서 찾앗는지 
  console.log(regExp1.exec(str3)); //null



});


//이름 유효성 검사하기 
document.getElementById("inputName").addEventListener("keyup", (e) => {
  //결과 출력용 span 얻어오기 
  const span = document.getElementById("inputNameResult");

  //한글 2글자이상 5글자 이내인지 검사할 정규표현식 객체 만들기
  const regExp = /^[ㄱ-힣]{2,5}$/;
  //문자열의 시작과 끝이 한글이냐 , 갯수가 2개이상 5개 이하 이냐

  //빈칸인지 검사 
  if (e.target.value.length == 0) { // input에 아무것도 입력이 없다면
    span.innerText = ""; // 밑에 알림 없앰 
    return;
  }

  //유효성 검사 
  if (regExp.test(e.target.value)) {//input값이 regExp 와 일치하는가 
    //유효한 경우
    span.innerText = "유효한 이름 형식입니다.";
    span.style.color = "green";
    span.style.fontWeight = "bold";
  } else {
    span.innerText = "유효한 이름이 아닙니다."
    span.style.color = "red";
    span.style.fontWeight = "bold";
  }


});


//주민등록번호 유효성 검사 
document.getElementById("inputPno").addEventListener("keyup",(e)=>{
  //결과 출력할 span 얻어오기 
  const span=document.getElementById("inputPnoResult")

if(e.target.value.length==0){
  span.innerText="주민등록번호를 작성해주세요";
  span.classList.remove("error");
  span.classList.remove("confirm");
  return;

}

// 생년월일 (6) - 고유번호 (7)
const regExp = /^\d{6}\-\d{7}$/; //숫자6개   \- 숫자7개  

 if(regExp.test(e.target.value)){
span.innerText="유효한 주민등록번호형식";

//위에 스타일 속성에있는 값으로 색바꾸기 
span.classList.add("confirm");
span.classList.remove("error");


 }else{
span.innerText="유효하지 않습니다.";
span.classList.add("error");
span.classList.remove("confirm");
 }

});
