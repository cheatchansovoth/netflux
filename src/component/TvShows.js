import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const TvShows = () => {
    const API_KEY='637d2db3e80388b60c60f95c464752e6';
    const [tvshows, setTvShows] = useState([]);
    const navigate = useNavigate();
    const handleClick=(id)=>
    {
      navigate(`/tvshows/${id}`);
    }
    ;
    useEffect(() => {
        const fetchMoviesAction = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`);
            const data = await response.json();
            setTvShows(data.results);
            console.log(data);
          };
            fetchMoviesAction();
    }, ['']);
  return (
    
    <div className="grid grid-cols-4 gap-4 w-4/5 mx-auto">
    {tvshows
      .map((movie) => (
        <div key={movie.title} className='cursor-pointer' onClick={()=>handleClick(movie.id)}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  className="h-[30vh] transition duration-500 hover:opacity-50" />
          <p className="w-3/5">{movie.name}</p>
        </div>
      ))}
</div>
  )
}
