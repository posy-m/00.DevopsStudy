import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./main.css"

const Main = () => {
  const navigate = useNavigate();
  // useNavigate : 반환 데이터 타입 => 함수
  // useNavigate 페이지 이동을 시켜주는 함수가 할당

  const handler = () => {
    // location.href ="" 이거 안쓸거임
    navigate("/boomGame")
  }

  return (
    <div>
      메인 페이지 <br />
      {/* a태그로 이동하면 안됨 */}
      <a href="/boomGame">안녕</a> <br />
      <Link to={'/boomGame'}>boom 페이지로 이동</Link> <br />
      <button onClick={handler}>boom 페이지로 이동</button> <br />

      <Link to={'/rookGame'}>rock page move</Link>
    </div>
  )
}

export default Main

// boom 게임을 화살표 함수 컴포넌트로 만들고
// 메인페이지, boom 페이지, 하나 게임 오버 페이지
// 메인페이지에서 게임시작을 누르면 3, 2, 1 게임페이지로 전환
// 플레이를 하다가 게임오버 페이지 점수를 보여줄 것.
// 재시작버튼 누르면 다시 메인 페이지
