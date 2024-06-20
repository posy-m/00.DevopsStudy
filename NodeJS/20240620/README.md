# CORS(cross origin resourse shring)
> 웹 브라우저의 보안 기능
> 서로 다른 도메인, 프로토콜, 포트 등 간의 데이터를 공유하는 것을 제어한다.

## 웹 브라우저 보안 정책 (same-roigin poliecy)
> 요청을 보낼때 헤더내용에 출처가 있는데 이 출처가 같은 경우 허용하겠다.

## CORS 구조
> 서버가 http 헤더를 사용해서 브라우저에게 특정 출처를 요청 메세지로 허용할지 여부를 알려준다.
> 두가지 유형이 있는데 CORS의 단순 요청, 프리플라이트 요청

### 단순 요청 
> 요청 메서드가 get, post 등 중의 하나이면

### 프리플라이트 요청 (커스터 헤더)
> 요청 메서드가 get, post가 아닌 이외의 모든 내용
> put, delete
> 브라우저가 실제 요청을 보내기 전에 메서드로 프리플라이트 요청을 한번 보낸다.
> 응답 헤더에는 허용할 메서드와 헤더, 출처를 보내준다.
> 응답 내용을 받고 허용 되지 않는 메서드는 브라우저는 요청을 끝낸다.
> 서버는 요청을 처리해주고 응답을 다시 보내준다.

## CORS 헤더 
1. origin : 클라이언트의 요청의 출처
2. Access-Control-Allow-Origin : 서버 응답에서 허용할 출처 (중요)
3. Access-Control-Allow-Methods : 허용할 http 메서드 (중요)
4. Access-Control-Allow-Headers : 허용할 요청 헤더
5. Access-Control-Allow-Credentials : 자격증명 쿠키나 세션 등등을 포함해서 요청할 수 있게 허용 (중요)
6. Access-Control-Max-Age : 요청결과를 캐시하는 시간(초)

## CORS 문법
```js 
npm i cors;

app.use(cors()); // 메서드의 반환값은 핸들러(handler 함수) => 미들웨어의 역할을 하는 함수
// 모든 출처를 허용하겠다. Access-Control-Allow-Origin :*

app.use(cors({
  origin : "http://domain.com" , //"허용할 출처(도메인)" , []의 형태로 여려개도 가능하다. ["http://domain.com", "http://localhost:3000"]
  methods : ["GET","POST","PUT", "DELETE"], // 허용할 메서드
  credemntials : true // 자격 증명 허용 (쿠키, 세션)등을 허용할거냐? //안주면 쿠키랑 세션을 용청과 응답을 주지 않는다.

}))
Access-Control-Allow-Origin // 출처 내용에 헤더에 담김
Access-Control-Allow-Methods
Access-Control-Allow-Credentials
```