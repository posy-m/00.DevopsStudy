// 데이터만
// 안전하게 post 요청만 받아야한당!

const express = require("express");
const app = express();
const cors = require("cors")
const sql2 = require("mysql2/promise");
const { default: axios } = require('axios');

app.use(cors({
  origin: "http://127.0.0.1:5500",
  // methods: ["PUT", "DELDTE"],
  credentials: true,
}))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { uid, upw } = req.body;
  console.log(uid, upw);
  res.send(`아이디 :${uid}, 비밀번호 : ${upw}`)
})

app.post("/signup", (req, res) => {
  const { uid, upw } = req.body;
  res.send(`아이디 :${uid}, 비밀번호 : ${upw}`)
})

app.listen("4000", () => {
  console.log("back server on@@@@");
})