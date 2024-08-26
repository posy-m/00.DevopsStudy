import React from 'react'
import { countState, paginationState } from './recoil/CountAtom'
import { useRecoilState } from 'recoil'

const Count = () => {
  const [count, setCount] = useRecoilState(countState);
  const [pagination, setpagination] = useRecoilState(paginationState);

  const increment = () => {
    setCount({ ...count, num: count.num + 1 })
  }
  const decrement = () => {
    setCount({ ...count, num: count.num - 1 })
  }

  const pageIncrement = () => {
    setpagination()
  }
  return <>
    count : {count.num}
    <button onClick={increment}>증가</button>
    <button onClick={decrement}>감소</button>
    페이지 : {pagination}
    <button onClick={pageIncrement}>페이지 증가</button>
  </>
}


export default Count
