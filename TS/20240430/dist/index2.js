// function Counter() {
//   let index = 0;

//   return function increment() {
//     index++;
//     consloe.log(index);
//   }

//   function decrement() {
//     index--;
//     console.log(index);
//   }
//   return{increment,decrement}
// }

// // tip 객체를 구조 분해 할당할때 키로 값을 할당 받았는데 변수에 
// // increment로 구조분해 할당하고 : 뒤의 선언한 변수명에 값을 할당해 준다. _increment 이름 지어준 변수
// const {increment : _increment ,decrement} = Counter();
// //클로저 : 데이터를 요소 개인 변수로 줄 수 있다.
// // 반환된 메서드들로만 이 요소의 개인 변수를 참조하거나 할당할 수 있다.

// increment()
// decrement()
// 재사용이 가능한 클로저 함수
//카운터를 생성할때
const createCounter = () => {
  //상태변수
  let index = 0;

  const increment = () => {
    index++;
    console.log(index);
  };
  const decrement = () => {
    index--;
    console.log(index);
  };
  return { increment, decrement };
};
// 카운터 하나 생성
// 요소 변수와 메서드를 같이 생성
const counter = createCounter();
debugger
counter.increment();
debugger
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();

//두번째 카운터 생성 
const counter2 = createCounter();

//빌드업
//react에서 상태 변수를 useState()
