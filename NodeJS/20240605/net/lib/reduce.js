// reduce
let a = [1, 2, 3, 4, 5, 6];
// 초기값을 지정할 수 있고 없어도 된다. 없으면 undefined
// [] 또는 "" 도 사용 가능                    0
// retrun을 하면  acc = 1, 없으면 터짐        1
// acc =2                                 2
// acc : 초기값을 할당할 매개 변수
// content: 순회하는 요소값 -> 1,2,3,4,5,6
const result = a.reduce((acc, content) => {
  acc.push(content + 1)
  return acc
}, [])

console.log(result);



// reduce은 배열에만 사용할 수 있고 문자열이나 객체로 사용하려면 변경해줘야함
// let b = [1, 2, 3, 4, 5, 6];

// const c = b.reduce((acc, content) => {
//   acc += content
//   return acc
// }, "")

// console.log(c);


//객체로 받기
// return이 없으면 안됨 다시 할당해준다는 뜻이니까
let b = [1, 2, 3, 4, 5, 6];

const c = b.reduce((acc, content, index) => {
  acc[index] = content
  return acc
}, {})

console.log(c);

