# react recoil
> react 전역 상태 관리 라이브러리
> redux를 입문자가 사용하기 힘들어서 recoil의 인기가 많이 생겼다.
> 페이스북에서 20년도 라이브러리를 출시했다.

## redux
> 전역 상태를 다룰 때 flux 아키텍처 기반의 상태 관리 라이브러리
> flux 아키텍처 기반 : action -> dispatch -> reducer -> store
> 단반향의 데이터 흐름을 가지고 있다.
> react-redux도 라이브러리가 따로 있고 

## recoil
> react에 맞게 가볍게 설계된 상태 관리 라이브러리 hook을 알고 있는 사람들은 다루기 쉽게 설계 (react의 컴포넌트에 맞게 설계 된 라이브러리)
> 비동기 상태 관리가 쉽게 구현이 가능하다.

### recoil의 장점
- react를 개발한 메타에서 만든 라이브러리 
- hook을 사용하는 개발자는 진입이 쉽다.

### redux의 형태
> 스토어 생성 -> 리듀서 생성 -> 액션 제공-> 디스패치 호출
> 하나의 상태를 관리해도 많은 코드의양이 필요했다. (보일러플레이트 코드가 길어지는 단점)

### recoil의 탄생
> recoil : 스토어 생성 -> 상태변경
- redux의 내용을 단기간에 배우기엔 복잡도가 높아서 어려움이 있었고 사용의 만족도도 떨어졌다.
- hook을 경험해본 react 개발자는 전역상태 state의 개념만 가지고 사용을 할 수 있었다.
- hook의 메서드를 사용해서 상태관리를 간결하고 직관적인 코드로 작성할 수 있다.
- 별도의 라이브러리를 사용해서 미들웨어를 추가해서 비동기처리를 하지 않아도 된다.

```sh
npm i recoil
```

## recoil의 사용
- recoil의 루트를 설정 부모 컴포넌트를 recoilroot로 주입

``` js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

reportWebVitals();

```

## recoil 스토어 생성
- Atom은 state 루트 컴포넌트로 지정된 컴포넌트들이 전역 상태를 참조하고 업데이트 할 수 있다.
- redux에서 store와 유사한 개념의 상태관리 (Atom이 스토어를 만들어줌)
```js
import {atom} from 'recoil'
// 스토어 생성
export const countState = atom({
  key : 'count', // 고유 식별자
  default : { // default 상태의 초기값
    num : 0,
    name : 'pageCount'
  }
})
```

## recoil 상태 업데이트
```js
import{useRecoilState} from "recoil"
// useState와 동일하게 value와 setState를 둘다 제공
// 반환 값  : 배열
import{ countState} from './countState'

export const Count = () =>{
  const [count, setCount] = useRecoilState(countState);

const increment =() =>{
  setCount({...count, num : count.num + 1})
}
const decrement =() =>{
  setCount({...count, num : count.num - 1})
}

  return <>
    count : {count.num}
    <button onClick={increment}>증가</button>
    <button onClick={decrement}>감소</button>
  </>
}
```

### useRecoilState
> value와 setState가 둘다 필요한 경우

### useRecoilValue
> value만 반환해주는 hook

### useSetRecoilState
> setState 메서드만 반환해주는 hook

### useResetRecoilState
> atom에 값을 초기화 하고 싶을 경우
> 설문조사 입력 팝업을 닫았을때 상태를 초기화 해주고 싶을 경우

## recoil Selector
> recoil에서 파생된 상태의 계산을 위해서 사용
> 하나 이상의 Atom의 값을 가지고 새로운 값을 연산해서 전역상태를 호출할때 사용

- 페이지네이션
```js

import {seletor} from 'recoil'

export const countState = atom({
  key : 'count', // 고유 식별자
  default : { // default 상태의 초기값
    num : 0,
    name : 'pageCount'
  }
})
  export const pagination = seletor({
    key: 'pagination', // 고유 식별자 이름 겹치면 안됨

    // 상태의 값을 참조할때
    get: async ({get}) => {
      // 다른 atom의 있는 상태를 호출 할때 사용한다. 
      // 제공받는 get 메서드로 atom의 스토어의 값을 참조할 수 있다.
      const {name, num } = get(countState);
      const {data} = await axios.get(`/post/list/${num}`)
      return data.list;
    },
    set : ({set}, newState) => {
      // newState는 새로 변경할 상태
      // set은 전상태를 업데이트하는 메서드

      // 병경해줄 상태를 전달 해줄 수 있다.
      set(countState, newState)
    }

  })
```

## useRecoilStateLoadable
- 반환받은 배열의 인자 중 첫번째가 값 (호출하는 값)
- 두번째가 요청하는 인자값
- 비동기 처리가 되는 코드에서 loadable 객체를 반환 [상태, 값] 성공, 로딩 , 실패

## react의 비동기 처리
```js
import {Suspense} from 'react'
import {login} from './Login'
// Suspense : 컴포넌트에서 비동기 처리를 해서 로딩중일때 보여줄 화면을 구성할 수 있다.
// fallback의 props 값으로 보여줄 컴포넌트의 내용을 전달

const Suspencse = async({fallback, children}) =>{
  await <Login />
  if("loading") return fallback
  if("hasValue") return children
}
const App = () => {
  <RecoilRoot>
    <Suspense fallback={<>로딩중 ...</>}>
      자식으로 전달한 컴포넌트의 비동기 코드가 종료되면 Login컴포넌트를 보여준다.
      <Login />
    </Suspense>
  </RecoilRoot>
}
```

## recoil의 Loadable
```js
export const LoginInput = atom( {
  key: "loginInput",
  default : {
    uid: "",
    upw : ""
  }
})

export const Login = selector({
  key : 'login',
  get : async ({get}) => {
    const {uid, upw} = get(LoginInput)
    const {data} = await axios.post("/login" {uid, upw})
    return data;
  },
})
```

### Login Components

```js
import {useRecoilValueLoadable} from 'recoil'
import {Login} from './recoil/Login'

  // 로그인 상태 컴포넌트
  const UserLoginState= () =>{
    const loadableValue = useRecoilValueLoadable(Login)
    // loadableValuse 값을 참조
    // Loadable 객체가 반환
    // loadableValue[0].state === 지금 어떤 상태를 가지고 있는지
    // hasValue, loading, hasError
    if(loadableValue[0].state === "hasValue"){
      return <>성공</>
    } else if (loadableValue[0].state === "loading"){
      return <>로딩</>
    } else if (loadableValue[0].state === "hasError"){
      return <>에러</>
    }
  }
const App = () =>{
  return <>
  <UserLoginState />
  </>
}
```