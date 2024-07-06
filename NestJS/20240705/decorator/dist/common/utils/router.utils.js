"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = createRouter;
const express_1 = require("express");
function createRouter(controller, provider) {
    // 라우터 객체
    const router = (0, express_1.Router)();
    // 컨트롤러에서 basePath 메타데이터를 가져오고
    const basePath = Reflect.getMetadata("basePath", controller);
    // 컨트롤러에 주입할 목록들 인스턴스 생성
    // provider 배열을 map을 호출하고
    // provider 클래스들을 인스턴스 생성해서
    // map 반환 데이터 배열을 스프레드 연산자로 값은 깊은 복사
    // controller 인스턴스 생성할때 매개변수로 전달
    const instance = new controller(...provider.map(provider => new provider()));
    // 컨트롤러 클래스로 생성한 인스턴스의 모든 메서드 가져오고(
    // getOwnPropertyNames : 모든 메서드의 이름을 순회하면서 가져온다.
    Object.getOwnPropertyNames(controller.prototype).forEach((key) => {
        // 현재 메서드의 핸들러를 가져온다.
        const routerHandler = controller.prototype[key];
        // 메서드 핸들러의 path로 메타데이터 가져오기
        const path = Reflect.getMetadata("path", routerHandler);
        // 메서드 핸들러의 http 메서드 가져오기
        const method = Reflect.getMetadata("method", routerHandler);
        if (path && method) {
            router[method](`${basePath}${path}`, (req, res) => {
                routerHandler.call(instance, req, res);
            });
        }
    });
    // 설정이 끝난걸 반환
    return router;
}
