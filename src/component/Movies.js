import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
export const Movies = () => {
    const { id } = useParams();
    const [movie, setMovies] = useState([]);
    const API_KEY='637d2db3e80388b60c60f95c464752e6'
    const [movieResult,setMovieResult] = useState([]);
    const navigate = useNavigate();
    const randomPage = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    const handleClick=(id)=>
    {
      navigate(`/movies/${id}`);
    }
    ;
        useEffect(() => {
          // const userInfo = localStorage.getItem('__userinfo');
          // if (!userInfo) {
          //   alert('Please login to access this page');
          //   navigate('/');
          // }
        const fetchMoviesAction = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
            const data = await response.json();
            setMovies(data);
          };
          const searchMoviesAction = async () => {
            const response = await fetch(
              `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=${randomPage}&page_size=6`
            );
            const data = await response.json();
            setMovieResult(data.results);
          };
             searchMoviesAction();
            fetchMoviesAction();
    }, []);
  return (
    <div className='grid grid-cols-3'>
        <div className='col-span-3 h-[80vh]'>
         <iframe src={`https://autoembed.to/movie/tmdb/${id}`} width="100%" height="100%" frameborder="0" allow="fullscreen" allowfullscreen title={movie.title}></iframe>
        </div>
        <div className='col-span-3 xl:col-span-2 my-[5%]'>
          <div className='flex flex-col sm:flex-row lg:w-2/3 mx-[5%]'>
             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="h-[40vh] transition duration-500 hover:opacity-50 "></img>
              <div className='space-y-5'>
                <div className='flex justify-between items-center'>
                <p className='text-2xl font-bold'>{movie.title}</p>
                <p>Rating: <span className='font-semibold'>{movie.vote_average}</span></p>
                <p> <span className='font-semibold'>{movie.runtime} mins</span></p>
                </div>
                <div className="badge badge-accent">HD</div>
                <p>{movie.overview}</p>
                <p>Released Date: <span className='font-semibold'>{movie.release_date}</span></p>
                  {movie.production_countries && (
                  <p>Country: <span className='font-semibold'>{movie.production_countries.map((genre) => genre.iso_3166_1).join(", ")}</span></p>
                )}
                {movie.production_companies && (
                  <p>Prodcution: <span className='font-semibold'>{movie.production_companies.map((genre) => genre.name).join(", ")}</span></p>
                )}
              </div>
              <div>
              </div>
          </div>
        </div>
        <div className='col-span-3 lg:col-span-1'>
            <p className='text-2xl underline'>Movie you may Like</p>
            <div className="grid  grid-cols-3">
            {movieResult
            .filter((movieResult, index) => index < 6)
              .map((movie) => (
                <div key={movie.title} >
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  onClick={()=>handleClick(movie.id)} className="h-[30vh] transition duration-500 hover:opacity-50 cursor-pointer" />
                  <p className="w-3/5">{movie.title}</p>
                </div>
              ))}
        </div>
          </div>
    </div>
  )
}
