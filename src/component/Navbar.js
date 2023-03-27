import React from 'react'
import { TbSearch } from "react-icons/tb";
export const Navbar = () => {
  return (
    <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Genre
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Action</a></li>
            <li><a>Drama</a></li>
          </ul>
        </li>
        <li><a>Country</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-red-500">NetFlux</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <a>
          Genre
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Action</a></li>
          <li><a>Drama</a></li>
          <li><a>Anime</a></li>
        </ul>
      </li>
      <li><a>Country</a></li>
      <li><a>TV Shows</a></li>
      <li><a>Top IMDB</a></li>
    </ul>
  </div>
  <form className='w-1/2 mx-5'>
  <div class="flex ">
  <div class="flex justify-center items-center">
    <div class="p-2">
      <TbSearch class="text-2xl" />
    </div>
    <div class="p-2">
      <input type="text" placeholder="Enter keywords..." class="input input-bordered w-full max-w-xs ml-2" />
    </div>
  </div>
</div>

  </form>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    </div>
  )
}
