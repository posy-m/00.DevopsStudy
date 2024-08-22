import { useState } from 'react';
import { useCallback } from 'react';

export const CallBack = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // 첫번째는 전달할 함수내용
  // 두번째는 주시할 값 이걸 안넣으면 재연산X
  // 카운트가 0이었던걸로 남겨짐
  const handlerIncrement = useCallback(() => {
    setCount(prve => prve + count2)
  }, []);
  const handlerIncrement2 = useCallback(() => {
    setCount2(prve => prve + 1)
  }, [count2])

  return <>
    <div>
      count : {count}
      <button onClick={handlerIncrement}>cuont 증가</button>
    </div>
    <div>
      count2: {count2}
      <button onClick={handlerIncrement2}>count2</button>
    </div>
  </>
  // useCallback 사용 예시
  // 무한 스크롤을 만들때
}