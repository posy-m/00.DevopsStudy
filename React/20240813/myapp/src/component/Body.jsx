import React, { Component } from 'react'
import Card from './card/Card'

export default class Body extends Component {
  render() {
    return (
      <div id='body'>
        {this.props.content.map((e) =>
          <Card text={e.id} title={"첫번째카드"}>
            <div>나는 자식이야</div>
          </Card>)}

        {/* 할일 리스트 만들기 */}
        {/* <Card text={"123"} title={"첫번째카드"}>
          <div>나는 자식이야</div>
        </Card> */}
      </div >
    )
  }
}




// function Body() {
//   return (
//     <div id='body'>
//       {this.props.content.map((e) =>
//         <Card text={e.id} title={"첫번째카드"}>
//           <div>나는 자식이야</div>
//         </Card>)}

//       {/* 할일 리스트 만들기 */}
//       {/* <Card text={"123"} title={"첫번째카드"}>
//       <div>나는 자식이야</div>
//     </Card> */}
//     </div >
//   )
// }


// function Card(props) {
//   return (
//     <div className='card'>
//       <div className="title">{props.title}</div>
//       <div className="content">
//         <p>{props.text}</p>
//         <p>{props.children}</p>
//         <button onClick={incrementCount}>카운트 증가</button>
//         <div>카운트 : {state.count}</div>
//       </div>
//     </div>
//   )
// }