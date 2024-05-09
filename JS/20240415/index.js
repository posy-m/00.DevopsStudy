//반복문을 사용한 경우
//여기부터 스톱워치 찍을게?
console.time();
let a = 0;
for (let i = 1; i <= 100; i++) {
  a += i;
}
console.log(a);
console.timeEnd();

// 수학 공식을 사용한 경우
console.time();
let n = 100;
console.log((n / 2) * (n + 1));
console.timeEnd();

//재귀함수를 사용한 경우
console.time();

function sum(n, result) {
  if (n === 101) {
    console.log(result);
    return n;
  }
  sum(n + 1 , result + n);
}
sum(1, 0);
console.timeEnd();

//피보나치 수열
console.time();
function fibo(n) {
  if (n == 1 || n == 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(25));
console.timeEnd();



// console.time();
// let meme = {
//   name: "이순현", //key :  값
//   color: "black",
// };
// //name 객체의 키 "이순현"이라는 값
// "name" in memo === true;
// "name2" in memo === false;
// memo["name"] === "이순현";

// //memo 빈객체 생성
// //상태 데이터를 객체에다 담아두려고
// let memo = {};

// // in 예약어
// // 객체안에 키가 있는지 확인
// // 반환값은 true false

// function fibo2(n) {
//   let result; // 연산을 하고 반환할 값

//   //한번 상태를 만든 연산인지.
//   if (n in memo) {
//     //연산을 했었어
//     result = memo[n];
//     //객체를 하고 넘어오면 더 이해가 될거니까.
//   } else {
//     //연산을 안했었어
//     if (n === 1 || n === 2) {
//       result = 1;
//     } else {
//       result = fibo2(n - 1) + fibo2(n - 2);
//     }
//     //다음번에 연산을 하지 않게 하기 위해서 상태 값을 저장
//     memo[n] = result;
//   }
//   return result;
// }

// console.log(fibo2(25));
// console.timeEnd();


//two : 더할 값, plus : 반복횟수, index : 증가 횟수
function jagu(two, plus, index) {
  if ((plus-1) < index) {
    return two
  }
  return jagu(two + 2, plus, index + 1);
}
console.log(jagu(2, 5, 0));
jagu(2, 5, 0);


