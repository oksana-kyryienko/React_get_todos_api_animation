import React from 'react';
import MyBytton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
  return (
    <>
      <div>
       Page for Login
      </div>
      <form>
        <MyInput type="text" placeholder='Enter login' />
        <MyInput type="password" placeholder='Enter password' />
        <MyBytton>Enter</MyBytton>
      </form>
    </>
  )
}

export default Login;