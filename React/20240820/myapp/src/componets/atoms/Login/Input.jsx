
// export const Input = ({ name, type }) => {
//   return (<input name={name} type={type}></input>)
// }

// import { useState } from 'react'

// 커스텀 훅
// export const Input = (props) => {
//   const [value, setValue] = useState("");
//   const onChange = (e) => {
//     setValue(e.target.value)
//   }
//   return (<input {...props} value={value} onChange={onChange}></input>)
// }


import useInput from '../../../hooks/useInput'
// 커스텀 훅
export const Input = (props) => {
  const userInput = useInput("");
  // {value, onChange}
  return (<input {...props} {...userInput} />)
}