import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import movie from './data/movie.json'
export const MovieList = () => {
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
        <div className=' space-y-5'>
            <h1 className='text-4xl font-bold font-sans hero-content'>Drama</h1>
        <div className="space-y-5 w-4/5 lg:mx-auto ">
          <Slider arrows={false} {...settings}>
            {movie
            //   .filter((movie) => movie.genre === "Drama")
              .map((movie) => (
                <div key={movie.title} className=''>
                  <img src={movie.image_url} alt={movie.title}  className="h-[30vh] transition duration-500 hover:opacity-50" />
                  <p>{movie.title}</p>
                </div>
              ))}
          </Slider>
        </div>
        </div>
      );
      
}
