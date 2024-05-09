// const num : string = "20";

// const fn = (a : string, b : number) => {
//   console.log(a + b);
// }
  
//   fn("1", 2) // 컴파일 단계에서 오류 발생 javascript 변환단계에서 오류를 발생 시킨다.
  //javascript 런타임 단계에서 오류가 발생하지 않는다.

  const num1 : any = "";

  console.log(num1);

  const num2 : unknown = "123";

  if(typeof num2 === "string")
  console.log(num2.length);