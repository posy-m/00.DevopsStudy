// http net 구현했던 네트워크 TCP
// 모던한 느낌으로 외장모듈 라이브러리를 구현한것.

// Restfull API // get / post / put / delete
// API : Application programing interface

// get : 내용을 조회
// post : 내용을 추가
// put : 내용을 수정 
// delete : 내용을 삭제


// express : 내장 모듈이 아니라 외장 라이브러리
const express = require("express");
// nodejs의 최신 버전으로 설치하고
// nvm : 노드 버전 매니저 => 버전 스위치가 용이 합니다.
// npm i express 최신 버전이 설치된다.
// 협업할때 팀원들 노드버전 맞추고 시작해야한다.
// express.create => express.httpcreate 이렇게 이름이 바꾸었는데 노드 버전을 안맞추면 터짐

// npm init -y : 디폴트 값으로 json 생성

// npm i express
// package.json => "express": "^4.19.2" => 본인의 nodejs 버전에 따라서 => express nodejs기준의 최신 버전
// package-look.json

// 만약에 작업을 하다가 팀원이 한달뒤에 갑자기 컴퓨터를 새로샀엉, 또는 팀원이 추가됐다면
// express 버전이 올라갔엉
// package-look.json 실제 버전 설치된 내용의 json 파일이 있으면 버전이 문제가 없다.

// 서버 객체 생성
const app = express();

// 미들웨어
// 요청을 보내고 응답을 하기 전에 처리할 내용을 미들웨어로 추가
// 스트림 배우면서 대문자 변환

// app.use : 미들웨어 추가
// express.json() : 파싱의 내용을 넣어주겠다. body의 내용을 객체로 {a :1}
// 문자열을 객체로 변환하는 내용을 미들웨어로 추가해준다. res.body = {a:1}
// 편하게 데이터를 사용할수 있도록 파생해서 사용하게 해준다.
// express.json
// bodyparser == X // bodyparser 외부 라이브러리
app.use(express.json());

// 쿼리스트링 파싱 form의 내용을 파싱
// 깊은 객체까지 사용할꺼냐? 안할꺼냐?
// 깊은 객체 : {a: {b:1}}
// extended: true
app.use(express.urlencoded({ extended: true }));

// 라우팅을 메서드를 통한 라우팅
// get / post / put / delete

app.get("/", (req, res) => {
  console.log(req.query); // 쿼리스트링
  // req.query = 쿼리스트링을 객체로 파싱
  console.log(req.body); // 전달한 본문의 내용을 body에 객체 파싱
  res.send(`
  <html> 
    <title>응답 페이지</title>
    <body>
      <form method = "post" action ="/postContent">
      <input type="text" name="test2">
      <button> 확인 </button>
      </form>
    </body>
  </html>
  `) // 응답 메시지 응답 종료

})

app.post("/postContent", (req, res) => {
  console.log(req.body);
  // redirect : 응답을 받았을때 브라우저가 응답을 받았을때
  // 요청을 다시 이 경로로 보내
  res.redirect("/");
})

app.listen(3000, () => {
  console.log("서버 잘 열림!!!!!!!!!!");
})