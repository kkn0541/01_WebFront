const createBox=document.querySelector("#createBox"); //btn
const container= document.querySelector(".container");// 초록박스 감싸고 있는 div

//createbox 버튼 클릭시 div.box를 생성하여 
//container에 마지막 자식으로 추가 

createBox.addEventListener("click",()=>{
//1. div요소 생성
 const box=document.createElement("div"); //<div></div> 아직은 바디바깥쪽에 혼자 둥둥떠나님
 console.log(box); // 만들어졌지만 화면에는 아직 안보임 

 //2.만들어진 div요소에 "box"클래스 추가 
 box.classList.add("box");// <div></div>가 <div class="box"></div>됨

 //3.container의 마지막 자식으로 div요소 추가 

 container.append(box);

//4. input 요소 생성 
const input = document.createElement("input");//<input>
input.type="text";

//5.생성된 input을 box의 마지막 자식으로 추가하기 
box.append(input);

})

console.log(container.classList);
/*
요소.classList:요소의 클래스 목록 
-> 클래스 존재여부 , 추가 , 제거등을 할수 있있음 

*요소.classList
->요소 목록이 배열 형식으로 반환 

*요소.classList.contains("클래스명")
->클래스가 있으면 true, 없으면 false


*요소.classList.add("클래스명");
->클래스 추가 

*요소.classList.remove("클래스명");
->클래스 제거 

*/


//innerHtml로 요소 추가 
//# 꼭 붙여제발
const innerHTMLBox= document.querySelector("#innerHTMLBox");

innerHTMLBox.addEventListener("click",()=>{

  container.innerHTML+= "<div class='box'><input type='text'></div>"

});