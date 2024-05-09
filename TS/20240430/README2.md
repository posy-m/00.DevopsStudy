# 클로저

> 자바스크립트의 특이점 클로저
> 함수안에 함수가 선언된 어휘적(lexical) 환경

<!-- 렉시컬이란 ?   -->

```js
function (a) {
  function(b) {

  }
}

const a = 0;

//외부
function b() {
  const index = 0;
  console.log(a);
  //내부
  return function c() {
      console.log(index)
  }
}
const d = b();

```

> 선언된 위치에서 상위 스코프를 참조한다 => 렉시컬 스코프
> 렉시컬 스코프 체인 => 선언된 위치에서 상위 스코프의 변수를 참조한다.

> 자바스크립트 공식문서 클로저 '함수와 함수가 선언된 어휘적(렉시컬) 환경의 조합을 말한다. 이환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성 된다.'

> Javascript의 함수가 실행될떄 실행 컨텍스를 만든다.
> 콜스택에 함수의 실행이 쌓이고 렉시컬 임벨리먼트가 특별한 객체가 생성되고 환경 레코드와 외부 아우터가 존재한다.
> 함수의 내부에 함수가 선언되고 내부 함수에서 외부 함수의 변수를 참조하는 경우
> 자바스크립트는 함수가 호출되고 외부함수의 변수를 내부 함수가 참조하는 있는 함수를 반환해서 사용하는 경우
> 내부 함수가 참조하고 있는 외부 함수의 변수를 가비지 컬렉션으로 해제하지 않는다.

## 렉시컬 환경

- Lexical Environment
  > 코드가 실행되는 컨텍스트

1. 환경 레코드
   > 코드의 this의 값과 선언된 변수와 함수를 기록하는 공간
   > 코드의 평가 단계 식별자 바인딩을 기록하는 곳.
2. 외부 환경 참조(아우터)
   > 렉시컬 환경에서 외부 렉시컬 환경을 참조
   > 한단계 위 상위 스코프를 참조

## 렉시컬 스코프

> 식별자의 스코프가 연결된 것을 스코프 체인이라고 한다.
> 코드를 작성한 구문이 작성한 그대로 스코프를 갖는 특징을 렉시컬 스코프
> 어휘적 스코프, 어휘적 스코프 체인

```js
//클로저 함수
// Counter 제일 쉽고 다할수 있다.
function Counter() {
  let index = 0;

  return function increment() {
    index++;
    consloe.log(index);
  };
}
debugger;
const _increment = Counter();
debugger;
_increment();
debugger;

//클로저가 없는 경우
function Counter() {
  let index;
  index++;
  console.log(index);
}
debugger;
const _increment = Counter();
debugger;
const _increment2 = Counter;
debugger;

//클로저가 없는 경우 함수 반환과 반환된 함수가 선언뒨 위치에서 렉시컬 스코프에 상위 스코프에서 참조된 변수나 매개변수가 있는 경우
let index = 0;
function Counter() {
  return function increment() {
    index++;
    console.log(index);
  };
}
debugger;
const _increment = Counter();
debugger;
_increment();
debugger;

//클로저 있음
function Counter(index) {
  return function increment() {
    index++;
    console.log(index);
  };
}
debugger;
const _increment = Counter(0);
const _increment2 = Counter(0);
debugger;
_increment();
debugger;
```

## 클로저의 목적(클로저 모듈 패턴)

> 자바스크립트 코드를 구조화 재사용 가능한 단위

> 클로저는 어휘적 스코프 체인으로 변수에 접근해서 변수의 호출 '상태'를 유지 (상태 : 용어)
> 상태 관리와 캡슐화(개인 변수)
> 불필요한 전역 변수를 만들 필요가 적어진다.
> 재사용도 좋다. 데이터와 메서드르 같이 관리할 수 있다.

```js
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
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
```
