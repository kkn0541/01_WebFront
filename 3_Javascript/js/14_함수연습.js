function hello(name) {
  console.log('Hello ' + name );
}
hello('이름');


function sum2(a ,b){
 console.log(a+b);
}
sum2(4,3);


function gop(a3,b3){
   console.log(a3*b3);
}
gop(4,3);


//화살표 모르것다 
// gop(a3,b3){
//  return  console.log(a3*b3);
//}
//gop(4,3);


function q4(a ,b){
  
  

    if(a>b){
      console.log("첫째가 더큼");

    }else {
      console.log("둘째가 더 크거나 같다 " )
    }


}
q4(6,4)

function q5(leng){

  console.log(leng.length);
}
q5("abc");



function q6(str1 , b){
  
  let result="";
 
for(let i=1 ; i<b ; i++){

result+=str1
}
console.log(result);
}
q6("abc",2)



function q7(num7){

 if(num7%2==0){
  console.log(true);
 }else{
  console.log(false);
 }

}
q7(11)


function q8(a ,b ,c){

  let max=a;
  if(max<c){
    max=c;
  }
  if(max<b){
    max=b;
  }

  console.log(max);
}
q8(1,2,3);

function q9(){
  
  console.log("깃테스트 확원에서 작성abc");
  console.log("깃테스트 집에서서 작성abc");
}