// 데이터를 다루는 곳은 데이터 베이스에서 다를건데
// 커넥션 연결 설정을 이곳에서

//promise객체를 내보내는 것.
const mysql2 = require("mysql2/promise")

// createConnecion 에서 제공받은 메서드 콜백 함수 기반을 제공 받았고
// promise를 반환해준다.
// createConnecion : 기본적인 연결을 제공하는 메서드를 테스트 할때 

// 커넥션 풀을 생성하고 관리할 수 있는 메서드
// 여려명이 동서에 요청을 보내도 성능 저하가 없고 성능이 유지된다.

const mysql = mysql2.createPool({
  user: "root",
  password: "alswl;0113#",
  multipleStatements: true,
  database: "mypage"
})

// 커넥션 테스트
mysql.getConnection((err) => {
  console.log(err);
})

module.exports = mysql;

