import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { getTodoList } from '../api/index'

const Todo = () => {
  const inputTag = useRef('')

  const { data, isLoading, isError, status, refetch } = useQuery({
    queryKey: ['todo'],
    queryFn: getTodoList, // api > index.js에 있는거 들고옴
    retry: 0,
    refetchOnWindowFocus: false
  })

  // useEffect(() => {
  //   console.log(status);
  // }, [status])

  const mutation = useMutation({
    mutationFn: async (data) => {
      return await axios.post('http://localhost:4000/todo', { ...data })
    },
    onMutate(data) { console.log(data); },
    onError(err) { console.log(err); },
    onSettled() { console.log("맨마지막임"); },
    onSuccess(data) {
      console.log(data);
      refetch()
    }

  })

  const handelrClick = () => {
    mutation.mutate({ test: inputTag.current.value })
  }

  if (isLoading) return <>loading...</>
  if (isError) return <>에러 발생.....</>


  //key={"todo" + index} key값을 줘야하는 이유는
  // 리액트가 리랜더링을 감지할때 keyr값을 판단을 해서 그리기 때문데 key값이 없으면
  // 자식으로 컴포넌트를 동적으로 생성하는 경우에 리랜더링이 되지 않는 문제가 발생할 수 있다.
  return (
    <div>
      <input type="text" ref={inputTag} placeholder='일단 모르겟다.' />
      <button onClick={handelrClick}>클릭</button>
      {data.map((el, index) => <div key={"todo" + index}>{el.id} : {el.name}</div>)}
    </div>
  )
}

export default Todo
