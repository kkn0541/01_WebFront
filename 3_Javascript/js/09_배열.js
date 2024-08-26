//배열 선언 및 기초 사용법 
function check1() {
  // 배열 선언 방법 

  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);

  //배열명.length : 배열의 길이(배열에 있는 칸수 또는  저장된 데이터 수 )
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);

  //배열의 index
  /**
   * 배열의 각 칸을 구분하는 번호 
   * 0부터 시작! 
   * 중간에 번호를 생략할수 없습니다. (항상 연속적 )
   * 마지막 index == 배열 길이 -1
   * 
   
   */
  //배열명[index] -> 배열의 해당 index에 존재하는 데이터 반환 
  console.log(arr4[0]);
  console.log(arr4[1]);
  console.log(arr4[2]);

  //배열명 [index] = 값; -> 해당 인덱스에 지정된 값 대입 
  arr2[0] = 100;
  arr2[1] = "문자열";
  arr2[2] = true;
  console.log(arr2);
  //js배열의 특징 : 인덱스 별로 자료형을 다르게 넣을 수 있다. 

  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";

  console.log("arr:1", arr1);
}

//배열과 for문 
function check2() {
  //for문을 이용해서 배열 요소 초기화 하기 
  //초기화 : 변수 /배열 요소에 처음으로 값을 대입하는 것 

  //for문 이용안했을때 
  const arr1 = [];
  arr1[0] = 0;
  arr1[1] = 10;
  arr1[2] = 20;
  arr1[3] = 30;

  console.log("arr1:", arr1);

  //for 이용 o
  const arr2 = [];
  for (let i = 0; i <= 3; i++) {
    arr2[i] = i * 10;
    //arr2[0] =0*10
    //arr2[1] =1*10
    //arr2[2] =2*10
    //arr2[3] =3*10
  }
  console.log("arr", arr2);

}

function check3() {
  //배열에 저장된 값 하나씩 순서대로 출력하기 
  //-> for문을 이용해서 배열의 모든 요소 접근하기 

  const arr = [10, 20, 50, 100, 500, 1000];
  //arr.length ==6 
  // arr의 마지막 index 번호 ==5 
  // i< arr.length == (i<= arr.length-1)
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(`arr[${i}]==${arr[i]}`)
    arr[i];

    console.log(arr[i]);
  }

}

//배열과 for문 3번쨰 
function check4() {
  //for문을 이용해서 배열을 순서대로 초기화 한 후에 
  //다른 for문을 이용해서 배열 오소를 하나씩 출력 
  const arr = new Array(5); // 5칸짜리 배열 (요소별로 내용 없음)

  //1. 배열을 순서대로 초기화 
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt(`${i}번째 숫자 입력`)); //0번째 숫자입력 1번쨰 숫자입력 
  }

  console.log(arr);

  //2. 배열 요소를 하나씩 모두 출력 + sum 
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}]:${arr[i]}`)
    sum += arr[i]; // 값 누적

  }
  console.log("sum", sum);
}


function selectMenu() {

  // 결과 출력할 span태그 구하기 
  const menuResult = document.getElementById("menuResult");

  //점심메뉴로 초기화된 배열생성
  const menu = ["김밥1", "김밥2", "김밥3"
    , "김밥4", "김밥5", "김밥6"
    , "김밥7", "김밥8", "김밥9"
    , "김밥10", "김밥11"];

  //메뉴 배열 index범위(0~10) 내에서 난수생성 
  const randomNumber = Math.floor(Math.random() * menu.length);

  //난수번쨰 index요소 값을 화면에 출력 
  menuResult.innerText = menu[randomNumber];

}


//2차원 배열 
function check5() {

  const arr = [[1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]];

  //배열명[행][열]
  //행 열 도 처음이 1행 1열 아니고 0행 0열부터 시작 
  console.log(arr[1][3]); //8
  console.log(arr[2][2]); //11

  const arr1 = [100, 200, 300, 400];
  const arr2 = [900, 800, 700, 600];

  //arr 3행에 arr1을 대입
  arr[3] = arr1
  arr[4] = arr2;

  console.log(arr);

  //600을 출력하려면 

  console.log(arr[4][3]);
}

//2부터 2씩 증가하는 수를 
//5행 5열 배열의 모든 요소에 차례대로 대입하고 출력 
/*[ [2, 4, 6, 8, 10],
[12, 14, 16, 18, 20],
[22, 24, 26, 28, 30],
[32, 34, 36, 38, 40],
[42, 44, 46, 48, 50]  ]
*/


function check6() {
  let count = 2;
  const arr = [];// 빈 1차열 배열  [[2,4,6,8]]


  for (let row = 0; row < 5; row++) {  // 바깥쪽 for문 ->  행 제어for문
    arr[row]=[]; //arr[0]에 빈배열[] 대입
    //첫번째 돌면 arr[0]=[] arr[[]]   0행에 배열[]대입
    //두번째 돌면 arr[1]=[] [         1행에 배열[]대입
    for(let col=0; col < 5; col++){ //안쪽 for문 열제어 for 문
    
    //첫번째 배열 arr[0]에서 열[0][1][2][3][4] 반복하면서 
    //count+=2 -> 2, 4, 6,8, 10 대입 
    
    
      arr[row][col]=count; //row행 col열에 count를 대입 
      count+=2; //count를 2증가 
      //arr[0][0] =2 ;//[[2]]  0행 0열에 2대입
      //arr[0][1] =4 ;//[[2,4,6]] 0행 1열에 4대입 
      //
      //arr[0][4]=10 ; //[[2,4,6,8,10]] 0행 4열에 10대입 
    }
  }
console.log(arr);
}
