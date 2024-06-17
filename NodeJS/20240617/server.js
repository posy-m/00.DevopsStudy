const express = require("express");
const path = require("path");
const postRouter = require("./routers/post");

const app = express()

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));
console.log(app);
// 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// 정적 파일 라우팅 매개변수 첫 문자열 경로를 지정하지 않으면 / 루트 경로가 기본
app.use("/css", express.static(path.join(__dirname, "public")));


// 루투 경로 요청일때 처리할 미들웨어
// 매개변수로 경로를 전달해주면 전달한 요청 경로가 들어온 경우 라이터처리를 하겠다.
// app.use(postRouter);
// 포스트 페이지를 나누고 싶다고 하면?
app.use("/post", postRouter);
// /post, 라우터 요청 url

app.listen(3000, () => {
  console.log("열림");
})