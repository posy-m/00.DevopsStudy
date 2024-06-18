// bcrypt;
// 강력한 암호화를 제공한다.

// $2A$[cost]$[salt][hash]

// $2A$ : 사용 알고리즘
// [cost] : 키 스트레칭 횟수 값이 2의 ^n이다. 10을 입력하면 2^10 
// 10이 좀 기본값이고 10보다 크면 많이 느려진다.
// [salt] : 인코딩된 salt값 원본의 일부분을 salt으로 사용한다. 알고리즘에서사용함!
// [hash] : 비밀번호와 salt값을 합하고 해시에서 인코딩된 값.

// bcrypt: 보안에 집착하기로 유명한 openBSD에서도 사용

const bcrypt = require("bcrypt");

const createHash = (pw) => {
  return new Promise((res, rej) => {
    bcrypt.hash(pw, 10, (err, data) => {
      if (err) rej("헤싱 실패");
      res(data);
    })
  })
}

// 비동기를 동기적으로 처리하기 위해서 쓰는 함수! 
const compare = (pw, hash) => {
  return new Promise((res, rej) => {
    bcrypt.compare(pw, hash, (err, same) => {
      if (err) rej(err);
      res(same);
    })
  })
}

const test = async () => {
  // 비밀번호
  // $2b$10$LZmJ7FUAyQZC9OOy/9rAcu3.Ix8utk7IyaynMNXZfRluGe5nKPV8G
  // $2b$10$o0VoN/1GvodOP/tmqBu0pe.J0Sf41l7dcHHWEjns6PlyEdDxdu7si
  console.log(await createHash("123"));
  console.log(await compare("123", "$2b$10$LZmJ7FUAyQZC9OOy/9rAcu3.Ix8utk7IyaynMNXZfRluGe5nKPV8G"));
}
test();