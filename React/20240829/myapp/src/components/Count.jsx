import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'

const Count = () => {
  const { data, refetch } = useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      return await axios.get('http://localhost:4000/count')
    },
    refetchOnMount: true, //모르고 사용했을때 터질경우가 있는게
    refetchOnWindowFocus: true,
    enabled: false,
    retry: 10,
    select: ({ data }) => {
      // console.log(data);
      return data + 1
    }
  })

  // post 용도로 사용을 하고 처리 이후에 get으로 재요청하는 로직은 사용해도 된다.
  const mutation = useMutation({
    mutationFn: async (data) => {// api의 비동기 함수
      return await axios.post('http://localhost:4000/count', { ...data })
    },
    onMutate(data) {
      // mutation 객체안에 함수를 호출해서 mutation을 호출하면
      // 매개변수로 전달한 내용을 확인 할 수 있다.
      console.log(data);
    },
    onError(err) { console.log(err); },
    onSettled() {
      //맨 마지막에 호출되는 내용
      console.log("123");
    },
    onSuccess: (data) => {
      console.log(data);
    }
  })



  useEffect(() => {
    console.log(data);
  }, [data])

  const handlerClick = () => {
    mutation.mutate({ incrementCount: 2 })
  }

  return (
    <div>
      {/* <button onClick={refetch}>클릭</button> */}
      <button onClick={handlerClick}>클릭</button>
    </div>
  )
}

export default Count
