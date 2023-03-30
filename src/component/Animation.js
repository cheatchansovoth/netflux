import React,{useState,useEffect,useContext} from 'react'
import { useParams,useNavigate } from 'react-router-dom';

export const Animation = () => {
    const API_KEY='637d2db3e80388b60c60f95c464752e6';
    const [movieResult,setMovieResult] = useState([]);
    const [activeButton, setActiveButton] = useState(1);
  
    const handlePageChange = (index) => {
      setActiveButton(index);
    };
  
    const navigate = useNavigate();
    const handleClick=(id)=>
    {
      navigate(`/movies/${id}`);
    }
    ;
    useEffect(() => {
      const userInfo = localStorage.getItem('__userinfo');
      if (!userInfo) {
        alert('Please login to access this page');
        navigate('/');
      }
      const searchMoviesAction = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&page=${activeButton}`
        );
        const data = await response.json();
        setMovieResult(data.results);
      };
      searchMoviesAction();
    }, [movieResult]);
    return (
      <div className='space-y-5'>
        {/* <p className='text-center text-3xl'>You have searched for : <span className='font-semibold'>{}</span></p> */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-4/5 mx-auto">
              {movieResult
                .map((movie) => (
                  <div key={movie.title} >
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  onClick={()=>handleClick(movie.id)} className="h-[30vh] transition duration-500 hover:opacity-50 cursor-pointer" />
                    <p className="w-3/5">{movie.title}</p>
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
