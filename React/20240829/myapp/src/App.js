import { Suspense } from 'react';
import Count from './components/Count';
import Login from './components/Login';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<>logding...</>}>
        {/* <Todo /> */}
        <Login />
      </Suspense>
    </div>
  );
}

export default App;
