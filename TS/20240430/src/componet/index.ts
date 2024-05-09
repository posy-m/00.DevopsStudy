function useStateCreate() {
  let state = undefined;
  return (initState) => {
    //초기값을 할당하게 하고 싶어서 작성한 조건문
    if(state === undefined) state = initState;
    const setState = (newState) => {
      //상태 변수를 업데이트 한다.
      state = newState;
    }
    return[state, setState];
  }
}
//[상태 값][샅애 값을 변경하기 위한 함수]

const useState = useStateCreate();

//상태를 가지고 있고 HTML 내용까지 변환해주는 함수
//상태 전환 메서드도 가지고 있고
function content() {
  const[count, setCount] = useState(0);

  (window as any).increment = () => setCount(count+1);

  return `
  <div class = "content">
  <span>카운트 :${count} </span>
    <button onclick="increment()"> 증가 </button>
  </div>
  `
}

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = content();
}
render()