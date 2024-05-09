// interface IParson {
//   name : string, 
//   age : number
// }
// // interface를 만드는 이유는 ? 
// const parson : IParson = {
//   name : "이순현",
//   age : 123
// }

interface IParson {
  name : string, 
  age? : number
}
// ? : 키가 있어도 되고 없어도 된다.
const parson : IParson = {
  name : "이순현",

}
// class에 구조를 체크하기
// implements : 구조를 상속시킨
// interface의 구조에 충족하는지 여부 체크

class Parson implements IParson {
  name: string;
  age:number;
  constructor(name :string, age : number) {
    this.name = name;
    this.age = age;
  }
}