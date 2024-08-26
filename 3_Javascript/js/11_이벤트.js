/*인라인 이벤트 모델 확인*/

function check1(btn) {

  //매개변수 btn==클릭한 버튼(this)
  //html에 button 소스 한줄 다 넘어옴 
  console.log(btn);

  //버튼의 배경색을 얻어와 저장 
  const bgColor = btn.style.backgroundColor;

  console.log(bgColor);

  //버튼이 클릭될때 마다 pink <-> yellow 변경 
  if (bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
    //btn이 버튼전체 
  } else {
    btn.style.backgroundColor = "yellow";
  }
}

//----------------고전 이벤트 모델------------------

//아이디가 test-1인 요소를 얻어와 test1a변수에 저장
const test1a = document.querySelector("#test1-1");

//고전 이벤트 모델 작성법 
//요소.이벤트리스너=이벤트핸들러 
test1a.onclick = function () {
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
};

//고전 이벤트 모델 제거 

//#test1-2 버튼 클릭 시 
//#test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거 

document.querySelector("#test1-2").onclick = function () {
  //test1-1 기존 onclikc 이벤트 핸들러를 
  //null로 덮어씌움(이벤트 제거)
  test1a.onclick = null;
  //function() 이 null 로 바뀜 
  alert("이벤트 제거됨");
}

//const test2a= document.querySelector("#test1-2");


//고전이벤트 모델 단점 

//#test1-3 요소를 얻어와 test1c변수에 저장 
const test1c = document.querySelector("#test1-3");

//test1c 요소에 클릭되었을때 배경을 red로 변경 
test1c.onclick = function () {
  test1c.style.backgroundColor = "red";
}

//test1c 요소가 클릭되었을때 글자색을 white로 변경

test1c.onclick = function () {
  test1c.style.color = "white";
}
//->onclick에 저장된 값이 덮어씌워지면서 
// 이전코드가 사라지는 문제 발생 

//-----------------------------------------

// 표준이벤트 모델 확인 
const test2 = document.querySelector("#test2");

//표준이벤트 모델 작성법 
//요소.addEventListner("이벤트종류",이벤트핸들러(함수));
test2.addEventListener("click", function () {

  //투명도 1(불투명)->0(투명) 0.1씩 감소 

  //현재 test2의 투명도 확인 
  let curr = test2.style.opacity;

  //맨처음에는 투명도 '' 이어서 1대입
  //console.log(curr);

  if (curr == '') {
    test2.style.opacity = 1;
    curr = 1;
  }

  //투명도 0.1씩 감소 
  test2.style.opacity = curr - 0.1;

  if (test2.style.opacity == 0) { //완전히 투명해졌다면 
    test2.style.opacity = 1;

  }

});

//test2요소를 클릭하면 클릭 횟수 카운트
let count = 0;

test2.addEventListener("click", function () {
  count++; //카운트 1증가 
  //표준 이벤트 모델의 이벤드 핸들러(함수)안에서
  //thie == 이벤트 발생한 요소 
  this.innerText = count;

})


// 내가 입력할input 태그 요소를 얻어오기 
// 얻어온 input 요소에 내용(작성된 값) 얻어오기 
const input = document.querySelector("#input3"); //queryselector()css선택자랑 똑같이 넣어줘야함
const box = document.querySelector("#box3");

const input2 = document.querySelectorAll("#input3"); //queryselector()css선택자랑 똑같이 넣어줘야함
//



//document.querySelector("#input3")

//input 요소에 이벤트를 추가한다
//-무슨이벤트? input3에서 키보드가 올라왔을때
//-함수(function (e)) 안에 작성된 내용을 수행하겠다.
input.addEventListener("keyup", function (e) {
  

  //e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
  console.log(e);

  //조건? 이벤트로써 감지된 키가 Enter 일때
  // 얻어온 색상(내용)으로 배경색을 줄 div요소 얻어오기 
  //box3의 배경색에 대입하기
  if (e.key == "Enter") { //엔터가 눌러졌을때 
 //얻어온 input 요소의 내용(작성된 값) 얻어오기
 //box3의 배경색에 대입하기 
      console.log(input.value);
      box.style.backgroundColor = input.value
      //오른쪽에 있는걸 왼쪽에 대입 
      //console.log(box.style.backgroundColor);

    }
  });

  //box3를 클릭하면 
  //box3가 가지고 있는 배경색을 alert출력 

  //document말고 box를쓰자 
 // document.querySelector('#box3') 말고 
 
 box.addEventListener("click", function (a) {
      
  console.log(a);
  //a.target : 이벤트가 발생한 대상 요소 
alert(`배경색:${a.target.style.backgroundColor}`)

 // alert(`${box.style.backgroundColor}`);
        
      

    });


// document.querySelector('#box3')
//   .addEventListener("click", function (e) {
//     const input2 = box.style.backgroundColor;
//     if (e.key == "click") {
//    //   console.log(input2);
//       alert(input2);
//     }


//   });




