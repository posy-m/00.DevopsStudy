# Javascript, Typescript

- 기능을 넣어주는 것.
- 홈페이지에 동작을 관여하는 것.
- 웹페이지에 기능을 부여하는

어떻게 기능을 부여하는가? 왜 부여할수 밖에 없는가?

## Javascript

> 브라우저가 실행시켜준당. (브라우저, nodejs)
> 실행시켜주는 주체? 런타임

## 컴파일

>

## Typescript

> 컴파일이 안됨
> 혼자서 실행할 수 없음.

## 런타임 : 코드를 실행에서 알아들수 있는것.7

- 브라우저
- nodejs (주체가 내 컴퓨터)

- nodejs : Node.js는 오픈 소스 및 크로스 플랫폼 JavaScript 런타임 환경
  -> 코드를 실행시켜준다.
  -> 언어아님, 실행기임

## Javascript

console.log()
document : dom에서
alert(0)

## Class

class === 분류

객체지향이랑 class랑 다름.

## this

this를 공부하려면 ? javascript 기초 (실행컨텍스트)
현재 실행되는 코드의 실행 컨텍스트

```js
function (){}
() => {}
this 바인딩이 되냐 안되냐 차이
```

```js
// callback -> 실행 순서를 늦춘다.

function foo() {
  sonsole.log("Hello world");
}

// 1. hi 출력한다
// 2. foo 함수를 호출해서 hello world 출력한다.

console.log("hi");
fooo();

//
function init(cb) {
  console.log("hi");
  cb();
}

init(foo);
// 비동기적이라던가, 이벤트적인것.
```

게시판을 만들세요.

- 게시판 형태를 먼저 구성
- 게시판의 플로어를 나눈당.
  -> 게시판을 설계를 하면 좋겠당.
