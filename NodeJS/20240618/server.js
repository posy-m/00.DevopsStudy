const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
// cookie-parser (사용해도 되고 안해도 되지만 한번 해보는걸로!)
const cookie = require("cookie-parser")

require("dotenv").config();
const app = express();

// process 객체에 env 키에 우리가 작성한 내용이 키와 값으로 할당된다.
// 노출되는 값은 env에 업로드하지만
console.log(process.env.KEY);
// .env 파일은 절대 올리면 안되고 빌드를 해서 올리거나
// 환경변수 지정하는 페이지에서 값을 적어주면 된다.

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
//body내용
app.use(express.json());
app.use(cookie());

//미들웨어 함수
// 쿠키값이 있으면 로그인이 정상적으로 체크하고 나서 정상적이게 요청할 수 있도록
function tokenMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.send("유효하지 않은 유저")
  req.user = token;
  next();
}

app.listen(3000, () => {
  console.log("열림");
})

app.get("/", (req, res) => {
  res.render("login")
})

const user = {
  uid: "ming",
  password: "123"
}


//(req, res, next)
app.get("/board", tokenMiddleware, (req, res) => {
  res.send(`board page ${req.user.name}`);
})


// 
app.post("/login", (req, res) => {
  const { uid: user_id, upw: user_password } = req.body;
  if ((user_id == user.uid) && (user_password == user.password)) {
    const { KEY } = process.env;
    // json web token을 발급할때 비밀 키를 넣어서 만들어 줄것
    // payload 값도 복원하고 검증을 하기 위해선 KEY값이 있어야한다.
    let token = jwt.sign({
      type: "JWT",
      // 유저이름 (payload값에 들어갈 이름)
      name: "ming"
    }, KEY, {
      // 토큰 유지 시간 (없으면 무한 토큰이 됨)
      expiresIn: "5m",
      // 토큰 발급자
      issuer: "발급자"
    });
    console.log(token);
    // verify 토큰을 검증하고 payload 값을 복호화
    const data = jwt.verify(token, KEY);
    // const data = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwibmFtZSI6Im1pbmciLCJpYXQiOjE3MTg2NzQ1MzIsImV4cCI6MTcxODY3NDgzMiwiaXNzIjoi67Cc6riJ7J6QIn0.nxC98gwwTmQFtKklDqaYTK2J1boP90VPNuD - MhE2rI0", KEY);
    console.log(data);
    // 단순 쿠키로 저장을 할것.
    // httponly
    res.cookie("token", data, { httpOnly: true });
    res.redirect("/");
  } else {
    res.redirect("/");
  }
})