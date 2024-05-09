// 반복문

//예약어
for(let a = 0; a < 10; a++) {
  console.log(a);
}

/* 
[for(예약어)] ([선언식]; [조건문]; [연산식]){반복될 코드의 내용}
*/ 
//선언식은 스코프 안에 유효함

//순서
//선언식 -> 조건문 확인 -> 스코프 코드 실행 -> (연산식 -> 조건문 -> 스코프 코드 실행) -> (연산식 -> 조건문 -> 스코프 코드 실행)

// 0~20까지 찍는 반복문
// 짝수만 20까지 홀수도 하면 좋습니다.

for(let b = 0; b < 21; b++) {
  console.log(b);
}

for(let c = 2; c < 21; c+=2) {
  console.log(c);
}

for(let d=3; d < 21; d+=3) {
  console.log(d);
}

//앞에 있는 변수에 할당 되려면 = 을 붙여야하한다.


//index 용어 _ 순회하는 넘버
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j <10; j++) {
        console.log("i, j", i, j);
      }
}
//콤마를 쓰는 이유는...?
//이중 포문은 어쩌다가.. 삼중은 절대 쓰지 말것.
//스코프의 개념을 잘 이해할 것.

// 구구단 2단~10단까지

for(let i=1; i<10; i++){
  console.log("2x"+i,"=",i*2);
}

//구구단을3단과 4단을 직접 만들어 봅시다.

for(let i=1; i<10; i++){
  console.log("3x"+i, "=", i*3);
}

for(let i=1; i<10; i++){
  console.log("4x"+i, "=", i*4);
}

// 2중 for문으로 2~10단 만들기 .


//if는 중괄호가 없으면 바로 아래 줄까지만 유효하다.
//continue 밑의 코드 내용을 실행하지 않는다. 다시 연산식 -> 조건문 -> 실행
for(let i=0; i<10; i++){
  if((i >=3) && (i < 5)) continue;
  console.log(i);
}

//잘 쓰는 사람들만 사용하라.
//무한 루프 도는 경우 
//확실한 내용의 코드만 작성 해라
//while은 반복 횟수가 무한.
//break 반복문을 종료 시킨다.
//순서 : 조건문 -> 코드실행 -> 조건문 -> 코드실행 (반복)
let a=0;
//true
while(a < 10) {
  a++;
  console.log(a);
}


// let b=0;
// while(b < 10) {
//   console.log(b);
//   a++;
// }

//a++;의 위치에 따라서 결과값이 달라짐

// while(b < 10) {
//   let b=0;
//   console.log(b);
//   a++;
// }
//let=0;을 안안으로 오면 스코프 안에서 계속 돔  let이 계속 초기화 시켜서 무한으로 돌아감 
//그래서 스코프 안에 선언식 쓰지 말기




//while문으로 2단을 만들기 break문으로 종료
let bc=0;
while(true) {
  bc++; 
  console.log("2*", bc, "=", bc*2);
  if(bc>=9) break;
}

//while문으로 2단을 만드는데 조건문으로 break문 없이
let b=0;
while(b < 10) {
  b++; 
  console.log("2*", b, "=", b*2);
}


//첫번째 한 예시
// let b=0;
// while(b < 10) {
//   b++; 
//   console.log("2*", b, "=", b*2);
//   if(b>=9) break;
// }