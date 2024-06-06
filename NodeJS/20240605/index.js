const fs = require('fs');
const { loadEnvFile } = require('process');

// 파일을 읽거나 쓰거나 삭제 생성 등을 확일할때 사용하는 내장 모듈 파일 시스템
// 폴더가 있는지 확인
//Sync가 붙으면 동기적으로 처리 하겠다. (기다리겠다.)
// existsSync : 폴더가 있는지 확인 반환값이 true false
let folder = fs.existsSync("./Test")
console.log(folder);

// 폴더가 없으면 생성
if (!folder) {
  // 비동기적으로 실행되는 메서드
  // 매개변수로 폴더를 만들 경로를 전달
  // 이 방식으로 하면 밑에 것도 실행시켜준다.
  // fs.mkdir("./Test", (err) => {
  //   if (err) {
  //     console.log(err);
  //     console.log("에러발생");
  //   } else {
  //     console.log("Test 폴더가 정상적으로 만들어짐");
  //        폴더가 생성되고 처리해야할 내용
  //        폴더에 파일을 만드는 내용(나 폴더 필요한데? 폴더가 없네?)
  //   }
  // })

  // 페이지의 게시판을 만드는 내용은 비동기적으로 하고
  // 나머지 기능적인 부분이나 페이지를 그리는 내용은 동기적으로 코드로 그려준다.


  //동기적으로 하는 방법
  const text = fs.mkdirSync("./Test")
  // return으로 반환해준다.
  console.log("동기니?");
  // try catch
  // console.log(text); 정상적으로 되면 undefined 작동이 안되면 error내용이 나옴
}

// 폴더 만들었으니 폴더에 파일을 추가해보자
// writeFile : 파일을 쓰기 파일에 데이터를 포함하여 파일을 만들어준다.
// writeFile("파일 생성 경로 및 파일 이름", "파일에 작성할 내용 ", "함수")
// fs.writeFile("./Test/text.txt", "Hello nodejs", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(("파일이 잘 만들어 졌음"));
//   }
// })
// 파일이 이미 있으면 내용을 수정해준다.

//동기적으로 처리되는
fs.writeFileSync("./Test/text.txt", "Hello nodejs123");
console.log("파일이 잘 만들어 졌음");

// 파일을 읽어오자
// 전달한 익명함수의 매개변수 순서가 에러 결과 순으로 작성
// 얘는 비동기
// fs.readFile("./Test/text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

//동기적으로 실행
let data = fs.readFileSync("./Test/text.txt", "utf-8");
console.log(data);

// 삭제 
// recursive 삭제할때 옵션으로 폴더 안에 있는 내욜까지 삭제 하겠다.
fs.rm("./Test", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("폴더가 잘 삭제 됐음!");
  }
})
