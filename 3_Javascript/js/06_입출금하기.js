function test() {
  //prompt() 사용연습;

  const password = prompt("비밀번호를 입력하세요");

  // alert(password);
  // 확인 -> 입력한 문자열 
  // 취소 -> null
  if (password == null) {//취소

    alert("취소");


  } else {//확인
    if (password == '1234') {
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치!")
    }
  }
}



let balance = 10000; // 잔액 기록 변수 
const password = '1234';//비밀번호 저장변수 
const amount = document.getElementById("amount"); // 금액 작성
const output = document.getElementById("output"); //잔액 출력 

output.innerText = balance;


//입급
function deposit() {
  const amount1 = Number(amount.value);
  //1 .입금 버튼 크릭 해당 함수 실행 
  //2. input에 (금액을 작성한 input == amount)입력된 금액이 얼마인지 구하고 
  //3. 구한 금액을 잔액(balance)에 누적하기
  //번외: input에 금액을 작성안하고 입금 버튼을 누른경우 alert("금액입력하세요 ")

  if (amount1 == "" || amount1 < 0) {
    alert("금액을 입력하세요")
  } else {
    console.log(balance);

    balance += amount1;
    console.log(balance);
    output.innerText = balance;
  }
}




//출금
function withdrawal() {
  const amount2 = Number(amount.value);



  if (amount2 == "" || amount2 < 0) {
    alert("금액을 입력하세요");
  } else if (amount2 > balance) {
    minus = amount2 - balance;

    //console.log(minus);
    alert("출금 금액이 잔액보다 클 수 없습니다");
    if (amount2 > balance) {
      alert("그래도 출금하십니까????");
      const password = prompt("비밀번호를 입력하세요");
      if (password == '1234') {

        balance = balance - (amount2 - minus);
        alert(balance - minus + "출금완료");
        output.innerText = balance;
      }else {
        alert("비밀번호 오류")
      }

    }

    // if(balance==0){
    //   console.log(balance)
    //   alert(`잔액이 ${balance} 입니다 출금불가`)
    // }
  } else {
    const password = prompt("비밀번호를 입력하세요");


    if (password == '1234') {
      alert("출금완료");
      balance -= amount2;
      output.innerText = balance;
    } else if (amount2 > balance) {
      alert("출금 금액이 잔액보다 클 수 없습니다 ");


    } else {
      alert("비밀번호확인하세요");
    }

  }
  if(balance==0){
    alert("잔액이0원 출금불가" );
  }

}






//1. 출금버튼 클릭 해당 함수 수행
// 번외: input에 금액을 작성안하고 출금 버튼을 누른경우 alert("금액입력하세요 ")
//2. 비밀번호를 입력받기
//2-1 취소버튼 눌렀을때 처리
//2_2 확인버튼 눌렀을때 처리
//   -> 비밀번호가 일치하는지 안하는지 따지기
//-> 일치한다면  출금할금액>잔액 보다 큰경우
// -> 출금할 금액이 >= 잔액 (출금처리 가능)
// -> 잔액 balance에서 내가 작성한 금액 차감  balance-=amount
