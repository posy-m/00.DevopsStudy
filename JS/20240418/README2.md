# 시간 날짜 Date 객체

javascript에 기본적으로 내장되어 있는 생성자

```js
new Date(); // 현재날짜 출력
```

```js
new Date(1000);
// 한국 표준시 1970년 1월 1일 0시
// 컴퓨팅 시스텝에서 시간을 추적하는 시스템 유닉스 시간의 시작점
// 1000밀리초 1초가 지난 시간.
```

```js
new Date(24 * 3600 * 1000);
```

// 24시간 후의 시간을 나타내는 Date객체 생성

```js
new Date("2024-04-18");
```

Date 객체가 전달된 문자열을 인자로 연도, 월, 일

```js
const _date = new Date("2024-04-18");
_date.getfullYear(); //년도를 반환
_date.getMonth(); //월을 숫자로 반환 0 ~ 11 + 1 월을 표현
_date.getDate(); // 일을 반환 일을 그대로 사용 하면 됨
_date.getDay(); // 요일을 반환 0 ~ 6 일요일이 0, 토요일 6
```

# Comment

> 댓글 구현 CRUD

### 작업의 내용

1. 댓글을 입력할 수 있다. (Create)
   - 댓글을 입력폼에 입력하고 작성버튼을 누르면 리스트에 댓글이 추가
   - 댓글을 성공적으로 추가하면 입력폼을 reset시켜야한다.
2. 댓글을 리스트로 조회해서 출력해준다. (Read)
   - 댓글의 내용은 '아이디' '댓글 내용' '날짜'로 표현
   - 댓글 리스트는 최신순으로 나타낸다.
   - 댓글의 총 갯수를 표현
   - 수정버튼이 존재한다.
   - 삭제 버튼이 존재한다.
3. 댓글을 수정할 수 있다. (Update)
   - 댓글 리스트에서 내용을 클릭하면 inputbox가 생기고
   - input에 값을 입력받고
   - 엔터를 누르면 input에 입력한 수정되게
4. 댓글을 삭제할 수 있다. (Delete)
   - 해당 리스트의 삭제 버튼ㅇ르 클릭하면 안내를 한번 하고 정말 삭제할꺼야?
   - 확인을 누르면 삭제 진행
   - 취소를 누르면 삭제 진행 X

## 작업 내용 설명

기본적으로 CRUD 작업할때 'C'를 먼저 작업 진행;
Create를 작업하면 Read와 연관이 깊다.
데이터를 정상적으로 저장하는지 확인을 하면서
UD 마지막에

### Create 단계 데이터를 저장할때

object, array

변수하나에 데이터를 여러개 필요로 할 경우 객체

리스트의 형태를 표현해야한다. 배열
object[]

```js
const list = [
  {
    uid: "soon",
    comment: "내용1",
    date: "2024-04-18",
  },
  {
    uid: "soon",
    comment: "내용2",
    date: "2024-04-18",
  },
  {
    uid: "soon",
    comment: "내용3",
    date: "2024-04-18",
  },
];

// 학생을 객체로 표현

const students = [];

const person = {
  name : "김밍지"
  age : 20
}
const person2 = {
  name : "힝힝이"
  age : 20
}

students.push(person);
students.push(person2);

// 생성자 함수로 객체를 생성해서
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("김민지", 20);
const person2 = new Person("이히잉", 30);

students.push(person1, person2);
```

### Read

데이터를 어떻게 출력할건지

```js
const list = [
  {uid : "soon", comment : "내용1", date : "2024-04-18"}
  {uid : "soon", comment : "내용2", date : "2024-04-18"}
  {uid : "soon", comment : "내용3", date : "2024-04-18"}
  {uid : "soon", comment : "내용4", date : "2024-04-18"}
]
```

이 리스트의 데이터를 요소로 표현

```thml
 <ul class="comment-row">
  <li class="comment-id>soom</li>
  <li class ="comment-content">내용1</li>
  <li class="comment-date">2024-04-18</li>
 </ul>
```

```js
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

ul.append(li1, li2, li3);

ul.classList.add("comment-row");
li1.classList.add("comment-id");
li2.classList.add("comment-content");
li3.classList.add("comment-date");

//내용
//출력하고 싶은 위치의 요소에 append
```

### dataset

```html
<!-- data-set 개발자가 사용하는 속성 -->
<div class="" id="" data-index=""></div>
```

## 구조 분해 할당

> 객체의 내용과 배열의 내용을 변수로 할당할 자주 사용한다.

```js
let a = { name: "김민지", age: 20 };

let b = a.age;

// 객체의 구조 분해 할당
// 객체의 안에 있는 키로 변수명을 선언해야한다.
let { age, name } = a;

// 배열의 구조 분해 할당
let c = [1, 2, 3, 4, 5, 6, 7];
let d = c[0];

let [num, num2, num3] = c;
//순서대로
```
