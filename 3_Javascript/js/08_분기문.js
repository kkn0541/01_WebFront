//break 확인
function check1() {
  // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤 
  // 
  for (let i = 1; i <= 10; i++) {
    console.log("i:", i);

    // break : (가장 가까운/감싸고 있는)반복문을 멈춤 ->바로 위 for문
    if (i == 5) break;
  }

}
//무한 반복하는 while문 멈추기 
function check2() {

  let i = 1;
  while (true) {
    console.log(i++);
    //i가 10초과 시 멈춤
    //break : (가장 가까운/감싸고 있는)반복문을 멈춤 ->바로 위 for문
    if (i > 10) break;

  }
}

//continue 확인
function check3() {
  // 1부터 20까지 1씩 증가하면서 출력 
  // 단 3의 배수는 건너뛰기
  //12457810....
  for (let i = 1; i <= 20; i++) {
    //3의 배수인 경우 

    //true면 continue 수행 하고 
    //밑에 있는거 수행하지 않고 다음  반복문으로 이동 
    if (i % 3 == 0) continue;

    //3의 배수인 경우 아래 코드를 수행하지 않음 
    console.log("i:" + i);
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

/* 0~9까지 5번 반복하여 출력
    단,  
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기


  최종적으로 아래처럼 출력되어야 함
 
  01235679
  01235679
  01235679
*/

//break & continue 둘다 적용해보기 
function check5() {

  ///행
  for (let y = 1; y < 5; y++) {
    //0
    //1
    //2
    //3

    let str = "";
   
    //열
    for (let x = 0; x <= 9; x++) {
      //0123456789
      //0을 제외한 4의 배수
      if (x!=0 && x % 4 == 0 ) continue; 

      str += x;
    }
 
 // 내부for 문끝나면 나와서 출력
    console.log(str)

    //3번째 줄 출력후 멈춰라 
    //
    if(y==3) break;

  }

}
const answer =Math.floor(Math.random() * 200)+1;
console.log(answer);

let count=0; // 몇번했는지 
let input=""; // 내가 입력할값 

function startGame(){
  
  for(let i =1; i<200;i++){
    
    input=prompt("번호입력");
    count++
    if(input == null) break; //취소시 창 닫기
  
    if(input>200){
    
      alert("200까지만"); 
      count++;
      continue;
    }

    if(input==answer){
      alert(`${input} 정답 ${count}번째`); 
      
      count="";
    //  answer=""; 값 초기화 어떻게함 ?
      break;
    }else if(input<answer){
        // 120을 넣는데 답150이면 반복문 시작 i=121 , i<=200반복범위를 업 121~200 으로 
        for(let x= input+1; i<=200; i++) {
          console.log(x);
          alert(`${input} 업`);
          break;
          // 120을 넣는데 답110이면 반복문 시작 i=121 , i<=200반복범위를 업 121~200 으로
          
        }
    }else{
      for(let y=input-1; y<input; y--){
        console.log(y);
        alert(`${input} 다운`); break;
      }
    }
  }
}