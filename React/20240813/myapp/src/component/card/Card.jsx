import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    console.log(props);
    // super(props) 무조건 줘야함
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    // 최조 생성시 한번
    console.log("최초에 한번 나왔니?");
  }

  componentDidUpdate() {
    // 업데이트 될때마다 상태변수 변할때마다
    console.log("나 업데이트 됐어");
    // 상태변수가 업데이트 됐을때
    console.log(this.state.count);
  }

  // componentWillUnmount() {
  //   // 컴포넌트가 사라지면 삭제되면 보이지 않게 되면
  //   console.log("나 사라짐");
  // }

  incrementCount = () => {
    this.setState({ ...this.state, count: this.state.count + 1 })
    // 아직 상태가 전환되기 전에 상태값이 찍히는 것
    console.log(this.state.count);
  }


  render() {
    return (
      <div className='card'>
        <div className="title">{this.props.title}</div>
        <div className="content">
          <p>{this.props.text}</p>
          <p>{this.props.children}</p>
          <button onClick={this.incrementCount}>카운트 증가</button>
          <div>카운트 : {this.state.count}</div>
        </div>
      </div>
    )
  }
}
