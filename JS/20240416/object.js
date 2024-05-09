const student = {
  age: 30,
  phone : "01000000000",
  city : "서울"
}
const student2 = {
  age: 30,
  phone : "01000000000",
  city : "서울",
  say : function(){
    console.log(this);
  }
}

//this 본인이 속해있는 객체 참조
function createStudent(age, phone, city){
  this.age = age;
  this.phone = phone;
  this.city = city;

}

//new _ 빈객체 생성
const student3 = new createStudent(23,'0000000000',  '대구');
student2.say();
//this는 속해있는 개체를 참조한다.
//키와 값
console.log(this)
console.log(student);
console.log(student3);
console.log(student3.age); //나이만 보고싶어
console.log(student3.phone); // === 0000000000

student.say = function(){
  console.log(this);
}

//다시보기 
// student.say = () => {
//   console.log(this)
// }

student.say();

// 실습을 할건데 학생의 정보와 이름과 나이만 받아서 만드는 함수를 작성하시고 옆친구 5분만 객체를 만들어 보세요

//function x

function friend (name, age) {
  this.name = name;
  this.age = age;
}

const friend1 = new friend('백종혁', 29);
const friend2 = new friend('이윤지', 20);
const friend3 = new friend('문다은', 22);
const friend4 = new friend('김시온', 31);
const friend5 = new friend('장수정', 30);

console.log(friend1, friend2, friend3, friend4, friend5)

