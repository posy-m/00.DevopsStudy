const express = require("express");
const app = express();
const path = require("path")
const userController = require("./controller/user.controller");
const postController = require("./controller/post.controller");
const { Posts } = require("./models")

app.set("views", path.join(__dirname, "page"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extends: false }))
app.use(express.json())

app.listen(3000, () => {
  console.log("하잉 열림 ");
})

app.get("/", async (req, res) => {
  const users = await userController.userselectAll();
  res.render("main", { users });
})

app.get("/create", (req, res) => {
  res.render("create")

})

app.post("/create", async (req, res) => {
  const { name, age, msg } = req.body;
  await userController.create(name, age, msg);
  res.redirect("/");
})

app.post("/post_create", async (req, res) => {
  const { content, user_name } = req.body;
  await postController.create(content, user_name)
  res.redirect(`/view/${user_name}`);
})

//글들이 나올 페이지
app.get("/view/:name", async (req, res) => {
  const { name } = req.params;
  // Posts 는 우리가 만든 맵핑
  const data = await userController.userSelectName(name, Posts);
  // 쿼리문이 두번 동작한다.
  // 왜? 유저를 찾고 글을 찾는 쿼리를 한번 더 호출하면 쿼리가 두번
  // 관계형 Join으로 조회를 하면 누가 작성한 글인지
  // join이랑 외래키는 상관이 없다!!!!!!!
  // 시퀄라이즈 orm은 이 관계형 외래키가 없으면 Join을 할수 없다.
  console.log(data);

  res.render("view", { data });
})