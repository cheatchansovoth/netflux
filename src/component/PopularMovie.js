import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const PopularMovie = () => {
    const API_KEY='637d2db3e80388b60c60f95c464752e6';
    const [tvshows, setTvShows] = useState([]);
    const [activeButton, setActiveButton] = useState(1);
    const handlePageChange = (index) => {
      setActiveButton(index);
    };
    const navigate = useNavigate();
    const handleClick=(id)=>
    {
      navigate(`/tvshows/${id}`);
    }
    ;
    useEffect(() => {
        const fetchMoviesAction = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${activeButton}`);
            const data = await response.json();
            setTvShows(data.results);
          };
            fetchMoviesAction();
    }, [tvshows]);
  return (
    <div className='space-y-5'>
        <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-4/5 mx-auto ">
        {tvshows
          .map((movie) => (
            <div key={movie.title} className='my-5' >
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  onClick={()=>handleClick(movie.id)} className="h-[30vh] transition duration-500 hover:opacity-50 cursor-pointer" />
              <p className="w-3/5 text-white text-lg font-semibold">{movie.title} <span className='badge badge-accent'>HD</span></p>
              <p className="w-3/5 text-white">{movie.popularity} views</p>
            </div>
          ))}
      </div>
    <div className='w-screen'>
        <div className="btn-group flex justify-center">
            <button className={`btn ${activeButton === 1 && "btn-active"}`} onClick={() => handlePageChange(1)}>1</button>
            <button className={`btn ${activeButton === 2 && "btn-active"}`} onClick={() => handlePageChange(2)}>2</button>
            <button className={`btn ${activeButton === 3 && "btn-active"}`} onClick={() => handlePageChange(3)}>3</button>
            <button className={`btn ${activeButton === 4 && "btn-active"}`} onClick={() => handlePageChange(4)}>4</button>
          </div>
      </div>    
  </div>
  )
}
