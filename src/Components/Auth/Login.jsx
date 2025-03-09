import React, { useState } from 'react'

function Login({handleLogin}) {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  
const formHandler = (e)=>{
e.preventDefault();
handleLogin(email,password)
setEmail("")
setPassword("")
}
  return (
   
    <div className='flex h-screen w-full justify-center items-center flex-wrap '>
    <div className='border-2 border-emerald-400  px-30 py-30  rounded-4xl'>
    <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
        formHandler(e);
    }}>
        <input className='px-4 py-3 rounded-3xl bg-transparent  border-1 border-emerald-400 my-5 w-70 placeholder:text-gray-400' type='email' onChange={(e)=>{setEmail(e.target.value)}} value={email} required="true" placeholder='Enter Your Email' />
        <input className='px-4 py-3 rounded-3xl bg-transparent  border-1 border-emerald-400 my-4 w-70 placeholder:text-gray-400' type='Password'onChange={(e)=>{setPassword(e.target.value)}}  value={password} required="true" placeholder='Enter Your Password' />
        <button className='px-7 py-3 rounded-2xl bg-emerald-600 text-white font-bold ' type='submit'>Login</button>
    </form>
    </div>

    </div>
  )
}

export default Login