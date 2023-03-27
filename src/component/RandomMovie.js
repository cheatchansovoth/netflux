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
  const transition = {
    duration: 5,
    ease: "easeInOut",
  };

  return (
  //   <motion.div className="relative w-full h-[80vh]">
  //   <motion.img src={randomMovie.image_url} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover " />
  //   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
  //   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
  //     <h1 className="text-4xl font-bold mb-4">{randomMovie.title}</h1>
  //     <p className="text-lg">{randomMovie.description}</p>
  //     <button className="px-4 py-2 bg-white text-black mt-4 rounded-md">Watch Now</button>
  //   </div>
  // </motion.div>
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
