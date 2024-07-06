import express from "express"; //es6
// npm i express 깔고 
// npm i --save-dev i @types/express === npm i -D @types/express 타입스크립트에서 사용하려면 타입도 설치해줘야함
import { AppModule } from "./app/app.module"
import { Controller } from './common/decorator/controller.decorator'
import { createRouter } from "./common/utils/router.utils"


function bootstrap() {
  // 서버 객체 만들고
  const app: any = express();

  const appModule = new AppModule();

  const ModuleMetaData = Reflect.getMetadata("module", AppModule);

  ModuleMetaData.controllers.forEach((Controller: any) => {
    const router = createRouter(Controller, ModuleMetaData.providers);
    app.use("/", router)
  })

  app.listen(3000, () => {
    console.log("서버온!");

  })
}

bootstrap()