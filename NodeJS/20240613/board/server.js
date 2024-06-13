const express = require("express")

const app = express()
const path = require("path")

const mysql = require("mysql2")

const mysqlConnect = mysql.createConnection({
  user: "root",
  password: "alswl;0113#", //우리가 개인으로 설정한 비밀번호
  database: "test",
  multipleStatements: true
});

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "page"))
// views : 키값,  page : 폴더명 => 경로를 할당
// views라는 키 값에 서버 객체에 page라는 폴더를 할당하겠다.

// 깊은 객체를 사용하지 않고 JSON파싱을 사용하겠다.
app.use(express.json()); // 이거 없으면 body 내용이 파싱이 안됨
// body의 문자열 내용을 파싱해서 요청 객체에 body 키에 무자열을 파싱해서 객체로 할당해준다.
// body의 내용을 객체로 변환해준다.
// body라는 key를 추가하겠다.
// 변수의 값을 조회할때 데이터의 이름을 가지고 조회하는데 문자로 하면 어려우니까 객체의 키로 찾아서 뽑기 위해서 변환

app.use(express.urlencoded({ extended: false }));
// urlencoded : 쿼리스트링의 내용을 객체로 파생해준다.
// 쿼리스트링 : ?뒤에 붙는 이름들
// extended : 기본이 false



app.listen(3000, () => {
  console.log("잘열림!!");
})



// render()는ejs가 없으면 없당
// 지금 하는게 라우터
app.get("/", (req, res) => {
  res.render("main")
})

app.get("/list", (req, res) => {
  // res.render("list");
  mysqlConnect.query("SELECT * FROM products", (err, data) => {
    console.log(data);
    res.render("list", { data })
  });
})

app.get("/list/:name", (req, res) => {
  // name 키값 요청 url에 값이 value로 할당
  // list/1 === {name : 1} 
  console.log(req.params);
})

app.get("/insert", (req, res) => {
  res.render("insert")
})

app.post("/insert", (req, res) => {
  const { name, number } = req.body;
  const insertSql = "INSERT INTO products (name, number)VALUES(?,?);";
  mysqlConnect.query(insertSql, [name, number], () => {
    res.redirect('/list');
  })
})



