import { memo } from 'react'

// memo 컴포넌트를 리렌더링을 할때 useMemo처럼
// 컴포넌트 내용을 메모이제이션
// memo의 첫번째 매개변수로 전달한 콜백함수의 매개변수로 props값을 받는다. 
// memo의 첫번째 매개변수로전달한 콜백함수의 매개변수로 전달받은 props 값이 바뀌면 리랜더링 혹은 자신의 상태변수가 바뀌면
const Child = memo(({ item }) => {
  console.log("자식 리렌더링");
  return (
    <div>
      자식
    </div>
  )
})

export default Child
