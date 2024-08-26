function startGame() {

  //맞춰야 하는 난수 (1~200)
  const answer = Math.floor(Math.random() * 200) + 1; //0부터 200미만 +1
  //테스트 후 삭제 
  console.log("정답" + answer);

  //정답 시도 횟수를 세기 위한 변수 
  let count = 0;

  //prompt에 출력할 문자열 
  let str = "1부터 200까지 숫자입력";

  //무한반복
  while (true) {

    //input 에는 null/ 입력한 값  
    let input = prompt(str);

    if (input === null) { // 취소 클릭 시 
      alert("게임포기");
      break;
    }

    //숫자 입력 후 확인 클릭 시 
    const value = Number(input); //입력 받은 값 숫자로 변환 (anwer가 number 형식인데 비교해야하기떄문)

    //잘못 입력했을때

    //1. 숫자가 아닌 글자를 넣은 경우 
    // NaN(not a number: 숫자가 아니다)
    // isNaN(값) : 값이 NaN이면 true 
    if (isNaN(value)) {//숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해주세요");
      continue;

    }
    //2. 범위를 초과한 경우 
    if (value < 1 || value > 200) {
      alert("1~200 사이 값만 작성해주세요");
      continue;
    }
    //정답을 맞추기 위한 시도를 했기 떄문에 count증가 
    count++;

    // 정답인 경우
    // 정답이 아닌 경우 
    if (value === answer) {
      alert(`정답!!!(${answer})/시도 횟수 ${count}`);
      break;
    }
    if(value<answer){ //작은 경우 
      str=`${value} up / 시도 횟수 ${count}`;

    }else{ //큰경우
      str =`${value} down / 시도 횟수 ${count}`
    }
  }

}