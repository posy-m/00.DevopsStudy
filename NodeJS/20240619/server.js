const express = require("express")
const app = express()
const path = require("path")
const uploadRouter = require("./routers/upload.router");


//미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/img", express.static(path.join(__dirname, "upload")))

// use를 사용하면 모든 경로를 호출
app.use("/upload", uploadRouter);


app.listen(3000, () => {
  console.log("포트 열림ㅋ");
})