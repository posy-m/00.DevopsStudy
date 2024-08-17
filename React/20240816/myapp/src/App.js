import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Game from './page/Game'
import Boom from './page/Boom'
import Main from './page/Main'


const App = () => {

  // 생명주기
  // react hook : 기능을 가져온다.(자주 사용하는 유용한 기능들을 hook으로 만들어 뒀음) 접두사로 use가 꼭 붙는다(규칙)

  // 상태 변수는 값을 가지고 있는 변수가 하나 상태변수 전환 함수 두가지를 가지고 있어야한다.

  // useState의 반환 데이터 타입은 배열의 타입을 반환한다. (첫번째가 상태변수, 두번째가 setState 함수) 함수 호출할때 매개변수로 전달하는 값이 초기값
  // count === [value, setState]
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('')

  // const increment = () => {
  //   setCount(count + 1)
  // }

  // useEffect: 첫번째 매개변수로 함수를 전달, 두번째 매개변수로 배열의 요소로 주시할 값을 전달. 배열이 빈배열이면 mount의 생명주기 함수

  //마운트 속성을 가지고 있는 생명주기 메서드 : useEffect, 빈배열이여야지 마운트
  // useEffect(() => {
  //   console.log(count);
  // }, [])

  // 생명주기 update
  // useEffect(() => {
  //   // 업데이트만 사용하고 싶으면 if문으로 걸러줘야함
  //   // if (count === 0) return
  //   console.log("나는 마운트와 업데이트");
  //   console.log(count);
  //   // 
  // }, [count])

  // 생명주기 willUnmount
  // useEffect(() => {
  //   return () => {
  //     // 반환한 함수를 컴포넌트가 사라졌을때 호출
  //     console.log("컴포넌트가 사라졌다.");
  //   }
  // }, [])


  return (
    // <div>
    //   안녕하세용
    //   count : {count}
    //   <button onClick={increment}>증가</button>
    //   name: {name}
    //   <button onClick={() => { setName("newName") }}>이름 변경</button>
    // </div>
    <div>
      <div className="">gnb</div> {/* gnb footer */}
      <Routes>
        {/* <Route path='/' element={<Game />} /> */}
        <Route path='/' element={<Main />} />
        <Route path='/boomGame' element={<Boom />} />
        <Route path='/rookGame' element={<Game />} />
      </Routes>
      <div>footer</div>
    </div>
  )
}

export default App


// import React, { Component } from 'react'

// export default class App extends Component {
//   componentDidMount() {

//   }
//   componentDidUpdate() {

//   }
//   componentWillUnmount() {

//   }
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }


// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
