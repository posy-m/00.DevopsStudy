### 터미널

### npm

### 타입스크립트

## CLI

> command line interface

> 콘솔 창을 통해서 프로그램을 실행하는 환경

## GUI, CLI

GUI : 그래픽 유저 인터페이스 볼 수 있는 아이콘 등의 UI가 있는것.
CLI : 명령줄 인터페이스 텍스트 기반의 인터페이스

> 터미널을 통해 컴퓨터가 상호작용을 하는 방식
> 유저는 문자열의 형태로 작성해서 컴퓨터에게 출력을 문자열로 받는다.

## 터미널은 os 따라 작성을 하고

> 커널이 실행 시킨다.

## 쉘

> 터미널을 사용하기 위해 커보드 입력 같은 병력을 실행하고
> 폴더와 파일 등을 관리한다.
> 명령을 입력하면 커널이 읽을 수 있는 이진코드로 변환

## 커널

> 우리가 컴퓨터를 켜면 메모리에 항상 올라가 있는 운영체제
> 하드웨어와 프로그램 사이에서 인터페이스를 제공하는 역할
> 컴퓨터의 자원들을 관리하는 역할을 해준다.

### 터미널 환경에서 폴더 경로 이동

`sh
cd : 하위 폴더 경로로 이동
cd.. : 상위 폴더 경로로 이동
`

### npm

> node의 패키지 매니저
> 다른 개발자들이 만든 코드를 폴더로 만들어서
> 배포를 한 파일을 다른 개발자들이 받아서 이어서 작업할 수 있게
> 나이게 많은 프로그램들을 다시 만들 필요 없이 가져와서 사용하자

## npm이란

> 명령 줄 틀라이언트 공개 방식들과 지불 장식들의 패키지를 설치할 수 있다.
> 개발자들이 자신이 작성한 모듈 등등을 공유할 수 있는 저장소를 npm을 활용하여 쉽게 설치 받을 수 있다.
> 오픈소스 생태계를 구축하기 위해서 개발 생산성을 향상하기 위해

### npm으로 설치한 패키디들과 우리의 현재 패키지의 내용을 작성할 json

```sh
npm init
# package.json 초기화
#바로 초기화
npm init -y

# 패키지를 설치하는 명령어
npm install [패키지명]
npm i [패키지명]

# 개발환경에서 설치할 건지
npm install --save--dev[패키지명]
npm i -D[패키지명]

# 전역으로 패키지 설치
npm i -g[패키지명]

# npm 패키지 설치 package.json에 있는 내용을 가지고
npm i
```

### package.json

> 우리가 작업하는 패지지의 정보와 설치한 라이브러리의 이름과 정보를 가지고 있다.
> npm으로 명령어를 실행하는 경우 읽어서 실행하는 json 파일

```json
typescript 패키지를 설치한 내용을 기록
이 패키지에서 무엇 무엇을 사용했는지
'의존성 모듈'
"dependencies" : {
  "typescript" : "^5.4.5"
}
```