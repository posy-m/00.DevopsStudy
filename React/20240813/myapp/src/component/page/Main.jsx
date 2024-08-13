// 얘는 메인 페이지
//컴포넌트 가져오기

import React, { Component } from 'react'
import Body from '../Body'
import Header from '../Header'
import Footer from '../Footer'

export default class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Body content={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
        <Footer />
      </div>
    )
  }
}

