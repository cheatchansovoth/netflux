import React, { useEffect, useState } from 'react'
import movie from './data/movie.json'
import { motion } from 'framer-motion'
import { TiVideo } from "react-icons/ti";
export const RandomMovie = () => {
  
  const [randomMovie, setRandomMovie] = useState(movie[Math.floor(Math.random() * movie.length)]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomMovie(movie[Math.floor(Math.random() * movie.length)]);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
  <div className="hero min-h-[60vh]"  style={{ backgroundImage: `url(${randomMovie.image_url})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{randomMovie.title}</h1>
      <p className="mb-5">{randomMovie.description}</p>
      <button className="btn gap-2">
        Watch
       <TiVideo className='text-3xl'/>
      </button>
    </div>
  </div>
</div>
  )
}
