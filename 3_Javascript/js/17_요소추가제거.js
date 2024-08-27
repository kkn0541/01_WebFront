// 프로젝트때 많이씀 잘 익히셈



const addbtn=document.querySelector("#add") //추가
const calcbtn=document.querySelector("#calc"); //계산
const container= document.querySelector(".container");

//최종적으로 만들어진 요소를 붙여야 하는 요소 



addbtn.addEventListener("click",()=>{
  /*     
  <div class="row">
      <input type="number" class="input-number">
      <span class="remove-row">&times;</span>
  </div>
*/
  
  //1. div만들고 
 const row=document.createElement("div");
 //console.log(row)
 //2. 요소에 클래스 추가하기 

 row.classList.add("row");// <div class="row"></div>

const input=document.createElement("input"); //input

//4. type =number 추가하기
input.type="number";
//input.setAttribute("type","number"); // <input type="number">
//5. 클래스 inputNumber 추가하기 
input.classList.add("input-number"); //클래스에 input-number 추가 

//6.span요소 생성하기 
const span=document.createElement("span");


//7. span요소 생성하기("remove-row" 추가)
span.classList.add("remove-row"); //<span class="remove-row"></span>
//8 내용으로  $times; 추가 (innerHTML 사용 )

span.innerHTML="&times;"; //<span class="remove-row">$times;</span>


//조립하기 
//div.row요소에 자식으로 input 추가 
row.append(input,span);


// 이게 아님 먼저 row.appned해야함
container.append(row);

//클릭된 x버튼의 부모요소(div.row)를 제거 
span.addEventListener("click",(e)=>{

//e.target = 현재 span태그
//부모요소를 선택
const parent =e.target.parentElement;

parent.remove();

})

})


calcbtn.addEventListener("click" ,()=>{
  let sum=0;
//1 모든 .input-number 요소 얻어괴 
const numbers= document.querySelectorAll(".input-number");


//2. for문으로 모든 요소 접근하여 
// 작성된 값(value)를 얻어와 
// 숫자로 변경(Number()) 한 후 
// 합계 저장 변수 sum누적 


for(let i=0; i<numbers.length;i++){
sum+=Number(numbers[i].value);

}


//3. for문 끝나면 alert로 sum값 출력 
alert("결과:"+sum);

})

