# nextjs 비동기 처리
> 14 버전 기준으로 로딩관련 페이지 정리

```js
// async를 사용해서 비동기 서버 컴포넌트를 만들 수 있다.
export default function Home() {
  // 비동기 처리 로직이 작성되면 처리 이후에 페이지를 반환한다.
  // 대기되는 동안 로딩 화면을 보여줘야한다.
  return (
    <div className="">

    </div>
  );
}
```

```js
// 서버 컴포넌트 비동기 처리를 했을때 이전과 같은 로딩구현이 안됨
export default async function Home() {
  const { data } = await axios.get('http://127.0.0.1:4000');
  console.log(data);
  if (!data) return <>loading...</>
  return (
    <div className="">
      {data}
    </div>
  );
}
```
> 로딩을 다룰 수 있는 파일을 제공해준다. 컴포넌트를 작성 할 수 있게
> loading.tsx이름의 파일로 작성ㅇ르 하면 비동기 처리과정에서 이 컴포넌트를 노출시켜준다.
> loading.tsx이름은 고정 파일을 찾아서 파일에서 반환하는 페이지의 내용을
> 비동기 처리 과정에서 보여준다.

## nextjs server action
> nextjs의 요청 응답 처리
> nextjs의 server action을 사용하는 경우는 민감한 데이터를 처리할 경우 소켓 사용 X 
  ex) 소셜 로그인 같은건 serveraction에서 사용을 하는것이 좋다. 혹은 쿠키 관련 로직 처리
> 사용이 편하다. 코드의 복잡성이 상승할 수 있기 때문에 무분별하게 사용하면 안좋다.
> API 서버에 요청을 보내서 데이터 관련 로직을 처리할때 사용 소켓도 여기서 사용

- api 서버는 데이터를 비동기적으로 관리하는 것 백엔드의 구조를 분리한것.
- server action은 ssr 페이지 로드시 서버의 데이터에 따라서 처리를 해야하는 경우 렌더링 관련해서 유용하다.

> handlerForm을 작성해서 전달을 action={handlerForm}에 작성하게 되 API를 만들어준다.
> nextjs에서 api를 작성해준다. 
```js
export default async function Home() {

  const handlerForm = async () => {
    "use server"
    console.log("안녕");

  }
  return (
    <div className="">
      <form action={handlerForm}>
        <button>클릭</button>
      </form>
    </div>
  );
}

```

> server action을 사용할때 고유의 해시값을 만들어준다.
> 내부적으로 api를 구분할때 사용 됨
```js
  [Symbol(state)]: [
    {
      name: '$ACTION_ID_92ac5bf3ae45c73023850107f18074f40acae5d9',
      value: ''
    },
    { name: 'uid', value: '123' },
    { name: 'upw', value: '3232' }
  ]
  // "use server"를 작성하면 api를 만들어준다.
```

## tailwind
> 로그인 페이지 작성
> 런타임 환경이 X
> 기본 문법
> CLI로 라이브러리 설치해서 사용하는 방식
> POST CSS webpack등이 번들링 한다.(번들링과정에서 css를 컴파일 하는 것)
> CDN
