```sh
# package.json 초기화
npm init -y

#typescript 설치
npm i typescript

#tsconfig.json 초기화
npx tsc --init
```

# interface

> 객체의 구조를 정의하는 타입

```ts
interface IParson {
  name: string;
  age: number;
}

const parson : IParson = {
  name : "이순현",
  age : 20;
}
```
