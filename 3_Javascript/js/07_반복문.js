//for 문 연습
// 재대입이 가능하도록 let으로
//   초기식     조건식   증감식 
for (let num = 1; num <= 5; num++) {
  //조건식이 true인 경우 반복수행할 코드;
  console.log("통과");

}

function check1() {
  let result = "";//빈문자열 
  for (let num = 1; num <= 5; num++) {
    result += num;
    //result =result +num;
    // "1"   =  ""   +1;
    //       =   "1" +2;
    // "12"   =
  }
  console.log(result);

}
function check2() {

  for (let num = 1; num <= 10; num++) {
    console.log(num);
  }
}

function check3() {

  for (let num = 1; num <= 20; num++) {
    console.log("num :", num);
  }
}

function check4() {

  for (let num = 5; num <= 15; num++) {
    console.log(num);
  }
}

function check5() {

  for (let num = 1; num <= 30; num += 2) {
    console.log(num);
  }
}


function check6() {
  let result = 0; //합계를 저장하기 위한 정수
  for (let num = 1; num <= 10; num++) {
    result += num
  }
  console.log(result);
}

//입력받은 범위내 모든 정수의 합 구하기 
function sumFn() {

  //input에 작성된 값을 얻어와 작성 
  const start = Number(document.getElementById("inputNumber1-1").value);
  const end = Number(document.getElementById("inputNumber1-2").value);

  //결과를 출력하기 위한 요소 얻어와 저장 
  const result1 = document.getElementById("result1"); //span태그 

  // 합계를 저장할 변수 
  let sum = 0;

  //start 부터 end 까지 1씩 증가하는 포문
  for (let num = start; num <= end; num++) {
    sum += num; //num값을 sum값에 누적 

  }
  result1.innerText = sum;


}
//입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
function executeFn2() {
  //시작
  const start = Number(document.getElementById("inputNumber2-1").value);
  //종료
  const end = Number(document.getElementById("inputNumber2-2").value);
  //증가값
  const val = Number(document.getElementById("inputNumber2-3").value);
  //결과를 출력할 ul요소 
  const ul = document.getElementById("result2"); //ul태그 

  //반복해서 계속 나오는거 막기 
  ul.innerHTML = "";// 이전ul에 작성된 내용을 모두 삭제 

  //start 부터 end 까지 val씩 증가 

  //num +=val 헷갈림 계속보기 
  //2씩 증가 num+=2
  //val씩 증가 num+=val
  for (let num = start; num <= end; num += val) {
    //innerText쓰면 글자 그대로 출력되서 
    //innerHTML 사용
    // li쓴것처럼 출력됨 
    ul.innerHTML += `<li>${num}</li>`;
  }

}

//요소.innerText += `<li>${num}</li>`;
// ->요소의 내용으로 문자열을 누적 대입
//(html 태그를 해석하지 않고 문자열 그대로 보여줌 )
//요소.innerHTML += `<li>${num}</li>`;

//요소.innerHTML +=`<li>${num}</li>` ;
//->HTML태그를 해석해서 화면에 태그의 본 기느대로 출력


//입력 받은 단 출력하기 
function executeFn3() {
  //입력된 값(단)
  const input = Number(document.getElementById("input3").value);
  //결과를 출력할 요소 ul태그
  const ul = document.getElementById("result3");// ul태그
  //쌓이는거 제거 
  ul.innerHTML = "";

  //입력받은 단이 2~9 사이가 아닐경우 
  //2~9 사이만 입력하세요 알림창 띄우기 

  if (input < 2 || input > 9) {
    alert("2~9사이만 입력해주세요")
    return;// 함수를 종료하고 호출한 곳으로 돌아감 
    // 지금은 함수 종료 정도로만 인식
    // truu이면 if분 완전히 빠져나와서 for문 진행 
    //10단처럼 잘못된값해서 if문 return 만나면 excute함수가 그냥 끝나버림 
    //return 없으면  alert 후에 밑에for문 진행해버림
  }

  for (let num = 1; num <= 9; num++) {
    ul.innerHTML += `<li>${input}x ${num} = ${input * num} </li>`
  }
}

//중첩 for문 진행과정 체크해 보기 

for (let y = 1; y <= 3; y++) {
  console.log(`바깥쪽 for문-반복${y}`);
  for (let x = 1; x <= 2; x++) {
    console.log(`안쪽 for문- 반복${x}`);
  }
}


//12345
//12345
//12345
//12345
//바깥쪽 for문은 안쪽for문이 false가 될떄까지 돈다. 

function check8() {
  // 4바퀴 반복하는 for문 
  //세로 y 
  //가로 x
  for (let y = 1; y <= 4; y++) {
    //한번반복할때 마다 str 변수 만들어줌 
    let str = "";

    for (let x = 1; x <= 5; x++) {
      str += x;
      // 빈문자열 ""인상태에서 +1 -> ""+1
      //x 가 2 ->"1"+2
      //x 가 3 ->"12"+3.... "12345" 까지 
      //false면 밑에 콘솔로
    }

    console.log(str);
    //출력하고 다시 바깥쪽 for문으로 이동 
    //바깥쪽 for문이 false가 될떄까지 반복
  }
}

function check9() {
  for (let y = 1; y <= 5; y++) {
    let str = "";//빈문자열 만들기
    for (let x = 1; x <= y; x++) {
      str += x;
      //""+1 바깥for로 이동
      //"" 만들고 "1"+2 
      //바깥 "12"+3
    }
    console.log(str);
  }

}


//while문 확인하기 
function check16() {

  //변수를 선언만 해두기 
  let val;// undifined 


  // != -> 비교연산자 : 값을 비교 

  //동일 비교 연산자 
  // !== -> 값,  자료형이 모두 다른 경우 true 
  // === -> 값 , 자료형 모두 같은 경우 true

  //!= ,==느슨한 비교
  //!==,=== 엄격한 비교


  while (val !== null) {
    // val자료형 -> undefined  null자료형 -> object 이기 떄문에 
    // 엄격한 비교로 하면 다르다

    val = prompt("입력 후 확인"); // 변수에 prompt 값 대입 
    // 확인 -> 입력한 값 
    // 취소 -> null 
    // 마지막에 조건식까지 확인함 

  }
}

//메뉴 주문하기
function check15() {

  // 메뉴 가격 변수 
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;

  //주문 개수 카운트 변수 
  //카운트는 변할수 있어여해서let
  let gCount = 0; // 김밥개수
  let rCount = 0; // 라면개수
  let dCount = 0; // 돈까스 개수 

  // prompt로 입력한 값을 저장할 변수 선언 
  let input; // undefined 
  // 확인 ->입려한 값이 input 에 들어옴
  // 취소 -> null 이 들어옴

  //계속 반복하려면  input에 계속 값이 들어와야함
  while (input !== null) { //취소 누르기 전까지 무한 반복 
    input = prompt("메뉴 번호를 입력하세요");
    //입력한 값이 1 ,2 3, 에따라 수행할 코드가 달라짐 
    switch (input) {
      case "1": gCount++; break;
      case "2": rCount++; break;
      case "3": dCount++; break;
      case null: alert("주문완료"); break;
      default: alert("메뉴에 작성된 번호만 선택해주세요"); break;
      // switch문 끝나면 while 조건식으로 다시 돌아가서 비교 
    }
  }
    alert(`김밥 : ${gCount},라면 : ${rCount},돈까스: ${dCount}`);

    //합계
    
    let sum = (gCount * gimbap) + (rCount + ramen) + (dCount * donkkaseu);
    
    alert(`총 가격 : ${sum} 원`);
  }

  //while을 for문 처럼 사용하기 
  function check18(){
    //1부터 10까지 1씩 증가하며 출력 
     let num =1;
     while(num <11) {
      console.log(num);

      num++;
     } 

     console.log("-------------------------")
     //10부터 1까지 1씩 감소하며 출력 (while)

     let x=10;
     while(x>0){
      console.log(x);

      x--;
     }
  }
  function check4() {
    //1부터 30까지 1씩 증가하며 출력 
    //단, 홀수 또는 10의 배수는 건너뛰기
  
    for (let i = 1; i <= 30; i++) {
  
      if (i % 2 == 1 || i % 10 == 0) continue;
  
      console.log(i);
  
    }
  }