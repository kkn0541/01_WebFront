function fn1(){
  let str="";
  for(let i=10; i>0; i--){
    str+=i;
  }
  console.log(str);
}


function fn2(){
  let str="";
  for(let i=20; i>0; i--){
    if(i%2!=0) continue;
    str+=i; 
  }
  console.log(`${str} `);
}

//<h3>문제3</h3>
//<p>(while)1부터 50까지의 숫자 중 5의 배수만 출력</p>
//<button onclick="fn3()">문제3</button>

function fn3(){
  // 시작
  let i=1;
  
  //조건
  while(i<=50){
    
    i++;
    //i가 5의 배수면 밑에 콘솔 수행하지 않고 다음 반복문으로 이동
    if(i%5==0) continue;
    console.log(i);
  }
}

function fn4(){
  let fac=1;
  for(i=5; i>0 ; i--){
    fac*=i;
  }
  console.log(fac);
}

function fn5(){
  for(let y=2; y<=9;y++) {
    for(x=1;x<=9; x++){
      console.log(`${y}*${x}=${y*x}`)
    }
  }
}

function fn6(){
  for(let i=1 ; i<=30 ; i++){
    if(i %10 ==3 || i%10 ==6 || i%10 ==9 ||i==30){
      console.log("짝");
    }else{
      console.log(i);
    }
  }
}
