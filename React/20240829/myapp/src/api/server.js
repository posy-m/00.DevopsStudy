const express = require("express")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// 임시 DB
let count = 10
let todoList = [{ id: 1, name: 'ming' }]
let users = []

app.get('/count', (req, res) => {
  res.send(count.toString())
})
app.post('/count', (req, res) => {
  const { incrementCount } = req.body
  console.log(incrementCount);
  count += incrementCount;
  res.send(count.toString())
})

app.get('/todo', (req, res) => {
  setTimeout(() => {

  }, 5000)
  res.send(todoList)
})

app.post('/todo', (req, res) => {
  console.log(req.body);
  const { test } = req.body
  const data = {
    id: todoList.length + 1,
    name: test
  }
  const list = todoList.push(data)
  console.log(todoList);
  res.send()
})

app.post('/sigin', (req, res) => {
  const { uid, upw } = req.body
  users.push({ uid, upw })
  res.send("가입완료")
})

app.get("/users", (req, res) => [
  res.send(users)
])

app.listen(4000, () => {
  console.log("server on");
})