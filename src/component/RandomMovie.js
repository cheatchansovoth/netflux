import React, { useEffect, useState } from 'react'
import movie from './data/movie.json'
import { motion } from 'framer-motion'

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
    <motion.div className="relative w-full h-[80vh]">
    <motion.img src={randomMovie.image_url} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover " />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
      <h1 className="text-4xl font-bold mb-4">{randomMovie.title}</h1>
      <p className="text-lg">{randomMovie.description}</p>
      <button className="px-4 py-2 bg-white text-black mt-4 rounded-md">Watch Now</button>
    </div>
  </motion.div>
  )
}
