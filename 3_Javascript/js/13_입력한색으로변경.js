
//배경색 적용할 각 div배열 
const boxList =document.querySelectorAll(".box")
//배경색 입력할 각 input 배열 
const inputList = document.querySelectorAll(".color-input");

console.log(boxList);
console.log(inputList);

//#changButton 요소를 클릭했을때 
document.querySelector('#changeButton').addEventListener("click",function(){

//inputList에 작성된 각 내용을  boxList에 있는 각div에 대입 
for(let i=0; i<boxList.length; i++){
 boxList[i].style.backgroundColor=inputList[i].value;

}

})

// document.addEventListener("click", function(e){

//   let idx;
  
//   switch(box[i]==input[i]){
//     case '':  ; break;
//     case '':  ; break;
//     case '':  ; break;
//     case '':  ; break;
//     default : return;// 함수 종료  
//    }
  
  
//   for(let x=0 ; x<input.length ;x++){
//     box.style.backgroundColor= input[x].value;
    
//     for(let y=0; y<box.length; y++ ){
      
//     }
//   }
  
// });