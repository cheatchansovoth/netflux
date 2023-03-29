import React, { useState } from 'react'
import {auth} from './Authentication/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigator=useNavigate();
  const handleRegister=async (e)=>
  {
    e.preventDefault();
    if(password===confirmPassword)
    {
      await createUserWithEmailAndPassword(auth,email,password)
      .then((authUser)=>{
        // localStorage.setItem('__userinfo',JSON.stringify(authUser));
        navigator('/');
      })
      .catch((error)=>{
        if(error.code==='auth/email-already-in-use')
        {
        alert('Email already in use');
        }
        else
        {
          console.log(error);
        }
      })
    }
    else 
    {
      alert('Password does not match');
    }
  }
  return (
    <div className='w-full h-[80vh] flex flex-row justify-center items-center space-y-3 '>
        <div className='text-center space-y-10 lg:w-1/2 w-full justify-center items-center flex flex-col bg-slate-700 h-[70vh] text-black'>
         <h1 className='text-3xl font-semibold text-white'>Register</h1>
            <form className='w-full' onSubmit={handleRegister}>
            <div className='flex flex-col space-y-5 w-3/4 lg:w-1/2 mx-auto'>
                <input type='text' placeholder='Fullname' className='input input-bordered focus:rounded-3xl duration-500 focus:bg-gray-500' onChange={(event)=>
                {
                    setName(event.target.value)
                }}></input>
                <input type='email' placeholder='Email' className='input input-bordered focus:rounded-3xl duration-500 focus:bg-gray-500' onChange={(event)=>
                {
                    setEmail(event.target.value)
                }}></input>
                <input type='password' placeholder='Password' className='input input-bordered focus:rounded-3xl duration-500 focus:bg-gray-500' onChange={(event)=>
                {
                    setPassword(event.target.value)
                }}></input>
                <input type='password' placeholder='Confirm Password' className='input input-bordered focus:rounded-3xl duration-500 focus:bg-gray-500' onChange={(event)=>
                {
                  setConfirmPassword(event.target.value)
                }}></input>
                <button className='btn btn-info hover:bg-gray-500 hover:rounded-xl duration-500' type='submit'>Register</button>
            </div>
            </form>
         </div>
    </div>
  )
}