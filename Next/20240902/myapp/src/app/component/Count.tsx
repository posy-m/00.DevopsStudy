"use client"

import { useState } from 'react'


const Count = () => {
  const [count, setCount] = useState(0)

  // HTML 완성할때 한번 로직이 호출되고 서버에서 한번 찍히고
  // 브라우저에서도 동작한다.
  console.log(1234);
  // "use client"없으면
  // 만약에 서버 컴포넌트에서 사용하는 변수를 선언하면 브라우저에 노출될 일은 없다.
  const handlerIncrement = () => { setCount(count + 1) }
  const handlerDecrement = () => { setCount(count - 1) }

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handlerIncrement}>증가</button>
      <button onClick={handlerDecrement}>감소</button>
    </div>
  )
}

export default Count
