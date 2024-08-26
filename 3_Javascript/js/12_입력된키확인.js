//문서전체에서 이벤트가 발생해야함 document

//문자열.toLowerCase():영어를 모두 소문자로 변경(A->a)
//문자열.toUpperCase():문자열이 영어라면 모두 대문자로 변경(a->A)


//화면에 존재하는 key 모두 얻어오기 
//배열 형태로 전부 다가져옴
const keys=document.querySelectorAll(".key");
console.log(keys);

//문서(화면전체)에서 키가 눌러지는 걸 감지했을때 
document.addEventListener("keydown",function(e){

  let idx; //인덱스 값을 저장할 변수 
  // keys라는 가짜배열에 값들이 idx [index , index, index]


//눌린 키가 뭔지 알아야함
console.log(e.key);
//e.key.toLowerCase()-> q,w,e,r

switch(e.key.toLowerCase()){
 case 'q': idx=0 ; break;
 case 'w': idx=1 ; break;
 case 'e': idx=2 ; break;
 case 'r': idx=3 ; break;
 default : return;// 함수 종료  
}

//idx번호와 일치하는 keys배열의 요소의 배경색을 변경 
keys[idx].style.backgroundColor="deepPink";

});

//키를 떼면 배경색 흰색으로 되돌리기 

document.addEventListener("keyup",function(e){

  let idx; //인덱스 값을 저장할 변수 
  // keys라는 가짜배열에 값들이 idx [index , index, index]


//눌린 키가 뭔지 알아야함
console.log(e.key);
//e.key.toLowerCase()-> q,w,e,r

switch(e.key.toLowerCase()){
 case 'q': idx=0 ; break;
 case 'w': idx=1 ; break;
 case 'e': idx=2 ; break;
 case 'r': idx=3 ; break;
 default : return;// 함수 종료  
}

//idx번호와 일치하는 keys배열의 요소의 배경색을 변경 
keys[idx].style.backgroundColor="white";

});