import React, { useEffect,useState,useContext,} from 'react'
import {useNavigate} from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { MovieContext } from './movieContext';
import { FcGoogle } from "react-icons/fc";
import {auth,GoogleAuth} from './Authentication/firebase';
import {signInWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
export const Navbar = () => {

  const API_KEY='637d2db3e80388b60c60f95c464752e6';
  const {searchMovie,setMovieResult } = useContext(MovieContext);
  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search/${searchMovie}`);
    }
  };
  const SignUpOnClick=()=>
  {
    navigate(`/register`);
  }
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [Error,setError]=useState("");
  const SignIn= async ()=>
  {
    try{
       await signInWithEmailAndPassword(auth,email,password);
       const user=auth.currentUser;
       console.log(user);
       if(user)
       {
        // localStorage.setItem('__userinfo',JSON.stringify(user));
        navigate('/');
       }
    }
    catch(err)
    {
      setError('Invalid Credentials');
    }
  };
  const SignInWithGoogle= async ()=>
  {
    try{
    await signInWithPopup(auth,GoogleAuth);
    }
    catch(err)
    {
      setError('Invalid Credentials');
    }
  };
  return (
    <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='/'>Home</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Genre
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a href='/movie/action'>Action</a></li>
            <li><a href='/movie/animation'>Anime</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-red-500" href='/'>NetFlux</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/'>Home</a></li>
      <li tabIndex={0}>
        <a>
          Genre
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2  bg-slate-700">
          <li><a href='/movie/action'>Action</a></li>
          <li><a href='/movie/animation'>Anime</a></li>
        </ul>
      </li>
      <li><a href='/tvshows'>TV Shows</a></li>
      <li><a href='/movie/popular'>Top IMDB</a></li>
    </ul>
  </div>
  <form className='w-1/2 mx-5'>
  <div class="flex ">
  <div class="flex justify-center items-center">
    <div class="p-2 hidden sm:block">
      <input type="text" placeholder="Enter keywords..." class="input input-bordered w-full max-w-xs ml-2" onChange={(event)=>
      {
        setMovieResult(event.target.value);
      }
      }
      onKeyDown={handleKeyDown}
      />
    </div>
    <div class="p-2">
      <TbSearch class="text-2xl" />
    </div>
  </div>
</div>

  </form>
  <div className="navbar-end">
{/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">Login</label>
    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal ">
      <div className="modal-box relative text-center">
        <p className='text-2xl font-bold my-5'>Login</p>
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <form className='space-y-5 flex flex-col justify-center items-center' onSubmit={SignIn}>
        <input type="text" placeholder="Username" className="input input-bordered input-info w-full max-w-xs" onChange={(event)=>
        {
          setEmail(event.target.value);
        }}/>
        <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs" onChange={(event)=>
        {
          setPassword(event.target.value)
        }}/>
        <button className="btn btn-info w-[70%]" type='submit'>Login</button>
        </form>
        <p className='cursor-pointer text-blue-400 my-3'>Forget password ?</p>
        <p className='mb-3'>Not a Member ? <span className='cursor-pointer text-blue-400' onClick={SignUpOnClick}>Sign up</span></p>
        <hr class="border-t-4 border-solid border-base-200"></hr>
        <p>OR Using</p>
        <div className="flex justify-center items-center my-3">
        <p className="text-4xl cursor-pointer" onClick={SignInWithGoogle}><FcGoogle/></p>
        </div>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}
