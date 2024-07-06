"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //es6
// npm i express 깔고 
// npm i --save-dev i @types/express === npm i -D @types/express 타입스크립트에서 사용하려면 타입도 설치해줘야함
const app_module_1 = require("./app/app.module");
const router_utils_1 = require("./common/utils/router.utils");
function bootstrap() {
    // 서버 객체 만들고
    const app = (0, express_1.default)();
    const appModule = new app_module_1.AppModule();
    const ModuleMetaData = Reflect.getMetadata("module", app_module_1.AppModule);
    ModuleMetaData.controllers.forEach((Controller) => {
        const router = (0, router_utils_1.createRouter)(Controller, ModuleMetaData.providers);
        app.use("/", router);
    });
    app.listen(3000, () => {
        console.log("서버온!");
    });
}
bootstrap();
