"use client"

import { useAtom } from 'jotai';
import Image from "next/image";
import { countAtom } from './state/countAtom';
import { useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  useEffect(() => {
    console.log(count);

  }, [count])

  return (
    <div className="">
      {/* 이미지 컴포넌트는 width랑 heigth 꼭 써주기 */}
      {/* <Image src="/next.jpeg" width={100} height={100} blurDataURL='/next.jpeg' placeholder='blur' layout='responsive' alt="" /> */}
      {/* <img src="/next.jpeg" alt="" /> */}
      <div>{count}</div>
      <button onClick={() => setCount((prve) => prve + 1)}>증가</button>
    </div>
  );
}
