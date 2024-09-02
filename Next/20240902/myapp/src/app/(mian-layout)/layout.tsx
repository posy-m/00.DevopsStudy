import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      여기는 공통 메인 레이아웃
      {children}
    </div>
  )
}

export default layout
