import React, { useContext } from 'react'
import { Store } from './Context'

const C = () => {
  // 전역상태를 참조
  const { login, setLogin } = useContext(Store);
  return (
    <div>
      {login ? "로그인 됐음" : "로그인 안됨"}
    </div>
  )
}

export default C
