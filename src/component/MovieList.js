import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";
export const MovieList = () => {

  const [movie, setMovies] = useState([]);
  const [animation,setAnimation] = useState([]);
  const API_KEY='637d2db3e80388b60c60f95c464752e6'
  const navigate = useNavigate();
  const handleClick=(id)=>
  {
    navigate(`/movies/${id}`);
  }
  useEffect(() => {
    const fetchMoviesAction = async () => {
              const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
              );
              const data = await response.json();
              console.log(data.results);
              setMovies(data.results);
            };
    const fetchMoviesAnimaton = async () => {
              const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`
              );
              const data = await response.json();
              setAnimation(data.results);
            };
            fetchMoviesAction();
            fetchMoviesAnimaton();
          }, []);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              // slidesToScroll: 1,
              infinite: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              // slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              // slidesToScroll: 1,
            },
          },
        ],
      };
      
      return (
        <div className='space-y-5'>
        <h1 className='text-4xl font-bold font-sans hero-content'>Action</h1>
        <div className="space-y-5 w-4/5 lg:mx-auto ">
          <Slider arrows={true} {...settings}>
            {movie
              // .filter((movie) => movie.genre_id.includes("Action"))
              .map((movie) => (
                <div key={movie.title} className='cursor-pointer' onClick={()=>handleClick(movie.id)}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  className="h-[30vh] transition duration-500 hover:opacity-50" />
                  <p className="w-3/5">{movie.title}</p>
                </div>
              ))}
          </Slider>
        </div>
        <h1 className='text-4xl font-bold font-sans hero-content'>Animation</h1>
        <div className="space-y-5 w-4/5 lg:mx-auto ">
          <Slider arrows={true} {...settings}>
            {animation
              .map((movie) => (
                <div key={movie.title} className='cursor-pointer' onClick={()=>handleClick(movie.id)}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  className="h-[30vh] transition duration-500 hover:opacity-50" />
                  <p className="w-3/5">{movie.title}</p>
                </div>
              ))}
          </Slider>
        </div>
        </div>
      );
      
}
