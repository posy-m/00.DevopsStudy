const net = require("net");
const path = require('path');

const getRequest = require("./lib/requset");
const getResponse = require('./lib/response');

const staticFileObj = require("./lib/static")

const server = net.createServer();

// server.on 메서드로 이벤트 구독

// 논리적 연결이 됐으면
server.on("connection", (socket) => {
  let buffer = Buffer.alloc(0)
  // socket data를 보내면 호출될 이벤트
  socket.on("data", (chunk) => {
    // concat 버퍼에 있는 데이터를 합쳐준다.
    // 처음에 할당한 길이가 변하지 않기 때문에
    // concat 버퍼 데이터를 합쳐주기 위해서
    buffer = Buffer.concat([buffer, chunk]);
    // 요청 객체 내용
    const req = getRequest(buffer)
    // console.log(req);
    // 응답 객체 내용
    const res = getResponse(socket, req);
    // 라우팅 처리 (요청 경로의 값을 판단해서 어떤 처리를 해줄지 결정)

    // /js/index.js
    // 정적 파일 라우팅 처리
    for (const path in staticFileObj) {
      // /css/home/index.css
      if (req.startLine.url === path) {
        res.sendStatic(path)
        return;
      }
    }
    console.log(req.startLine);
    // Restfull API // get / post / put / delete
    // API : Application programing interface
    // 페이지 라우팅
    const urlPath = req.startLine.url
    console.log(urlPath)
    if (urlPath === "/") {
      res.send("index")
    } else if (urlPath === "/board/list") {

    } else if (urlPath === "/board/write") {

    } else {
      res.notFound("너 요청 주소 확인행")
    }

    // 메서드가 post일 경우 본문 내용으로 json파일을 만들어서 내용을 추가하기.
  })
})

server.listen(3000, () => {
  console.log("server on!!!!");
})


/*

net
- server.js
- lib - 라이브러리
lib -- reqest.js
lib -- response.js
lib -- static.js
- public - 정적 파일들
public -- css
public -- js
- views -- 화면 구성할것들
views -- index.html
views -- borad
borad --- list.html
borad --- write.html

*/