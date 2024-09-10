import Link from 'next/link';
import styled from './style.module.css'

export default async function Home() {

  const handlerForm = async (formData: FormData) => {
    "use server"
    console.log(formData);
    // 소셜로그인 처리

  }
  return (
    // <div className="">
    //   <form action={handlerForm}>
    //     <label htmlFor="">아이디</label>
    //     <input type="text" name="uid" />
    //     <label htmlFor="">비밀번호</label>
    //     <input type="text" name='upw' />
    //     {/* <button className='py-2 px-4 font-semibold rounded-lg shadow-md bg-blue-500 text-white hover:bg-blue-700'>클릭</button> */}
    //     <button className={styled.btn }>클릭</button>
    //   </form>
    // </div>
    <div className=''>
      <div className='flex items-center justify-center bg-gray-100'>
        <div className='w-full max-w-md p-8 bg-white rounded-md shadow-lg'>
          <h2 className='text-3xl font-bold text-center text-gray-800'>로그인</h2>
          <form action="" className='mt-8'>
            <div className='rounded-md shadow-sm'>
              <label className={styled.user_label} htmlFor="">Email</label>
              <input className={styled.user_input} />
              <label className={`${styled.user_label} mt-4`} htmlFor="">비밀번호</label>
              <input className={styled.user_input} type="text" />
              <div className='flex items-center justify-between mt-8'>
                <div className='flex items-center'>
                  <input type="checkbox" className='w-4 h-4 text-black border-gray-300 ' />
                  <label htmlFor="" className='block ml-2 text-sm text-gray-800'>아이디 기억하기</label>
                </div>
                <div className='text-sm'>
                  <Link className='font-medium text-gray-600 hover:text-green-500' href="">비밀번호 찾기</Link>
                </div>
              </div>
              <div className='mt-8'>
                <button className='w-full px-4 py-2 text-white bg-green-400 rounded-lg hover:bg-green-300'>로그인</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
