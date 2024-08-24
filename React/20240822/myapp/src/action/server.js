const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
  res.send("WKvkrpxl + 참치김밥")
})

app.listen(4000, () => {
  console.log("server on");
})