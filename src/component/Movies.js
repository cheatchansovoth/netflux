import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

export const Movies = () => {
    const { id } = useParams();
    const [movie, setMovies] = useState([]);
    const API_KEY='637d2db3e80388b60c60f95c464752e6'

        useEffect(() => {
        const fetchMoviesAction = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
            const data = await response.json();
            setMovies(data);
            console.log(data);
          };
            fetchMoviesAction();
    }, ['']);

  return (
    <div className='flex'>
        <div className='w-2/5 mx-auto flex flex-col'>
            <h1 className='text-center text-3xl'>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  className="h-[30vh] object-contain transition duration-500 hover:opacity-50" />
            <p>{movie.overview}</p>
        </div>
    <div className='w-1/2 h-[80vh] mx-auto'>
        <iframe src={`https://autoembed.to/movie/tmdb/${id}`} width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    </div>
    </div>
  )
}
