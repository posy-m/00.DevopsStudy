import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getPages } from '../api'
import { useEffect } from 'react'

const PageInfinite = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage, // 다음페이지 보내기위한 함수
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pagenation'],
    queryFn: getPages,
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return allPages.length < 5 ? allPages.length + 1 : undefined
    }
  })

  useEffect(() => {
    console.log(data);
  }, [data])

  return (<>
    {data.pages.map((page, i) =>
      <div key={`page${i}`}>
        {page.map((el, i) => <div key={`content${i}`}>번호: {el.id} 제목: {el.title} </div>)}
      </div>
    )}
    < div >
      <button onClick={fetchNextPage} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? "loading..." : hasNextPage ? "다음페이지" : "마지막 페이지 입니다."}
      </button>
    </ div >
  </>
  )
}

export default PageInfinite
