import { Button } from '../atoms/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getUserAction } from '../../action';

export const From = () => {
  // store에 접근해서 전역상태를 참조
  // useSelector : store의 상태를 참조할 수 있게 도와주는 hook함수
  // useSelector로 값을 참조하면 가져온 상태를 주시하게 된다.
  // 주시하고 있는 값이 변하면 해당 컴포넌트가 리렌더링
  // 매개변수로 콜백함수 전달
  // 콜백함수에서 반환된 값을 주시한다.
  // 콜백함수의 매개변수로 현재 상태를 할당해준다.
  const order = useSelector(state => state.orderReducer.order)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(order);
  // }, [order])

  const handlerOrder = async (e) => {
    // console.log(e.target.innerText);
    if (e.target.innerText === "참치김밥 주문") {

      // // await axios.get() === 이런 부분은 함수로 정리 액션 크리에이터 함수
      // // dispatch({ type: "참치김밥", payload: {} }) // 매개변수로 함수를 전달하면 액션 크리에터 함수로 처리한다.
      // dispatch(async (dispatch, getState) => {
      //   const payload = await axios.get()
      //   dispatch({ type: "참치김밥", payload })
      // })// 매개변수로 함수를 전달하면 액션 크리에터 함수로 처리한다.
      // // 여기는 비동기 처리가 끝날때까지 동작하지 않는다.
      dispatch(getUserAction())
    } else if (e.target.innerText === "초코라떼 주문") {
      dispatch({ type: "초코라떼", payload: {} })
    }
  }

  return <>
    <h1>{order === "" ? "주문하시겠습니까?" : `${order} 나왔습니다.`}</h1>
    {/* onClick 지금은 태그가 아닌 컴퍼넌트, props임 */}
    <Button onClick={handlerOrder} type={submit}>참치김밥 주문</Button>
    <Button onClick={handlerOrder} type={button}>초코라떼 주문</Button>
  </>
}