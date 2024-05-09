# 타입 스크립트

### jsvascript에서 타입 검사가 추가된 확장 언어라고 보시면 된다.

```js
const a = 1;
const b = "2";
const c = [];
```

## typescript는 javascript의 슈퍼셋 (상위 확장)

> typescript는 javascript와 다르게 런타임 환경이 존재하지 않는다.
> 컴파일러가 존재(컴파일러 언어)
> typescript -> javascript

> 코드 실행은 자바스크립트로
> 자바스크립트로 코드를 작성하면 싱행중에 오류를 발견할 수 있고
> 안정적인 코드를 작성하는데 시간이 오래 걸릴 수 있다.
> 우리가 코드를 의도에 맞게 작성하는 시간이 오래 걸림
> 코드 작성단계에서 의도에 맞지 않게 코드를 작성한 경우에도 오류를 표시

## typescript를 쓰면 javascript를 작업할때 보다 개발에서 생기는 이슈 에러를 사전에 방지할 수 있다.

> javascript 코드의 품질과 개발의 생산성을 좋게 만들어준다.

```js
const click = () => {
  console.log(type);
};
click(); //오류
```

```ts
const click = () => {
  console.log(type); //error
};
click();
```

### 타입 스크립트 문법

```js
let num = 20;
const str = "savascript";
const nan = NaN;
const _null = null;
const bool = true;
const _undefined = undefined;

const obj = {};
const arr = [];

const fn = (a: any) => {
  console.log(a);
};
```

왜 이렇게 쓰는지? 오류를 방지하기 위해서
[예약어] [변수명] : [타입명] = [초기값]
타입 스크립트에게 타입을 알려줘서 추론해라
any 타입 뭐든 가능한 타입

```ts
let num: number = 20;
const str: string = "typescript";
const nan: number = NaN;
const _null: null = null;
const bool: boolean = true;
const _undefined: undefined = undefined;

const obj: object = {};
const arr: string[] = ["1", "2", "3"];

const fn = (a : number, b : number) => {
  console.log(a);
}

// any : 어떤 타입이든 할당할 수 있다. 되도록 남발하지 말자.
//코드의 안정선을 향상 시키기 위해서인데 보장이 되지 않는다.
const _any : any == "123";
// any 사용해야할 경우가 가끔 생기는데
// 패키지를 설치 받으면 다른사람이 작성한 코드를 받는닥 얘기
// 그 패키지가 타입 지정이 되어 있지 않다. 패키지의 타입도 설치를 받아야하는데
// 타입을 지정해 줄수가 없다. any를 사용하자. 그사람 패키지를 우리가 없데이트 할건 아니기 때문에

// 어떤 타입이든 할당할 수 있는 타입

// unknown
// 안정성을 좀더 보장
// unknown 어떤 타입이든 할당은 가능하지만 조건문 검사하고 나한테 알려주고 써.
const _unknown : unknown = "";
if(typeof _unknown === "string") //_unknown이 string이냐 물어보는것.
console.log(_unknown.length); //길이 확인
```

### 타입스크립트를 자바스크립트로 변환

### typescrit의 json도 다로 설치를 해서 컴파일 옵션을 설정한다.

## typescript 설치

```sh
# 설치
npm install typescript
npm i typescript
# 제거
npm uninstall typescript

# 설치가 잘 되어 있는지 버전을 확인
# npx 실행할때 사용
# tsc 타입 스크립트 명령어
npx tsc --version # 설치가 됐는지 확인하기 위해 찍음
```

### tsc 컴파일 진행

### tsconfig.jsaon

> 컴파일을 진행할때 검사의 속성이나 파일의 경로 속성을 정의하는 json파일

```sh
npx tsc --init
```

### tsconfig.json 설정

- "include": 가져와서 컴파일을 진행할 폴더 지정
- "exclude" : 제외할 폴더 지정 기본값으로 node_modules은 지정되어 있다.

  compoilerOption 속성에 포함

- "target" : 변환파일의 es 버전 ES5로 만들거냐? Es6로 만들거냐?
- "outDir" : 변환된 파일을 내보낼 경로를 지정
<!-- ./ 현재경로 폴더를 찾는데 this가 없으면 this라는 폴더를 만들어서 변환된 파일을 넣어줘 -->

### 컴파일

```sh
# 컴파일 진행
npx tsc 을하면 dist폴더를 만들 수 있음

```
