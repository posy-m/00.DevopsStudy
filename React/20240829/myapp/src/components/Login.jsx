import { useMutation, useQueries, useQuerie, useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUsers, sign } from '../api/index'
import { useInput } from '../hooks/useinput'

const Login = () => {
  // 회원가입
  const uidLoginInput = useInput()
  const upwLoginInput = useInput()
  // 로그인
  const uidInput = useInput();
  const upwInput = useInput();

  const handlerLogin = () => {

  }

  const handlerSignin = () => {
    mutation.mutate({ uid: uidLoginInput.value, upw: upwLoginInput.value })
  }

  const { data, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers
  })

  const mutation = useMutation({
    mutationFn: sign,
    onSuccess(data) {
      console.log(data);
      refetch()
    }
  })

  return (<>
    <div>회원가입한 계정들
      {data.map((el, index) => <div key={"user" + index}>아이디: {el.uid}</div>)}
    </div>
    <div>
      <label htmlFor="">아이디</label>
      <input type="text" {...uidLoginInput} />
      <label htmlFor="">비빌번호</label>
      <input type="text" {...upwLoginInput} />
      <button onClick={handlerSignin}>회원가입</button>
    </div>
    <div>
      <label htmlFor="">아이디</label>
      <input type="text" {...uidInput} />
      <label htmlFor="">비빌번호</label>
      <input type="text" {...upwInput} />
      <button onClick={handlerLogin}>로그인</button>
    </div>
  </>
  )
}

export default Login
