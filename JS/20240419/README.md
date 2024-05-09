# 쿠키 세션 로컬스토리지

## 쿠키 문법

```js
// 쿠키 키=값; epires= '시간 '; path=/
// toUTCstring문자열로 표시
// 게시판 = "{}"; expires='date.toUTCstring()';path=/

function createCookie(name, value) {
  let date = new Date();
  // 밀리세컨트 시간으로 수정
  // getTime으로 밀리세컨드 시간을 가져와서 + 10000해서
  //현재시간에서 10초뒤의 시간
  date.setTime(date.getTime() + 10000);
  // 쿠키의 값을 생성
  document.cookie = `${name}=${value}; expires=${date.toUTCString()};path=/`;
}

// 주어진 이름의 쿠키를 반환하는데,
// 조건에 맞는 쿠키가 없다면 undefined를 반환합니다.
function getCookie(name) {
  // math === 정규식으로 문자열을 조회해서
  // 쿠키의 키값이 있는지
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  // 쿠키 값만 있으면 반환하겠다.
  // 쿠키의 키가 조회되면 값을 반환하겠다. 없으면 undefined
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/", // 경로 지정
    ...options, // 아규먼트로 옵션을 넘겨줬을경우 전개연산자로 추가 갱신
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString(); // 생 Date 객체라면 형식에 맞게 인코딩
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);
  //name = value; expires="시간";
  // for in 문
  //options 키를
  {
    path: "";
  }

  //optionKey = path
  //for in 객체의 키의 갯수만큼 반복하면서 키의 값을 선언 변수에 할당한다.
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    // name =value;expires="시간"; path
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      // 밸류가 없다면
      updatedCookie += "=" + optionValue;
      // name =value;expires="시간"; path=/
    }
  }

  document.cookie = updatedCookie; // 새로 갱신
}

//쿠키 생성
if (!document.cookie) {
  setCookie("expires", date.toUTCString());
  console.log("new Cookie created !");
}

// 쿠키 추가
setCookie("user", "John", { secure: true, "max-age": 3600 });

function deleteCookie(name) {
  // 해당 쿠키 요소만 삭제
  setCookie(name, "", {
    "max-age": -1,
  });
}
```

```js
//키와 값과 시간 경로
function createCookie(name, value, time) {
  // 썩은 쿠키는 유효하지 않다.
  // 시간을 넣지 않고 쿠키를 생성하면 세션 쿠키 지속 계속 되는 쿠키
  let date = new Date();
  // 밀리세컨드로 시간을 증가된 값으로 만들어서
  // 1000 === 1초

  // 1일 이후의 시간을 만들면
  // time === 일단위
  // time === 2면 2일
  date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);
  // toUTCString 표준시 시간 표시 메서드
  document.cookie =
    name + "=" + value + ";" + "expires=" + date.toUTCString() + ";" + "path=/";
}

document.cookie;
```

## 세션

### 문법

```js
// 세션에 값을 저장
// setItem
sessionStorage.setItml("토큰", "데이터의 내용"); // 세션의 값을 저장

// 세션의 값을 호출
// 토큰의 키가 있으면 데이터를 호출
sessionStorage.getItem("토큰");

// 세션 전체 삭제
sessionStorage.clear();

// 세션 하나 제거
sessionStorage.removeItem("토큰");
```

## 로컬 스토리지

### 문법

```js
// localStorage 큰 데이터를 저장할때 사용한다.
localStorage.setItem("토큰", "데이터의 내용");

localStorage.getItem("토큰");

localStorage.clear();

// 인덱스로 값을 호출
localStorage.key(0);
```
