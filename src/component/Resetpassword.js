import React from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './Authentication/firebase'
import { useState } from 'react';
export const Resetpassword = () => {

  const [email,setEmail]=useState("");
  const [Error,setError]=useState("");
  const handleResetPassword = async (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth,email)
      .then(() => {
        console.log('Password reset email sent');
        alert('Password reset email sent');
      })
      .catch((error) => {
        console.error(error);
        setError('User not found');
      });
  }
  return (
    <div className='w-full h-[80vh] flex flex-col justify-center items-center space-y-3 '>
        <div className='text-center space-y-10 lg:w-1/2 w-full justify-center items-center flex flex-col bg-slate-700 h-[50vh] text-black'>
         <h1 className='text-3xl font-semibold text-white'>Reset Password</h1>
                <div className='flex flex-col space-y-5 w-3/4 sm:w-2/4'>
                <form onSubmit={handleResetPassword}>
                <input className='input input-bordered focus:rounded-3xl duration-500 focus:bg-gray-500' type='email' placeholder='email' onChange={(e)=>
                {
                    setEmail(e.target.value)
                }}></input><br/>
                <button className='btn btn-info hover:bg-gray-500 hover:rounded-xl duration-500 my-5'  type='submit'>Reset Password</button>
                <p className='text-red-600 ease-in duration-500'>{Error}</p>
                </form>
                </div>
                </div>
      </div>
  )
}