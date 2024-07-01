const express = require("express");

const container = require("./container/Di")
// "./module/lib" => index.js가 기본값이기때문에 들고옴
const { sequelize } = require("./model/lib")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// fouce : 초기화 할지 말지
sequelize.sync({ fouce: false })

const userController = container.get("UserController")

// app.get("/users/:id", userController.getUser )
app.get("/users/:id", (req, res) => userController.getUser(req, res));
app.post("/createUser", (req, res) => userController.signup(req, res));

app.listen(3000, () => {
  console.log("서버 열림");
})

// npm i express mysql2 sequelize