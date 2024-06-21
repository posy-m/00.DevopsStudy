# 웹소켓
> 용도 : 채팅 구현, 알람 기능 데이터를 요청해서 받아서 페이지의 내용을 그려준다던가 했지만 이제 서버에서 요청을 보낼 수 있게
        양방향 통신이 가능하게 보기에는 실시간 채팅이나 게시글이 등록되는것 처럼 기능을 동작하고 싶을때 사용 
> 웹소켓 프로토콜 일반적인 http 요청과 응답과의 흐름과는 다르고
> http 초기 논리적 연결 요청 이후에 웹소켓 프로토콜인지 확인을 한다.
TCP연결..?
TCP방식을 사용한다.

## 클라이언트
> GET 요청 메시지를 받고
> 헤더의 내용에
```sh
GET / HTTP /1.1 
host : http://127.0.0.1:0000
Upgrade : web
Sec-WebSocvket-Key : 해시 문자열
Sec-WebSocket-Version : 버전
```
- Upgrade : websocket의 연결을 요청한다.
- Sec-WebSocvket-Key : 클라이언트가 만든 고유 키


# 서버 
> 요청을 받고 Upgrade : websocket의 요청을 수락하면 101 상태코드
```sh
HTTP/1.1 101 switching protoclos
Upgrade : websocket
Sec-WebSocket-Accept : 해시 문자열
```


> 핸드 쉐이크가 성공하면 http 연결이 웹소켓 연결로 변경된다.
> 양방향으로 데이터를 프레임 단위로 주고 받는다.

# 웹소켓 핸드쉐이크와 4way 핸드 쉐이크

- 4-way-handshake : 안전하게 연결을 종료할때 사용을 했고
- 웹소켓 핸드쉐이크 : http 기반의 연결을 요청을 하고 웹소켓 프로토콜로 데이터를 주고 받겠다. 이어간다.

- 3 way 핸드쉐이크 (http로 연결요청 1. 보낼게 2. 요청과 응답)
1. 클라이언트 -> 서버로 /SYN
2. 서버 -> 클라이언트 : SYN + ACK
3. 클라이언트 -> ACK

- 웹소켓 핸드쉐이크s
1. 설정되어 있는 TCP 연결에서 http 기반의 웹소켓 핸드 쉐이크

```js
// soket.io 
// ws

```

