import React from 'react'
import { Button } from '../atoms/Login/Button';
import { Input } from '../atoms/Login/Input';
import { Label } from '../atoms/Login/Label';

function From() {
  const handlerLogin = (e) => {
    e.preventDefault();
    console.log(e.target.uid)
    const { uid: { value: uidValue }, upw: { value: upwValue } } = e.target
    console.log(uidValue, upwValue);
  }
  return (
    <form onSubmit={handlerLogin}>
      <Label>아이디</Label>
      <Input name="uid"></Input>

      <Label>비밀번호</Label>
      <Input name="upw"></Input>
      <Button>로그인 하기</Button>
    </form>
  )
}

export default From
