// import Memo from "./Memo/Momo"
import { Label } from './componets/atoms/Login/Label';
import Login from './componets/page/Login';
import { Context } from './Context/Context';
import Parent from './Memo/Parent';

function App() {
  return (
    <div className="App">
      {/* <Memo /> */}
      {/* <Parent></Parent> */}
      {/* <Context></Context>
      <Label>아이디를 입력하세요</Label>
      <Input></Input> */}
      <Login></Login>
    </div>
  );
}

export default App;

// 전역 상태를 관리해서 로그인 구현
// 회원가입도 전역상태를 업데이트 해서 구현 
// 스타일 컴포넌트를 사용해서 스타일 레이아웃

// 다한 사람은 from을 커스텀 훅으로 제작 (메모도사용)
