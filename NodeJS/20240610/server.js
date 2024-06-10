// 이렇게 하면 바로 함수 실행
// const app = require("express")();


const express = require("express");
const fs = require("fs");
const path = require("path")
const boardRouter = require("./routers/board.router")

// 서버 객체 생성
const app = express();

//미들 웨어 : 요청과 응답 전에 동작할 기능 
app.use("/board", boardRouter)
// 루트 경로에서 요청이 들어오는 경우
// board : 루트에서 board라는 경로로 요청이 들어오는 경우

// 라우팅 처리
app.get("/", (req, res) => {
  // res.write("456")
  // res.write("456")
  // res.end("123");
  // end : 응답을 종료하고 기본적인 스트림을 다룰때

  // 헤더의 내용으로 정해진 컨텐츠 타입으로 보낼때 사용하는 메서드
  // 문자열, 객체, 배열, 버퍼 등의 내용을 클라이온트에게 응답하면서 응답 종료
  // html contentType 
  // res.send("{a:1}")

  // 주요 차이
  // end : 스트리밍 응답이나 부분을 나눠서 보낼때 
  // sned : 간단한 응답으 보낼때 한번으로 응답 종료

  // __ dirname : c/~/20240610
  // join : 문자열을 합쳐서 경로를 하나의 문다열로 반환
  const filePath = path.join(__dirname, "views", "index.html");
  // filePath : c/~/20240610/views/index.html
  fs.readFile(filePath, "utf-8", (err, data) => {
    // res 응답의 헤더의 상태모드를 404로 할당
    if (err) return res.status(404).send("페이지 파일을 읽는데 오류났엉")
    res.send(data);
  })
})



// 클라이언트 서버가 X 브라우저
// 서버측에서 페이지를 보여주는 역할까지 하고 있는 것.
// 클라이언트를 보여주는 서버 (정적 파일을 보여주는 서버)
// 객체나 DB등의 데이터를 응답해주는 서버

// 서버에서 브라우저에 응답메세지를 주는 것. (리다이렉트가 될까 안될까?) X


// 서버 대기 상태 
app.listen(3000, () => {
  console.log("server on!!!");
})