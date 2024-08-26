const cv1= document.getElementById("compareValue1");
const cv2=document.getElementById("compareValue2");
const result1=document.getElementById("result1");

function compareFn1(){
  const v1= cv1.value;
  const v2= cv2.value;

  result1.innerText=(v1 != v2);
}

