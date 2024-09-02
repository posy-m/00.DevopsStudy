

const page = ({ params, searchParams }: { params: { index: string }, searchParams: { a: string } }) => {
  // 서버에서 실행이 되고 있다.
  // 서버 컴포넌트
  console.log(searchParams);

  return (
    <div>
      여기는 index params를 받은 test 페이지
      <div>{params.index}</div>
    </div>
  )
}

export default page
