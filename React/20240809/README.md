# React란?

## 탄생 배경
> react는 프론트엔드 라이브러리
> 공식 홈페이지에서도 라이브러리라고 한다.


## 라이브러리 프레임워크의 차이
1. 프레임 워크
  - 폴더의 디렉터리 구성이 있다.
2. 라이브러리
  - 폴더의 디렉터리의 구성이 없다.

## 프론트엔드의 3대장
Angular, Vue(nuxt), React(next) 3대장
nuxt,next = 프레임워크

> SPA의 이전 세대
> 자바스크립트의 dom제어를 어떻게 편하(게 할 수 있을까?
> jquery를 사용하던 시대(코드가 간결하고 막쓰면 다 됨) (자바스크립트 모르는 사람도 제이쿼리를 외워서 씀)(퍼블리셔)
> $(".class").on("이벤트") === 제이쿼리 dom
> $("#class").hude()
> $("#class").show()
> 제이쿼리의 문제점 : 막쓰면 된다고 생각하기 때문에 자바스크립트를 모르고 사용하는 사람들이 발생, 제일 큰 문제점 가독성 다 떨어짐
                 최적화가 아예 안됨, 무거운 프로젝트가 탄생

> cdn 방식으로 불러움
> 2006년에 john Resig가 제이쿼리를 발표
> DOM 제어가 무척 쉬었다. 제이쿼리가 표준이라는 말이 나올정도 였음
> 크로스 브라우징
> 초기 시절에는 인기가 많았다

> SPA 싱글 페이지 어플리케이션 (Single Page Aplication)
> 웹페이지를 사용하는데 마치 앱을 상용하는 것 같은 사용감
> SPA의 초기 사례 Google의 gmail(인기가 만점)(웹페이지에서 앱처럼 동작)
> Backbone, AngularJS를 사용한 SPA 환경을 구축했고 DOM을 다루는 방식은 제이쿼리

> 따로 관리를 해줘야하니 불편해서 React가 탄생했을때
> React의 개념은 탄생 했을때 11년 이상은 가지고 놀 수 있는 기술이 될 것같다.
> React도 많은 플랫폼 중에 에어비앤비, 넷플릭스
> React는 많은 개발자들 사이에서 자연스럽게 생태계가 커지게 됨
> 제이쿼리의 dom제어를 사용할 필요가 없다.
> React의 가상돔을 사용해서 제어
> 부분 렌더링이 가능하다.

# React
- SPA
- 보여주는 하나의 페이지를 중심으로 view가 중심인 어플리케이션
- react router dom 페이지가 이동 한 것 같은 느낌을 줄 수 있다.

## 특징
1. 데이터의 흐름 
  - A(부모) -> B(자식)에게만 데이터를 줄 수 있다. (트리형태 _ 밑으로만 데이터를 줄 수 있다. / 단방향 데이터의 흐름)
  - 구상을 해야함
2. 컴포넌트의 구조
3. 가상돔
4. props와 state
5. JSX


A(부모) -> B(자식)
> 데이터의 흐름 : 리액트는 단방향 데이터의 흐름 vue angular는 양방향 데이터의 바인딩을 가지고 있다. 
                개발하고 있는 프로젝트가 커질수록 데이터의 흐름을 유추하기가 힘들다. 그래서 리액트를 사용하면 데이터의 흐름을 단방향으로 쉽다.

> 컴포넌트와 컴포넌트의 구조 : 컴포넌트는 하나의 객체 페이지의 구성 요소의 하나의 UI 단위, UI 여러개로 나눠놓은 것.

> 가상돔 : 리액트의 가장 큰 장점
  - DOM은 HTML과 CSS의 내용을 트리구조를 가지고 있고
  - 브라우저는 DOM이 변경되면 화면을 다시 그린느데
  - DOM이 변경된 비용이 비싼게 아니고 변경이 되고 난뒤의 동작이 비싸다.
  - 페인팅을 할때 무겁다. CSS 살을 입힐때
  - 이 비싼 동작을 최소화 시켜준다. === 가상돔
  - DOMdl 1000번을 리렌더링을 해야하는 순간이 탄생할 수 있다.
  - 1번으로 줄여서 렌더링 해준다.
  - 작업을 모아서 처리를 한번에 해준다.

> props
  - 목적 : 데이터 전달
  - 함수의 변수처럼 사용하는 느낌
  - 자식이 부모에서 전달 받을 수 있는 값
  - 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달 하는것.
  - props를 전달할때  `props 드리링`을 최대한 피해서 잘 작성해야한다.
  ```js
    function a (props) {
      console.log(props)
    }
  ```


> state
  - 목적 : 관리할 데이터를 유지
  - 상태를 관리하기 위한 값 
  - UI를 나눠놓는 단위 객체 컴포넌트의 내부에 값을 선언하고 페이지가 동작하는 동안 유지되고 변경될 데이터 
  - 예) 사용자가 입력값을 입력하면 가지고 있다가 사용할때 사용되는 변수
  - 리액트는 상태값을 주시하고있다가 상태가 변경되면 반응한다.

5. JSX
  > javascipt XML 자바스크립트 내에서 thml과 유사한 코드를 작성할 수 있다.
  ```js
  const a = "<div>123</div>" === X 문자열
  // 컴포넌트
  cosnt a = () => {
      const buttonHandler = () =>{

      }
    return (
      <div>
        // 여기 부분이 바로 react의 컴포넌트에서 그려주는 UI 
      </div>
    )
  }
  // 코드를 그대로 실행 시키느냐 ? ㄴㄴ
  // 트랜스파일해서 변경된 파일을 실행해서 사용하는 것.
  // JSX => js === 자바스크립트로 변환된다.
  ```

  - react를 사용할때 사용할 새로운 문법
  - html 파일과 구문의 가독성ㅇ르 높이고 내용을 줄여서 사용할 수 있다.
  - `webpack이` jsx문법으로 작성한 파일을 js로 변환하고 번들링도 하기 위한 속성을 관리한다.
  - `webpack`이 중요, 모르면 react를 사용하지말라라는 말도 있을 정도
  - 몰라도 사용할수 있지만 알고 사용하면 좋음

  ```sh
  # 바로 사용 X
  # 보기만 할것.
  npx create-react-app [project 이름]
  cd myapp
  npm start
```
