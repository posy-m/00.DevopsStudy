// interface
// 유저가 전달할 데이터 객체 구조 정의
interface IUserParams{
  email : string;
  password : string;
}

// 유저가 로그인을 요청하고 응답을 받았을때
// athectcationReponse
// 유니온 or 타입을 두가지 이상 포함 시킬 수 있다.
interface IAuthRes {
  success : boolean;
  // message 키가 있어도 되고 없어도 된다.
  message? : string | Error;
}

// 검증 객체 구조 정의
interface IAuth {
  // 로그인 검증을 하는 함수를 공통으로 주고
  authenticate(credentials : IUserParams) : IAuthRes;
  //뜻 credentials : 신임장
}

// 전략 패턴 객체 구조 정의
interface IStrategy {
  // key 문자열로 작성
  // 포함시킬 기능이 생길때마다 키를 추가하면서 값을 넣어줄것. -> 유연하게 하려고
  // 동적으로 키값을 줘서 인스턴스 객체를 줄려고 ( 고정되는 키값이 없기 때문에)
  // 동적으로 키값을 할당하기 위해서 
  [key : string] : IAuth;
}

/////////////////////
// Strategy
/////////////////////

// 서비스에서 실행할 로직을 담당할 객체 구조 정의
class Strategy {
  // private : 클래스 내부에서 접근이 가능함 2024.04.26 에 자세히 적혀있음.
  private strategy : IStrategy = {};

  // 서비스 로직을 객체에 추가할 함수
  // 의존성 주입을 할 부분
  setStrategy(key : string, authenticate : IAuth) {
    // key 값을 받아서 key 추가하면서 로직 추가
    this.strategy[key] = authenticate;
  }
  
  login(type : string, credentials : IUserParams) : IAuthRes {
    // type === "kakao" credentials === {email :"", password : ""}
    const result = this.strategy[type].authenticate(credentials);
    return result;
  }
}


/////////////////////
// auth 로직들
/////////////////////

// 이메일 로그인 검증 클래스 정의
class EmailAuth implements IAuth {
  authenticate(credentials: IUserParams): IAuthRes {
    //crdentials === 유저가 입력한 값
    //조건문을 crdentials 값으로 작성
    // 이메일 로직 부분 작성 _ 백엔드 들어가면 할 거임
    console.log("이메일 로그인 성공")
    //성공 객체 반환
    return {success : true, message : "이메일 로그인 성공"};
  }
}

//구글 로그인 검증 클래스 정의
class GoogleAuth implements IAuth {
  authenticate(credentials: IUserParams): IAuthRes {
    // 구글 로그인 로직 부분 작성
    console.log("google 로그인 실패")
    // Error : 에러 객체를 만들어 준다. _구문을 추가할 수 있다.
    //생성자에서 매개변수로 전달한 문자열을 가지고 객체를 생성한다.
    return { success : false, message: new Error("구글 로그인에서 에러 발생")}
  }
}

// 카카오 로그인 검증 클래스 정의
class KakaoAuth implements IAuth {
  authenticate(credentials: IUserParams): IAuthRes {
    //카카오 로그인 로직 부분 작성
    console.log("카카오 로그인 성공")
    return{success:true};
  }
}

/////////////////////
// service
/////////////////////

class UserService {
  // 서비스들 기능들을 구조로 정의할 클래스
  // 이렇게 하면 수할 수 없는 객체이다.
  // readonly 값을 읽기만 가능하고 수정할 수 없다.
  // 생성자 매개변수로 private readonly 매개변수 명까지 넣고 생성자를 호출하게 되면
  // 키값은 strategy전달할 매개변수로 객체에 키가 추가 된다. 
  constructor(private readonly strategy : Strategy) {}

  login(type : string, credentials : IUserParams) :IAuthRes {
    const result = this.strategy.login(type, credentials);
    return result;
  }
}

/////////////////////
// controller
/////////////////////

// 유저 서비스 로직 실행 클래스 정의 
class UserController {
  constructor (private readonly userService : UserService) {}

  signin (type : string) {
    const loginParams : IUserParams = {
      email : "sooon@naver.com",
      password : "1234",
    }
    const result = this.userService.login(type, loginParams);
    console.log(result); 
  }
}

// 전략 패턴 객체 생성
const strategy = new Strategy();
// {strategy :{}, Strategy(), login()}

// 로그인 로직을 추가해주자
strategy.setStrategy("email", new EmailAuth()); 
//{strategy : {"email" : EmailAuth{authenticate()}}, setStrategy(), login()}

//카카오 로그인 로직 추가
strategy.setStrategy("kakao", new KakaoAuth()); 
//{strategy : {"Kakao" : kakaoAuth{authenticate()},"email" : EmailAuth {authenticate}}, setStrategy(), login()}


//구글 로그인 로직 추가
strategy.setStrategy("google", new GoogleAuth()); 
// {strategy : {"google" : GoogleAuth{authenticate ()}, "kakao' : Kakaouth {authenticate () }, "email" : EmailAuth {authenticate () }} setStrategy (), login()}


//새로운 로그인 로직 하나 추가된다.
// 새로운 로직이 추가되면 기존의 코드는 수정할 필요가 없이 새로운 클래스 하나 만들어 주면 된다.
//strategy.setStrategy("facebook", new GoogleAuth());

// 완성된 전략 패턴의 객체를 UserService 객체에 전달해서 생성
const userService = new UserService(strategy);

//유저가 로그인 로직을 실행할 클래스 생성 userController
const userController = new UserController(userService);

//유저가 로그인을 시도 했다. 
userController.signin("kakao");

//중요하고 어려우어 이잉이

//고양이를 3마리 만들건데 
// 울음소리가 드린 고양이
//사람이 말을 걸면 고양이가 웁니다.
//야옹, 애옹, 때껄룩