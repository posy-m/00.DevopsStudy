// npm i reflect-metadata
// npm i -g typescript => 타입스크립트 전역설치
// npm i typescript
// npx tsc --init

// 데코리에터는 함수가 정의 되어 있고 런타임 환경에서 메타데이터로 가져와서 런타임 환경에서 호출
import 'reflect-metadata';

const decorator = (target: any, propert: string) => {
  console.log(propert); //start
  Reflect.defineMetadata("metadataKey", "metadataValue", target, propert);
  console.log(target); //{}
}


class App {
  @decorator
  start() {
    console.log("app");
  }
}

const temp = new App();
const metadata = Reflect.getMetadata("metadataKey", temp, "start");
console.log(metadata); //metadataValue
// console.log(temp.start()); //undefined

//런타임에서 데코레이터 함수와 같이 작성한 함수가 같이 호출된다.

