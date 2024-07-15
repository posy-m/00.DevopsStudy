# 에러가 발생하면 로그 꼭 확인

# nestjs, guard, interceptor, meddleware

> 클라이언트 > 미들웨어 > 가드 > 인터셉터 > 파이프 > 컨트롤러 > 응답

## guard
> 가드가 하는 역할은 인증 권한 부여의 로직을 처리할때
> 컨트롤러의 로직을 실행하기 전에 

1. 요청의 유효성 검사
2. 사용자의 인증 정보를 확인
3. 컨트롤러의 로직의 접근 제어

```ts
// CanActivate : 가드를 만들때 형태를 상속 받을  interface
// canActivate
class UserTokenGuard implements CanActivate {
  // ExcutionContext 요청에 대한 내용을 어떻게 받을지 메서드를 통해서 원하는 형태를 받을 수 있다. http 요청의 내용을 받고싶다. rcp 원격 프로시저 호출할때, 웹소켓 요청 ws
  // rpc : http랑 똑같다..?일반요청이랑.. 같다..? 서버에 있는 내용을 호출, 실행 다 됐는지..보고..? 서버의 로직을 실행하는게 목적

  canActivate(context : ExcutionContext) {
    // http 요청의 내용을 가지고 오고 싶어 
    const req = context.switchToHttp().getRequest();

  //유저가 없으면 에러를 발생시켜
    if(!req.user){
      throw new UnauthorizedException(
        '토큰이 없어',
      )
    }
  return true;
  }
}

```sh
nest new [폴더명]

nest g res
auth

npm i @nestjs/jwt
```

## 인터셉터
> 요청과 응답의 내용을 받아올 수 있다.
> 목적 : 로깅이나 캐싱등의 작업에 사용할 수 있다.

1. 요청 메시지의 로직을 삽입할 수 있다.
2. 응답 메시지의 내용읠 수정할 수 있다.
3. 메서드가 실행된 시간을 로깅할 수 있다. 어떤 메서드 실행인지도

## 미들웨어
> 말 그대로 요청과 응답간의 처리할 로직
