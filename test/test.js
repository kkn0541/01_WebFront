const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input41 = document.querySelector("#input41");
const input42 = document.querySelector("#input42");
const input6 = document.querySelector("#input6");
const input7 = document.querySelector("#input7");
const input9 = document.querySelector("#input9")
const q4 = document.getElementsByName("q4");
const q9 = document.getElementsByName("q9");
const q10 = document.getElementsByName("q10");
const box3 = document.querySelector("#box3");



function test() {
  
  //너비 높이
  const input11 = Number(input1.value);
  const input22 = Number(input2.value);
  //크기
  const input33 = Number(input3.value);
  
  //굵기
  
 
  //글자색  배경색
  const input66 = input6.value;
  const input77 = input7.value;
  const input99 = input9.value;





  box3.style.width = `${input11}px`;
  box3.style.height = `${input22}px`;
  box3.style.fontSize=`${input33}px`;
  
  box3.style.color = input66;
  box3.style.backgroundColor = input77;
  //box3.style.color=;

  box3.innerText = input99;

  for (let i = 0; i < q4.length; i++) {
    if (q4[1].checked) {
      box3.style.fontWeight = "bold";
    } else{
      box3.style.fontWeight="";
    }

  }
  for (let i = 0; i < q9.length; i++) {
    if (q9[0].checked) {
      box3.style.textAlign="left";
    }else if(q9[1].checked) {
      box3.style.textAlign="center";
    }else{
      box3.style.textAlign="right";
    }

  }

 // 세로정렬 에러 
  // for (let i = 0; i < q10.length; i++) {
  //   if (q10[0].checked) {
  //     box3.style.alignItems="";
  //   }else if(q10[1].checked) {
  //   box3.style.alignItems="center";
  //   }else{
  //     box3.style.alignItems="";
  //   }

  // }

 
}