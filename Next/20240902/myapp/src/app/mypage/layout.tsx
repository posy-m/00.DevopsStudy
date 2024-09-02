import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      여기는 마이페이지의 레이아웃
      테스트 입니다.
      {children}
    </div>
  )
}

export default layout
