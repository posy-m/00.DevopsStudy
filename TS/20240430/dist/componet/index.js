function useStateCreate() {
    let state = undefined;
    return (initState) => {
        if (state === undefined)
            state = initState;
        const setState = (newState) => {
            // 리렌더링
            state = newState;
            render();
        };
        return [state, setState];
    };
}
const useState = useStateCreate();
//컴포넌트라고 부를 것
function content() {
    const [count, setCount] = useState(0);
    window.increment = () => setCount(count + 1);
    return `
  <div class = "content">
  <span>카운트 :${count} </span>
    <button onclick="increment()"> 증가 </button>
  </div>
  `;
}
function render() {
    const app = document.querySelector('#app');
    app.innerHTML = content();
}
render();
