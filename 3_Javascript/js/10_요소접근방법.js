//유사 배열이란 ? 
//배열처럼 index, lenth를 가지고 있으나 
//배열 전용 기능(메서드)를 제공하지 않음 
//pop(),push(),map(0)filter()....


function classTest() {
  // cls- test 요소 모두 얻어오기 
  const divs = document.getElementsByClassName("cls-test");

  // -> HTMLCollection (== 유사배열)
  console.log(divs);

  //divs 0,1,2 째 요소에 배경색 변경 
  divs[0].style.backgroundColor = "rgb(114,203,80)";
  divs[1].style.backgroundColor = "rgb(114,20,80)";
  divs[2].style.backgroundColor = "aqua";
}

//태그명으로 요소 접근하기 
function tagNameTest() {
  //html 문서에 존재하는 모든 li태그 요소를 얻어와
  //배열로 묶어서 반환 

  const tagList = document.getElementsByTagName("li");
  console.log(tagList);
  for (let i = 0; i < tagList.length; i++) { // 순차 접근

    //tagList[i].innerText : 작성된 내용을 얻어오기 
    //tagList[i].innerText="abc": 내용으로 "abc "대입하기 

    console.log(tagList[i].innerText);
    tagList[i].style.backgroundColor = tagList[i].innerText

  }

}

//name으로 요소 접근하기 
function nameTest() {
  //네임속성값이 "hobby"인 요소를 모두 얻어와 변수에 저장 
  const hobbyList = document.getElementsByName("hobby");
  console.log(hobbyList);

  let str = ""; // 체크된 값 누적 
  let count = 0; //체크된 수 카운트 
  for (let i = 0; i < hobbyList.length; i++) {

    //checkbox , radio 전용 속성 (.checked)
    //input요소.checked -> 요소가 체크되어 있으면 true, 아니면 false 반환 
    //input요소.checked =true -> 해당요소를 체크하겠다.
    //input요소.checked =false -> 해당요소를 체크해제하겠다. 
    if (hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;


    }
  }
  // #name-div 요소에 내용으로 결과출력 
  document.getElementById("name-div").innerHTML
    = `${str} <br><br>선택된 취미 개수: ${count} `;


}


//css선택자로 요소 접근하기 
function cssTest() {
  //[요소 1개]
  //1) document.querySelector("css선택자");
  //              ->선택자가 선택한 요소 중 첫번째 요소를 반환 


  //[요소 n개 -> 배열]
  //2)document.querySelectorAll("css선택자");
  //    ->선택한 요소 모두를 배열(유사 배열)형태로 반환 

  //target-div 속성 값이 "css-div"요소에 접근
  // 바깥이 ""이면 안쪽에는 '' 바깥이 '' 이면 안쪽은 ""
  const container = document.querySelector('[target-div="css-div"]');

  //요소의 테두리를 변경 
  container.style.border = "10px solid red";

  //첫번째 자식 div 접근해서 
  //내용을 "css선택자로 선택해서 값 변경됨 "

  //첫번째 자식만 접근하는것이 queryselector 이기떄문에first child 안써도됨
  const div1 = document.querySelector('[target-div="css-div"]>div');
  div1.innerText = "css선택자로 선택해서 값 변경됨"

  //두번째자식 div 
  const div2 = document.querySelector('[target-div="css-div"]>div:last-child');
  div2.innerText = "첫번째요소가 아니면 querySelector()특징 활용 못함"


  //모든 자식 div 한번에 선택(배열)
  const divList = document.querySelectorAll('[target-div="css-div"]>div');

  //index를 이용해서 요소 하나씩 접근해보기 
  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";

  for (let i = 0; i < divList.length; i++) {
    divList[i].onclick = function () {
      alert(`${i}번째 요소 입니다!`);

    }
  }
}

//카카오톡 채팅 화면 만들기


function readValue() {
  //채팅이 출력되는 배경 요소 얻어오기 
  const bg = document.querySelector("#chatting-bg");
  //채팅 내용 입력 input 요소 얻어오기 
  const input = document.querySelector("#user-input");

  //입력된 값이 없을 경우 
  //1) 진짜 안적음
  //2) 공백만 적은 경우 

  //문자열.trim() : 문자열 좌우 공백 제거 
  if (input.value.trim().length == 0) {
    alert("채팅 내용을 입력해주세요");

    // "               " 엔터 누르면 알럿뜨고 
    // 아래코드로 커서 맨앞으로 다시 보내기 
    input.value = "";// 이전 input에 작성된 값 삭제하기 
    input.focus(); //input에 커서 활성화 

    return;// 현재 수행중인 함수 종료 + 호출한 곳으로 돌아감 
    //안하면 밑에 채팅출력부분도 진행됨
  }

  //채팅 출력
  bg.innerHTML += `<p><span>${input.value}</span></p>`;

  bg.scrollTop = bg.scrollHeight;
  //bg.scrolltop : 현재 스크롤의 위치(스크롤이 현재 얼마만큼 내려와 있는지를 나타냄)
  //bg.scrollHeight :bg의 스크롤 전체 높이 (스크롤바를 이용해서 스크롤 할수 있는 전체 높이)
  //bg.scrolltop=값: 스크롤 윗부분을 값의 위치로 이동 


  input.value = "";
  input.focus();
}

//아이디가 user-input인 input 요소에서 
//키가 올라오는 동작이 발생했을때 (감지되었을떄)
//올라온 키가 "ENTER"키 이면 readValue()함수를 호출 
//keyup: 눌러지던 키가 떼어졌을때 (1회만 인식)
//keydown :키가 눌러졌을때 (+꾹 누르고 있으면 계속 인신됨)
document.querySelector("#user-input")
  .addEventListener("keyup", function(e){

    //e:이벤트 객체(발생한 이벤트 정보를 담고있는 객체 
    console.log(e);

    if(e.key =="Enter"){ //엔터가 눌러졌을때 
      readValue();

    }
  });