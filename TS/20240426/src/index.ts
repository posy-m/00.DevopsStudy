const input = document.querySelector(".uid") as HTMLInputElement;
const input2 = document.querySelector(".upw") as HTMLInputElement;
const inputBtn = document.querySelector(".uid-btn") as HTMLButtonElement;

// Element 에 value가 없을거다.
console.log(input.value);

//DTO : 데이터의 형태를 받을 수 있는 형태로 변환
type userLoginInputDTO = {
  uid : string,
  upw : string,
  city?: string,
  [key : string] : string
  // key는 그냥 이름을 정해둔거. 밑에 있는  "name" : "안녕"
  // 대괄호를 사용해 쓸 수 있지만 DTO를 해칠 수 있기에 잘 안쓰는게 좋다..
}
// ? : 옵셔닝 

inputBtn.onclick = function(e : Event) {
  // from 요소를 사용시 nam의 요소에 접근하기 위해서
  // const _target = e.targen as HTMLFormElement;
  //const uid = _target.
//e.target === EventTarget

  //input 요소를 사용시 value 같은 속성에 접근하기 위해서
  // 오류가 우리를 실행 전에 좀 유추할 수 없게 된다
// if((e.target as Element).classList.contains("uid-btn")) {
//   const _target =  e.target as HTMLFormElement;
//   const uid = _target.value;
//   console.log(uid);

// }

const _value = (input as HTMLInputElement).value;
const _value2 = (input2 as HTMLInputElement).value;

//userLoginInputDTO 형태가 아니면 기능에 오류가 발생할 수 있으니
const userDate : userLoginInputDTO = {
  uid : _value,
  upw : _value2,
  "name" : "안녕" 
}
userDate["name"]
console.log(userDate?.city); // undefined
// ?. : 코드가 오류를 발생하면 코드가 중단되는데 코드 중단을 막아준다.
//옵션 체이닝 : 키를 먼저 확인하고 있으면 호출해라

//userDate?.city
//userDate에 city키가 있는지 먼저 학인하고 있으면 값을 호출

// 여기서 데이터를 전달
console.log(userDate);
}