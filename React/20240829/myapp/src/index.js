import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 썩는 시간을 주는 옵션, 새로운 업데이트가 불가능 하다. 지정을 안하면 기본값이 0
      //gcTime: 10000, // 기본값이 5분
      retry: 0, // 요청이 실패하면 몇번 재요청하고 오류를 발생시킬지 
      suspense: true, // react의 suspense 컴포넌트의 비동기 처리 로직을 사용할 수 있다. 
    }
  }
})
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={true} buttonPosition={'top-left'} />
  </QueryClientProvider>

);
//initialIsOpen : 열려 있을지 말지
//buttonPosition : 기본값 => 오른쪽 아래
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
