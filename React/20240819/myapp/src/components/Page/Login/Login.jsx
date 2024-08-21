import LoginForm from './LoginForm'


const Login = ({ loginInfo: { loginInfo, setLoginInfo } }) => {
  return (
    <LoginForm loginInfo={{ loginInfo, setLoginInfo }}>
      <div>
        {/* 여기는 cildren값으로 전달 */}
        여기는 로그인 화면
      </div>
    </LoginForm>
  )
}

export default Login; 