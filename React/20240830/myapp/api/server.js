const express = require("express")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const Item = [
  { id: 1, title: "ming1" },
  { id: 2, title: "ming2" },
  { id: 3, title: "ming3" },
  { id: 4, title: "ming4" },
  { id: 5, title: "ming5" },
  { id: 6, title: "ming6" },
  { id: 7, title: "ming7" },
  { id: 8, title: "ming8" },
  { id: 9, title: "ming9" },
  { id: 10, title: "ming10" },
]

// 2개씩 보여준다 가정하면 5개의 페이지 넘버
//
// 보여주는 글의 갯수
const pageViewCount = 2

app.get('/page/:pageIndex', (req, res) => {
  const { pageIndex } = req.params;

  // pageIndex
  const index = parseInt(pageIndex);

  // 페이지 번호에 해당하는 시작 인덱스 계산
  const startIndex = (index - 1) * pageViewCount;
  // startIndex 글의 배열에서 잘라야하는 시작점 인덱스

  const pageItem = Item.slice(startIndex, startIndex + pageViewCount)

  res.send(pageItem)
})

app.listen(4000, () => {
  console.log("server on!!!!!!!!");
})