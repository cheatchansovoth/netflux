import React, { useEffect,useState,useContext,} from 'react'
import {useNavigate} from 'react-router-dom';
import { TbSearch } from "react-icons/tb";
import { MovieContext } from './movieContext';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";
import {auth,GoogleAuth} from './Authentication/firebase';
import {signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
export const Navbar = () => {
  const API_KEY='637d2db3e80388b60c60f95c464752e6';
  const {searchMovie,setMovieResult } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search/${searchMovie}`);
    }
  };
  const handleClick=(id)=>
  {
    navigate(`/movies/${id}`);
  }
  ;
  const SignUpOnClick=()=>
  {
    navigate(`/register`);
    setShowModel(false);
  }
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [Error,setError]=useState("");
  const [showModel,setShowModel]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const [getMovie,setGetMovie]=useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem('__userinfo') !== null
  );

  useEffect(() => {
    const searchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovie}`
      );
      const data = await response.json();
      setGetMovie(data.results);
    };
    searchMovies();
  }, [getMovie]);
  const handleModel=()=>
  {
    setShowModel(!showModel);
  }
  const SignIn= async (event)=>
  {
    event.preventDefault();
    try{
       await signInWithEmailAndPassword(auth,email,password);
       const user=auth.currentUser;
       console.log(user);
       if(user)
       {
        localStorage.setItem('__userinfo',JSON.stringify(user));
        setShowModel(false);
        setIsUserLoggedIn(true);
        navigate(`/`);
       }
       setShowModel(false);
    }
    catch(err)
    {
      setError('Invalid Credentials');
    }
  };
  const handleLogout = () => {
    // Perform logout action here, e.g. remove user info from local storage
    localStorage.removeItem('__userinfo');
    setIsUserLoggedIn(false);
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
    <div className='relative z-10'>
{/* {
  showModel && (<div className='h-[50vh] sm:h-[60vh] lg:w-1/2 top-[10%] lg:top-[50%] lg:right-[25%] absolute bg-base-300 z-40 rounded-2xl'>
    <div className='flex justify-end mr-[1%]'>
  <span className='text-left text-xl cursor-pointer' onClick={()=>setShowModel(false)}>X</span>
  </div>
  <div className='flex flex-col justify-between items-center '>
    <form onSubmit={SignIn}>
    <div className='flex flex-col h-[50vh] sm:h-[60vh] w-screen justify-center items-center space-y-2 sm:space-y-5'>
    <h1 className='text-2xl font-semibold'>Login</h1>
    <input type="text" placeholder="Username" className="input input-bordered input-info w-full max-w-xs" onChange={(event)=>
    {
      setEmail(event.target.value);
    }} />
    <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs" onChange={(event)=>
    {
      setPassword(event.target.value);
    }}/>
    {Error && (<div className="alert alert-error shadow-lg w-full max-w-xs">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{Error}</span>
    </div>
  </div>)}
    <button className="btn btn-accent w-full max-w-xs" type='submit'>Login</button>
    <a href='/resetpassword' className='text-blue-500 hover:text-blue-400'>Forget Password ?</a>
    <p>Not a Member ? <span className='text-blue-500 hover:text-blue-400' onClick={SignUpOnClick}>Sign up</span></p>
    <p>OR</p>
    <p className='text-3xl cursor-pointer' onClick={SignInWithGoogle}><FcGoogle/></p>
    </div>
    </form>

  </div>
</div>)
} */}
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
      <TbSearch class="text-2xl" onClick={()=>setShowSearch(!showSearch)} />
    </div>
  </div>
</div>
  </form>
  {/* <div className="navbar-end">
    {isUserLoggedIn ? (
        <button onClick={handleLogout} className='btn btn-accent'>
          Logout
        </button>
      ) : (
        <button onClick={handleModel} className='btn btn-accent'>
          Login
        </button>
      )}
  </div> */}
</div>
  {showSearch &&
  (<div className='flex justify-center my-[2%] sm:hidden'>
  <input type="text" placeholder="Enter keywords..." class="input input-bordered w-full max-w-xs" onChange={(event)=>
      {
        setMovieResult(event.target.value);
      }
      }
      onKeyDown={handleKeyDown}
      />
      </div>)}
    {searchMovie !== "" && (
  <div className='absolute w-screen '>
    <div className='flex flex-col w-[100%] my-3 items-center sm:h-[15vh] h-[20vh]'>
      {getMovie
        .filter((getMovie, index) => index < 5)
        .map((movie) => (
          <div key={movie.title} className='flex'>
            <p className="font-semibold hover:text-base-100 cursor-pointer" onClick={()=>handleClick(movie.id)}>{movie.title}</p>
          </div>
        ))}
    </div>
  </div>
)}
  </div>
  )
}
