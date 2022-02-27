import React from 'react';
import { login, logout } from "./user";

// use modifty the states.
import { useDispatch } from 'react-redux'

export default function Login() {

  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => { dispatch(login({ name: "Sophia", age: 20, email: "Sophia@gmail.com " })) }}>Login</button>


      <button onClick={() => { dispatch(logout()) }}>Logout</button>

    </div>
  )
}
