// 리듀서 함수
// 초기값을 기본으로 할당

// state 
// 기본값을 할당
// 초기에는 기본값이 사용된다.

const initialState = {
  order: ""
}

const reducer = (state = initialState, action) => {
  // state 초기에는 기본값으로 할당한 initialState가 할당되고
  // 상태를 업데이트한 이후에는 이전 상태값을 할당해준다.
  // reducer 꼭 반환값이 있어야한다.
  const { type, paylaod } = action;
  switch (type) {
    case "참치김밥":
      return { ...state, order: "참치김밥" }
    case "초코라떼":
      return { ...state, order: "초코라떼" }
    default:
      return state;
  }
}

export default reducer;