import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getPages } from '../api'
import PageInfinite from './PageInfinite'

// 스크롤 내렸을때 반응
// hooks폴더에 useScrollEnd.jsx 내용
const useScrollEnd = (onScrollToEnd) => {
  useEffect(() => {
    const handlerScroll = () => {
      console.log("된다. ")
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // console.log("window", window.innerHeight + window.scrollY);
        // console.log("body.offsetHeight", document.body.offsetHeight)
        onScrollToEnd()

      }
    }
    window.addEventListener("scroll", handlerScroll)

    return () => {
      window.removeEventListener('scroll', handlerScroll)

    }
  }, [onScrollToEnd])

}

const Scroll = () => {

  // 넣어봐
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



  console.log(window.document.body.offsetHeight)


  useScrollEnd(fetchNextPage, isFetchingNextPage, data)

  return (
    <div className='scroll-content'>
      {data.pages.map((page, i) =>
        <div className='a' key={`page${i}`}>
          {page.map((el, i) => <div key={`content${i}`}>번호: {el.id} 제목: {el.title} </div>)}
        </div>
      )}
    </div>
  )
}

export default Scroll
