// styled 이륾 변경 가능
import styled from "styled-components"

// styled.셍성할태그명`css의 구문`
// div 태그 생성
export const Body = styled.div`
  width: 100%;
  min-height : 500px;
  background-color: blue;
    // 자식또한 추가할 수 있다.
    // 태그이름을 줘서 스타일을 줄 수 있다.
    // Body안에 들어가 있는 form태그만 스타일 적용
    // &는 부모 & > 선택자 부모 바로 아래 있는 자식 요소
    // scss 에서도 볼 수 있다.
  & > form {
    display: block;
    width: 500px;
    min-height: 400px;
    margin: auto;
  }
`

export const Header = styled.div`
  width: 100%;
  min-height: 80px;
  // rebeccapurple가 있는 자리는 디폴드 값
  // background-color: ${props => props.color} 이렇게 주면  Main.jsx에 있는 color로 정해짐
  // ${props => props.color || 'rebeccapurple'}; 없으면 뒤에 있는 디폴드 값으로 해줘
  // 삼항 연산자 가능
  background-color: ${props => props.color || 'rebeccapurple'};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: red;
`