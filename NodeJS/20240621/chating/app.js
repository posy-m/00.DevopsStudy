// npm i express socket.io
// 채팅방
// 버스 좌석 예약

const express = require("express");
const path = require("path")
const socketio = require("socket.io")
const app = express()


app.set("views", path.join(__dirname, "page"))
app.set("view engine", "ejs")
app.set(express.json())




const server = app.listen(3000, () => {
  console.log("port 열림ㅋ");
})

console.log(server);

app.get("/", (req, res) => {
  res.render("main")
})

app.get("/chating", (req, res) => {
  res.render("main2")
})


// web socket 프로토콜 객체 생성
// 이렇게 작성을 하면 soket을 받을 수 있는 미들웨어 생성
// http://localhost:3000/socket.io/socket.io.js // 스크립트 반환 // 정적파일을 제공할수 있는 미들웨어를 만듬
// console.log(io);
const io = socketio(server);
let users = [];
io.on("connection", (socket) => {
  // console.log(socket);
  users.push(socket.id)
  console.log(users);
  console.log("클라이언트 접속");

  // 서버측 web scoket 이벤트명이 같은지 확인하고 핸들러 함수를 호출한다.
  // 지금 여기서 객체를 받음
  socket.on("serverWhisper", ({ id, msg }) => {
    console.log(id, msg);
    // to : 클라이언트 중에서 누구에게 보낼 이벤트 인지
    io.sockets.to(id).emit("whisper", msg);
  })

  //방에 접속을 요청
  // 접속한 방의 해시값으로 동작할 수 있게 받는다???
  socket.on("joinRoom", (room, name) => {
    // id 처럼 고유 해시값을 받게 된다.
    // 나만 표현하는 내 id와 다르게 해당방의 고유 해시값
    socket.join(room);
    // 우리 소켁세 고유한 아이디 해시 값을 가지고 있는데 socket안에는 room의 해시값이 있다. 방에 해시값을 만들어주는거임
    // socket 내가 속해있는 방의 해시값
    // 어느방에 접속했는지 그 방에 있는 사람들에게 브로드 캐스팅
    io.to(room).emit("joinRoom", room, name);
    // "joinRoom" :  이벤트, room, name :  여러개의 매개면수 전달 가능
    // 여러명이 room이라는 
  })

  // 유저가 나가면 소켓값 제거
  socket.on("leaveRoom", (room, name) => {
    socket.leave(room);
    io.to(room).emit("leaveRoom", room, name)
  })

  //채팅 할수 있게 하는 거
  socket.on("chat", (room, name, msg) => {
    io.to(room).emit("chat", name, msg);
  })

  socket.on("disconnect", () => {
    users = users.filter((value) => value != socket.id)
    console.log(users);
  })


})

