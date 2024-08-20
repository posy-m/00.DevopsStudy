// rafce
import React from 'react'
import { useState, useMemo } from 'react'

const Momo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setState에서 제공된 상태변수를 변경할 수 있는 메서드는
    // 매개변수의 타입을 검사한다.
    // 함수의 타입이 들어오면 매개변수로 이전의 앖을 할당해준다.
    // 함수면 반환하는 값을 저장
    setCount((e) => e + 1);
    //  === setCount(count +1);
  }

  const [immutableCount, setImmutableCount] = useState(0);
  //동일한 연산을 하지 않게 하기 위해서 메모를 사용하자
  // 함수를 하나 만들어보자
  // 메모는 두번째 매개변수로 전달한 값을 주시하다가 이 값이 변경되면 새로운 연산을 처리하는 것이라고 받음
  const value = useMemo(() => {
    console.log("메모 호출 됨?");
    // return immutableCount
    return <h1>value: {immutableCount}</h1>;
  }, [count]);

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increment}>증가</button>
      {/* <h1>value: {value}</h1> */}
      {value}
    </div>
  )
}

export default Momo
