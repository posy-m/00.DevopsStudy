import "reflect-metadata";

// exports.controller =funcuton() {} 이렇게 내보냈지만. export funcrion Controller() : {} 이렇게 내보냄 es6로 함
// ClassDecorator: 클래스 : 클래스한테 줄수 있는 데코레이터 
//데코레이터 종류 공부
// 컨트롤러 클래스에게 줄거야.
export function Controller(basePath: string): ClassDecorator {
  return (target: Function) => {
    //basePath 이름으로 메타데이터 정의
    // basePath 값을 전달하고
    // target 함수
    Reflect.defineMetadata("basePath", basePath, target);
  }
}

// MethodDecorator: 메서드 데코레이터
export function Get(path: string): MethodDecorator {
  return (target, prop, script: any) => {
    // script.value : 메서드의 자체
    // script.writble : 메서드 변경 가능한지 여부

    // path를 메타데이터로 저장 // 메타데이터 : 어디에 있는지, 가리키는 주소
    Reflect.defineMetadata("path", path, script.value);
    // http 메서드를 get메서드 내용 저장
    Reflect.defineMetadata("method", "get", script.value);
  }
}