// 데이터베이스 사용자 설정 객체
const config = {
  // 개발 용도
  dev: {
    username: "root",
    password: "alswl;0113#",
    database: "test1",
    host: "127.0.0.1",
    // dialect 어떤 데이터 베이스를 쓰는 지 알려줘야함
    // 데이터 베이스의 종류
    dialect: "mysql"
  }
}

module.exports = config;