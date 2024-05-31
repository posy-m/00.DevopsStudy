// TCP server를 간단하게 구현

// nodejs의 내장 모듈
// net 내장모듈을 제공

// http는 HTTP 프로토콜을 만들 수 있는 내장 모듈
// net보다는 한단계 위의 내장모듈

// TCP 소켓을 만들어서 사용
// TCP 연결을 맺는 프로토콜을 만들 수 있다.

// 모듈 가져오기.
const net = require('net');
const PORT = 8000;

// 서버 객체 생성
const server = net.createServer((client) => {
  // 클라이언트가 접속하면 보내는 데이터를 받기 위해서

  // 'data' : 이벤트 데이터를 전송하게 되면 네트워크에 전송된 데이터
  // 바이너리 형식으로 전송이 된다. 
  // 즉 클라이언트가 보낸 데이터는 Burffer 형태로 전송이 되며
  // 서버측에서 해석해서 문자열로 변환해서 사용
  // 출력된 데이터는 인코딩을 해서 데이터를 표현해주면 되는 것.

  //인코딩 utf-8
  client.setEncoding("utf-8");

  client.on('data', (data) => {

    // 클라이언트에서 보낸 데이터 
    // 네트워크를 통해 전송되는 데이터
    // 바이너리 형식으로 전송된다.
    console.log(data.toString());
    // 응답
    // client.end();

    // 데이터를 조회하겠다. 조회요청 한것. (GET)
    // HTTP/1.1 => HTTP의 버전증ㄴ 1.0, 1.1, 2.0 있는데
    // 우리가 사용하는 버전은 1.1 버전이다.
    // 1.1 버전은 www에서 사용되는 기본 프로토콜 > 1.1버전은 1997년 이후로 계속 사용 중

    // Connection : 클라이언트와 서버의 연결 상태의 속성을 정한다. 다음 요청을 보낼때까지 연결 유지

    // Content-type : 전송하는 데이터의 타입이 어떤거다 명시 (예시)text/html

    // GET / HTTP/1.1
    // Host: localhost:8000
    // Connection: keep-alive
    // Cache-Control: max-age=0
    // sec-ch-ua: "Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"
    // sec-ch-ua-mobile: ?0
    // sec-ch-ua-platform: "macOS"
    // Upgrade-Insecure-Requests: 1
    // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36
    // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    // Sec-Fetch-Site: none
    // Sec-Fetch-Mode: navigate
    // Sec-Fetch-User: ?1
    // Sec-Fetch-Dest: document
    // Accept-Encoding: gzip, deflate, br, zstd
    // Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7


    // GET / HTTP/1.1
    // Host: localhost:8000
    // Connection: keep-alive
    // Cache-Control: max-age=0
    // sec-ch-ua: "Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"
    // sec-ch-ua-mobile: ?0
    // sec-ch-ua-platform: "macOS"
    // Upgrade-Insecure-Requests: 1
    // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36
    // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
    // Sec-Fetch-Site: none
    // Sec-Fetch-Mode: navigate
    // Sec-Fetch-User: ?1
    // Sec-Fetch-Dest: document
    // Accept-Encoding: gzip, deflate, br, zstd
    // Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7

    const body = `<html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    
    <body>
      <div>하이영</div>
    </body>
    </html>
    `
    // body의 내용 본문의 내용 
    // 200 -> 상태메세지 (예시) 404 
    const resMsg = `HTTP/1.1 200 ok
    Content-type : text/html
    Content-Length : ${body.length}
    
    ${body}`

    client.write(resMsg)
    client.end();


  })

})

// 서버를 대기 상태로 만들기
server.listen(PORT, () => {
  console.log('server on!!!');
})

//http://localhost:8000 => 브라우저에 입력 하면 밑에 전송됨