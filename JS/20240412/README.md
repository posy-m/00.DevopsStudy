# 함수

> 중복 코를 줄이기 위함.

## 함수 선언

````js
// [function 예약어] [이름] ([매개변수]) {[실행코드 내용]}
function name() {}
``` .

## 코드 실행 (호출)

```js
// [함수 이름 ] ()  ;
name();
````

##코드의 실행은
브라우저가 코드를 읽고
브라우저 실행

```js
console.log("Hellow world");
```

## 함수도 값이다.

## 함수 선언과 호출

```js
function massage(a) {
  let a = "딸기"
  console.log("a + 음료수가 생성");
}

massage
//함수의 값이 호출된다.
f massage(){
  console.log("안녕하세요");
}

message("띨기");
log == "딸기 음료수가 생성"

massage("키위");
log == "키위 음료수 생성"
//함수의 값이 호출된다.
```

## 함수의 매개 변수와 스코프

```js
let a = "철수";
function name() {
  console.log(a);
  //지역 스코프
  function name2() {
    console.log(a);
  }
  name2();
}
name();

// name ->  a -> console.log(a)
// 하루의 실행 컨텍스트(우테코) 앞부분
```

## 매개변수와 인자

매개변수는 함수 안에서 선언하는 변수
인자는 함수 호출시 넣는 값

```js
function name(매개변수) {}
name("인자");
```

## return

return은 함수 안에서 사용하는 예약어
함수의 내부에서 return을 만나게 되면
함수를 종료 시킨다.

```js
function name() {
  console.log("여기는 실행");
  return;
  console.log("여기는 실행 X");
}
```

## 함수 선언식

```js
function message() {}
```

## 함수 표현식

```js
const message = function () {};
message();
const message2 = message;
massage2();
```

## 함수의 매개변수에 함수를 전달할 수 있나?

```js
//콜백 함수
function message(fn1, fn2) {
  fn1();
  fn2();
}
function fn1() {
  console.log("name 나는 함수야 ");
}

function fn2() {
  return "name2 나는 함수야";
}

message(name, name2);
// console.log(num());
```

## 화살표 함수

함수 표현식을 조검 더 간결하고 좋은 방법으로 문법을 작성
ES6에서 추가된 문법이고 '화살표 함수'이라고 한다.
this를 이해하고 쓰면 좋다.
this바인딩을 하지 않기 위해서 사용한다.

```js
const sum = (a, b) => {
  return a + b;
};

sum();
```

## 즉시실행 함수, 익명함수

## 익명함수

```js
function () {

}
```

## 즉시실행 함수

```js
(function () {
  let a = 1;
})(1);
let a = 1;
```

# 콜백함수를 만들고 매개변수를 2개 받아서

# 콜백함수에 매개변수 더할 숫자 2개 선언.

# 두 함수를 호출해서 나는 함수를 잘 쓰고 싶어 오늘 복습하고 질문하고 블로그 정리해야겠다, 두숫자를 받아서 더하는 값을 하나 보여주기.

```js
//잘못 된거
function callback(blog, number) {
  blog();
  number();
}
function blog() {
  console.blog(
    " 나는 함수를 잘 쓰고 싶어 오늘 복습하고 질문하고 블로그 정리해야겠다"
  );
}
function number() {
  return blog(`${number}+${number}`);
}
callback("", 30);
```
