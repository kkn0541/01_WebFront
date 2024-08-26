
let balance = 10000; // 잔액 기록 변수 
const password = '1234';//비밀번호 저장변수 
const amount = document.getElementById("amount"); // 금액 작성
const output = document.getElementById("output"); //잔액 출력 

output.innerText = balance;

//입금
function deposit() {
  //1 .입금 버튼 크릭 해당 함수 실행 
  //2. input에 (금액을 작성한 input == amount)입력된 금액이 얼마인지 구하고 
  //3. 구한 금액을 잔액(balance)에 누적하기
  //번외: input에 금액을 작성안하고 입금 버튼을 누른경우 alert("금액입력하세요 ")
  if (amount.value.length == 0) { //금액 입력 안했을떄
    alert("금액을 입력해주세요")

  } else {//금액을 입력했을때 
    //balance= balance+Number(abmount.value);
    //3. 구한 금액을 잔액(balance)에 누적하기
    balance += Number(amount.value);
    //잔액변수 = 현재 잔액 + 내가 새로 입력한 금액

    //현재 안액 을 다시 span태그 사이에 출력
    output.innerText = balance;

    amount.value = "";
  }
  //input에 기존에 작성된 값 제거하기
  //입금되면 공란으로 만들기 
}


function withdrawal() {


  //1. 출금버튼 클릭 해당 함수 수행
  // 번외: input에 금액을 작성안하고 출금 버튼을 누른경우 alert("금액입력하세요 ")
  //2. 비밀번호를 입력받기
  //2-1 취소버튼 눌렀을때 처리
  //2_2 확인버튼 눌렀을때 처리
  //   -> 비밀번호가 일치하는지 안하는지 따지기
  //-> 일치한다면  출금할금액>잔액 보다 큰경우
  // -> 출금할 금액이 >= 잔액 (출금처리 가능)
  // -> 잔액 balance에서 내가 작성한 금액 차감  balance-=amount

  if (amount.value.length == 0) { //금액 입력 안했을때
    alert("금액을 입력해주세요");
  } else { //금액 입력 했을때 
    // 2. 비밀번호를 입력 
    const pw = prompt("비밀번호를 입력하세요");
    if (pw == null) { //prompt 취소 버튼 누른경우
      alert("출금을 취소하셨습니다.");
    } else { // prompt 확인 버튼 누른경우 
      if (password != pw) {
        //비밀번호가 일치하지 않을 경우
        alert("비밀번호가 일치하지 않습니다.");
      } else {
        //비밀번호가 일치할 경우 
        //내가 현재 입력한 금액 저장 
        const money = Number(amount.value);
        //출금할 금액이 현재 잔액보다 큰 경우
        if (money > balance) {
          alert("출금금액 > 잔액 불가");
        } else { // 출금할 금액이 현재 같거나 작은경우
          //잔액 =현재잔액 -금액
          balance-=money;
          output.innerText=balance;
          amount.value='';

          alert(`${money}원이 출금 되었습니다.남은잔액 ${balance}`);
        }
      }
    }
  }

}