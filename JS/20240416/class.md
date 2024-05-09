# Class

> 클래스는 객체를 만들기 위해 사용되는 방법 중 하나 클래스를 사용하면 코드의 가독성이 좋아지고
> 상속으로 통한 코드의 재사용성이 좋아진다.

```js
class student {
  // 생성자 함수
  // 최초에 한번 new로 객체를 생성할때
  consturctor(_age, _phone, _city) {
    this.age = _age;
    this.phone = _phone;
    this.city = _city;
  }
}
// {}
let obj = new student(20, "01045670987", "서울");
console.log(obj);
```
