import React from 'react'
import { useDispatch } from 'react-redux';
import { loginUser, logout } from '../features/user';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className='profile'>
      <button onClick={() => dispatch(
        loginUser({
          userName: "Ilhomjon",
          age: 19,
          email: "ilhomjon@gmail.com"
        })
      )}>Login</button>
      <button onClick={() => { dispatch(logout()) }}>Logout</button>
    </div>
  )
}

export default Login
