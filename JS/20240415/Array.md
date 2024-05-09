# 배열

> 배열은 참조형 데이터 타입

## 문법

```js
let arr = [];

// 리스트의 형태로 나열 할때 사용
let arr2 = ["javascript", 2, 3, 4, true];
// 0부터
// 인덱스 개념으로

//배열의 값을 호출할때
arr2[0] === "javascript";
```

## 자바스크립트의 메모리

> 자바스크립트의 메로리 영역은 call stack과 heap이라는 영역이 있다.
> call stack 메모리에 원시타입이 저장되고
> heap 메모리에는 참조타입이 저장됩니다.

## 원시타입

> string, number, boolean, undefined 등
> 메모리에 값을 저장하고 변수가 직접 값을 가르키는 것.
> 원시타입은(불변성 ) 재할당 하게 되면 새로운 메모리에 재할당한 값을 저장하고 가르키는 주소가 바뀌는 것.

```js
let a = 1;
a = 2;
```

a -> 1
|
v
a -> 2
1

> 이렇게 1과2는 둘다 값이 존재하면서 새로운 메모리에 값을 재할당하고
> a가 가르키는 주소가 변한것 (이후 1은 사용되지 않으니 제거 된다.)

## 참조타입

> Array, Object, function등 원시타입 이외는 참조타입

> 원시타입과 다르게 참조 타입은 변수의 크기가 동적으로 변한다.
> 동적으로 데이터가 변하기 때문에
> 참조 타입의 데이터는 heep 메모리에 저장
> 변수를 호출해 주소의 값을 호출하면 힙 메모리의 주소의 값을 호출하고
> 힙 메모리의 주소에 있는 값을 호출하게 된다.

a -> 1
b -> 1
Arr -> (heep의 메모리 주소) -> []

> 쉽게 말해 원시 타입은 값을 가르키는 주소를 가지고 있고
> 참조 타입은 힙 메모리 주소를 가르키는 주소를 가지고 있다.

```js
let arr = [];
let arr2 = arr;
//push 메서드는 배열에 값을 뒤로 추가 한다.
arr.push(1);
console.log(arr2);
```

arr, arr2 -> (힙 메모리 주소) -> 값

##문법

```js
let a = ["ja ascript", " typescript", 123];
//자바스크립트의 배열은 데이터의 타입이 동적타입
//lenght는 배열의 길이를 나타낸다.
a.length 밸의 길이를 확인하는 키와 값

let b = [[],[],[]];
```

### 배열의 값을 추가

```js
//배열의 맨 마지막 데이터 뒤로 값이 추가된다.
arr.push(1);

//해당 인덱스에 값을 할당하는 경우
arrr[0] = 1;

arr[2] = 2;
```

# 잠깐 실습 배열을 하나 만들고 10번의 반복문을 10번 돌려서 배열에 증가하는 index를 넣어보자. 넣고 출력하세요. (for문)

```js
let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = i;
}
console.log(arr);

let arr3 = [3, 4];
arr3.push(1);
arr3.push(2);
arr3[0] = 5;
console.log(arr3);
```

### 배열의 메서드

```js
// 0, 1, 2, 3, 4 ==인텍스
let arr = [1, 2, "javascript", 4, 5];

//값을 나열할때 사용한다.
//접급은 인덱스로 값을 접근해서 사용한다.

//해당 값이 있는 인덱스를 찾아서 반환
arr.indexOf("javascript");

function indexOf(arr, str) {
  //배려의 길이만큼
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
    }
  }
}
// indexOf
// 배열 안에 값을 찾고 그 값이 들어잇는 Index를 반환

//find
//배열의 값을 처음부터 순서대로 순회하며 true의 값을 찾으면
//반복을 멈추고 해당 값을 반환
//함수에서 값을 반환
let result = arr.find(function (i) {
  return i === "javascript";
});

function find(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return arr[i];
    }
  }
}

//findIndex
//배열의 값을 처음부터 순서대로 순회하며 true 값을 찾으면
//반복을 멈추고 해당 인덱스를 반환한다.
let result2 = arr.findIndex(function (i) {
  return i === "javascript";
});

// filter
// 어떤데 사용하나?
// 검색기능 구현할때 등
//새로운 배열을 만든다. 원본 배열이 아닌 얕은 복사 깊은 복사
let arr2 = ["사과", "사과", "포도"];
//배열을 반환한다.
//true값을 받아도 배열의 끝까지 순회
//true값이 나온 해당 데이터를 배열의 형태로 만들어서 최종적으로 반환
//['사과','사과']
let result3 = arr2.filter(function (i) {
  return i[0] === "사";
});
//result3 = ['사과', '사과']; === 깊은 복사

//map
//배열의 값을 처음부터 순서대로 순회하면서 값은
//배열의 끝까지 반복한다. 배열을 반환한다. 반환된 값들을 가지고 배열을 생성
let result4 = arr2.map(function (i) {
  return "javascript";
});

//forEach -> 비추
let a = [];
arr2.forEach(function (i) {
  console.log(i); // 사과, 사과, 포도
  a.push();
});

// 배열의 문자열 변환
// join
// 배열을 만들어서 값을 깊은 복사
arr2.join("*"); //빈문자열이면 구분점에 내용 추가 X

// 문자열을 배열로 변경
//split
//매개변수로 전달한 내용이 문자열에서 배열로 나눠질 구분점
//깊은 복사
arr2.splice("*");
//"사과*서과*포도".split("*"); === ["사과", "사과", "포도"];

// 배열을 깊은 복사 하는 경우
// 스프레드 연산자 용어
const arr = [1, 2, 3];
const arr2 = [...arr];
```
