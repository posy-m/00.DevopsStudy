// 서버 로직을 만들어보자.

// 내장 모듈을 가져오자.
// 문자열로 데이터를 주고 받는데 규칙을 정한것.
// 프로토몰 : 규칙 약속
// 데이터 변환해서 전달하는데 규칙을 정하고 사용
// const { isUtf8 } = require('buffer'); //구조분해할당
const http = require("http");

// 서버 객체를 생성
// 이벤트 기반의 아키텍처
const server = http.createServer((req, res) => {
  // req 요청에 대한 내용의 객체
  // res 응답에 대한 내용의 객체

  // 클라이언트에서 요청을 보내면 받고
  // 응답을 해준다.
  res.setHeader('Content-Type', 'text/html;charset=UTF-8')
  res.end("server on 하잉 민혁이 바보")
  //브라우저에 http://localhost:3000를 치면 웹페이지에서 응답 받는다.
})

// 서버 열어줄때
// 포트를 할당을 해줘야한다.
// 프로세스가 동작을 하고 있는 포트가 필요하다.

// 시스템 예약 포트이외
// 1025 ~ 65565까지 안에서 사용하면 된다.
// 개발할때 자주 사용하는 포트는 3000, 8000, 4000 

//포트 번호 지정
const PORT = 3000;
// 서버를 대기상태로 열어주자. 

// listen 서버를 대기상태로 실행
server.listen(PORT, () => {
  //성공적으로 서버가 열리면 호출해서 확인하려고
  console.log("서버가 잘 열려있어요.")
})