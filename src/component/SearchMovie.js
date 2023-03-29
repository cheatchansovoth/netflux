import React,{useState,useEffect,useContext} from 'react'
import { MovieContext } from './movieContext';
import { useParams,useNavigate } from 'react-router-dom';
export const SearchMovie = () => {
    const API_KEY='637d2db3e80388b60c60f95c464752e6';
    const { searchMovie } = useContext(MovieContext);
    const [movieResult,setMovieResult] = useState([]);
    const { query } = useParams();
    const decodedQuery = decodeURIComponent(query);
    const searchQuery = decodedQuery || searchMovie;
    const navigate = useNavigate();
    const handleClick=(id)=>
    {
      navigate(`/movies/${id}`);
    }
    ;
    useEffect(() => {
      const searchMovies = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        );
        const data = await response.json();
        setMovieResult(data.results);
      };
      searchMovies();
    }, [searchMovie, searchQuery]);
    
  return (
    <div className='space-y-5'>
      <p className='text-center text-3xl'>You have searched for : <span className='font-semibold'>{decodedQuery}</span></p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-4/5 mx-auto">
            {movieResult
              .map((movie) => (
                <div key={movie.title} onClick={()=>handleClick(movie.id)}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  className="h-[30vh] transition duration-500 hover:opacity-50" />
                  <p className="w-3/5">{movie.title}</p>
                </div>
              ))}
        </div>
    </div>
    
  )
}
