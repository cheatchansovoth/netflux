import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { BsFillPlayCircleFill } from "react-icons/bs";
const TVDetails = () => {

  const [tvDetails, setTVDetails] = useState('');
  const API_KEY='637d2db3e80388b60c60f95c464752e6';
  const {showid,episode}=useParams();
  const embedUrl = `https://autoembed.to/tv/tmdb/${showid}-1-${episode}`;
  const episodes = [];
    const navigate = useNavigate();
    const handleLiClick = (index) => {
      const seasonNumber = index + 1;
      navigate(`/tvshows/${tvDetails.id}/${seasonNumber}`);
    };
  useEffect(() => {
    const fetchTVDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${showid}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setTVDetails(data);
    };
    fetchTVDetails();
  }, [tvDetails]);
  for (let i = 1; i <= tvDetails.number_of_episodes; i++) {
    episodes.push(i);
  }
  return (
    <div className="grid grid-cols-2">
          <div className="col-span-2 h-[80vh]">
         <iframe src={embedUrl}  width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
      </div>
      {/* <div>
        {tvDetails && (
          <div>
            <h2>{tvDetails.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${tvDetails.poster_path}`} alt={tvDetails.name}  className="h-[30vh] transition duration-500 hover:opacity-50" />
            <p>Number of Seasons: {tvDetails.number_of_seasons}</p>
            <p>Number of Episodes: {tvDetails.number_of_episodes}</p>
          </div>
        )}
      </div> */}
      <div className="col-span-2 ">
      <div className="grid grid-cols-4">
        {Array(tvDetails.number_of_episodes)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="w-1/2 p-2 cursor-pointer"
              onClick={() => handleLiClick(index + 1)}
            >
              <div className="flex justify-center items-center bg-slate-800 rounded-2xl space-x-3 hover:bg-slate-700 ease-in duration-300">
              <BsFillPlayCircleFill/>
              <p className="font-bold">Episode {index + 1}</p>
              </div>
            </div>
          ))}
      </div>

      </div>
    </div>
  );
};
export default TVDetails;
