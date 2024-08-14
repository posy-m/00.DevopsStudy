import { Component } from 'react';
import Boom from '../components/Boom';

// export 는 여러게 내보내는거 {BoomGame} => 키와 벨류로 구조분해할당으로 내보냄
// default => BoomGame 이렇게 하나만 내보냄
// 리액트 생명주기 공부

export default class BoomGame extends Component {
  constructor() {
    super()
    this.state = {
      Over: false,
      Count: 0,
      boom: Math.floor(Math.random() * 9),
      boomCount: 9
    }
  }

  componentDidMount() {
    // 최초에 한번 호출
    console.log(this.state);
  }

  componentDidUpdate() {
    // 상태변수가 변경되면 호출해야할 로직
    console.log(("설마 게임 끝?"));
  }

  componentWillUnmount() {
    // 컴포넌트가 화면에서 보이지 않게 된 경우
  }

  // 점수가 증가되게 만드는 함수
  setCount = () => {
    this.setState({ ...this.state, Count: this.state.Count + 1 })
  }

  // gameOver = () => {
  //   setTimeout(() => {
  //     this.setState({ ...this.state, Over: true });
  //   }, 1000);
  // }

  gameOver = () => {
    this.setState({ ...this.state, Over: true });
  }

  setBoom = () => {
    // 폭탄 초기화
    const count = this.state.boomCount;
    console.log();
    return (Array(count).fill(null).map((e, index) => <Boom gameOver={this.gameOver}
      setValue={index === this.state.boom ? this.gameOver : this.setCount} Over={this.state.Over} />))
  }

  // 렌더를 했을때 Boom을 세개를 넣었을때 왜 따로 될까?
  // 컨스트럭철를 통해서 생성한 컴포넌트이기 때문에 생성
  // 셋다 new로 만들어서 동적활동을 했다. 컴포넌트가 각각의 객체가 다른거
  // state가 상태값을 각각 가지고 있다.
  render() {
    return (<div className='boom-game-manger'>
      <span>{this.state.Count}</span>
      {this.state.Over ? <div>게임 오버</div> : <this.setBoom />}
      {/* <Boom gameOver={this.gameOver} /> */}
      {/* <Boom />
      <Boom /> */}
    </div>)
  }
}

// 지뢰찾기 게임
// 1. 게임 메니저 
// 2. 폭탄
// 3. 게임 매니저의 역할분리 (게임점수, 게임오버, 랜덤한 지뢰의 값)
// 4. 폭탄의 역할 (활성화 인지 , 비활성화인지)

// 게임 재시작 버튼 만들기