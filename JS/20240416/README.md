# 객체

> 객체는 참조형 데이터 타입

## 데이터 타입

- 원시형 : string, number, boolean 등
- 참조형 : object, array, function

## 문법

```js
// 객체의 문법
// 리터럴 문법
const user = {};
console.log(user);

// 생성자 문법
// new 예약어
const user = new Object();
console.log(user);
```

> 하나의 사물을 표현하는 여러 데이터를 다룰때 객체

## 객체의 용도

```js
const computer = {
  name: "ASUS",
  model: 14,
  color: "balck",
  sell: false,
  price: 1000,
};
const computer2 = {
  name: "ASUS2",
  model: 14,
  color: "balck",
  sell: false,
  price: 1000,
};

// 객체는 실제 존재하는 개체를 표현할때 작업

//객체의 값을 호출
// 객체에는 여러 키와 값이 존재하고 특정값ㅇ르 호출할 수 있어야한다.

//객체의 name만 호출 해보기
// 점 표기법 (객체안에 있는 키를 표기하기 위한)
console.log(computer.name) === "ASUS";

//괄호 표기법
console.log(computer["name"]) === "ASUS";

//점 표기법과 괄호 표기법의 차이
function objproperty(obj, key) {
  console.log(obj, ["name"]);
}
objproperty(computer, "name");

// 속성 특수분자는 괄호 표기법으로 접근한다. (문자열로 줘야함)
const content = {
  "content-type": "text/javascript",
};
content["content-type"];
```
