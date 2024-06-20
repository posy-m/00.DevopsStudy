// 프론트에서는 ejs 사용
// 페이지만 보여줄 거다!
// 화면을 유저한테 보여주는 거

const express = require("express")
const path = require("path")
const cookie = require("cookie-parser")
const axios = require("axios")

const app = express()

app.use(cookie());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("views", path.join(__dirname, "page"))
app.set("view engine", "ejs");

// 라우터
app.get("/", (req, res) => {
  res.render("main")
})

app.get("/login", (req, res) => {
  res.render("login")
})

app.get("/signup", (req, res) => {
  res.render("signup")
})

app.post("/login", async (req, res) => {
  const { uid, upw } = req.body;
  const data = await axios.post("http://127.0.0.1:4000/login", { uid, upw })
  console.log(data);
  res.send(`아이디 :${uid}, 비밀번호 : ${upw}`)
})

app.post("/signup", (req, res) => {
  const { uid, upw } = req.body;
  res.send(`아이디 :${uid}, 비밀번호 : ${upw}`)
})


app.listen(3000, () => {
  console.log("front server열림!");
})