# This가 어려운 이유

`Function`의 역할이 너무 많기 때문이다.

## 일반 함수로 사용

```js
function Foo(a, b) {
  console.log(this); // window
  return [a, b];
}

const a = Foo(1, 2); // [1,2]
console.log(a);
```

## 생성자 함수로 사용

```javascript
function Foo(a, b) {
  //this = {}
  console.log(this); //{}
  this.arr = [a, b];
  // return(a,b)
}
const a = new Foo(1, 2);
console.log(a); // Foof {arr: [1,2] }
```

## 객체 메서드로 할당

```js
function Foo(a, b) {
  console.log(this);
  return [a, b];
}
const bar = {
  method: Foo,
};
bar.method(5, 6); // !?
```

## function은 this binding이 된다.

## this binding

```js
fonction a(){}
console.dir(a)
```

- 일반함수로 사용 - constructor 함수가 필요없음.
- 이렇게 일반함수로도 사용하고, 생성자 함수로도 사용하다보니.
- 일반함수로 사용할때 this와 생성자 함수의 사용의 this가 달라지니 혼란을 만듭니다

**bind**›

```javascript
function Foo (a,b) {
console.log (this) // window
return [a,b]
}
//인자값이 어떤형태인지.
// 이 메서드 혹은 함수를 호출했을때, 리턴타임을 보시는가
// рор ()
// push(어떤 데이터가 들어가는가))
const fooBind = Foo.bind({name: ' ingoo'})

const a = foobind(1, 2) // [1,2]

const bar = { method: fooBind }
bar .method (5, 6)
/*
결과물이
{name: 'ingoo'} {name: 'ingoo'}
[5, 6]
* /
```
