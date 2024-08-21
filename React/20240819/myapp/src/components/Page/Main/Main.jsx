
import { Header, Body, Footer } from './Main.styled';
import { Link } from 'react-router-dom'

const Main = () => {
  return (<>
    <Header ><div>안녕하세요. 메인입니다</div></Header>
    <Body>
      <Link to={'/login'}>로그인 페이지로 이동</Link>
    </Body>
    <Footer />
  </>)
}

export default Main;