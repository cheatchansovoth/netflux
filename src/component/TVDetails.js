import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
const TVDetails = () => {

  const [tvDetails, setTVDetails] = useState('');
  const API_KEY='637d2db3e80388b60c60f95c464752e6';
  const {showid,episode}=useParams();
  const defaultEpisode = episode ? episode : 1;
  const embedUrl = `https://autoembed.to/tv/tmdb/${showid}-1-${defaultEpisode}`;
  const episodes = [];
  const [seasonNumber, setSeasonNumber] = useState(1);

const handleSeasonChange = (e) => {
  setSeasonNumber(parseInt(e.target.value));
};
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
         <iframe src={embedUrl}  width="100%" height="100%" frameborder="0" allow="fullscreen" allowfullscreen></iframe>
      </div>
      <div className="col-span-2 m-[2%]">
      <select className="select w-full max-w-xs" defaultValue="1" onChange={handleSeasonChange}>
        {[...Array(tvDetails.number_of_seasons)].map((_, i) => (
          <option key={i} value={i + 1}>Season {i + 1}</option>
        ))}
      </select>

      </div>
      <div className="col-span-2 ">
      <div className="grid grid-cols-4">
        {Array(tvDetails.number_of_episodes)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="w-1/2 p-2 cursor-pointer"
              onClick={() => handleLiClick(index)}
            >
              <div className="flex justify-center items-center bg-slate-800 rounded-2xl space-x-3 hover:bg-slate-700 ease-in duration-300">
              <BsFillPlayCircleFill/>
              <p className="font-bold">Episode {index + 1}</p>
              </div>
            </div>
          ))}
      </div>
      </div>
      <div className="col-span-2">
        <div className="flex">
              <div>
              <img src={`https://image.tmdb.org/t/p/w500/${tvDetails.poster_path}`} alt={tvDetails.title}  className="transition duration-500 hover:opacity-50" />
              </div>
              <div className="space-y-5 space-x-5">
              <p className="text-xl font-semibold">{tvDetails.name}</p>
              <div className="flex space-x-5">
              <div className="badge badge-accent">HD</div>
              <div className="flex justify-center items-center"><AiOutlineStar/>
              <p>{tvDetails.vote_average}</p>
              </div>
              </div>
              <p className="w-3/5">{tvDetails.overview}</p>
              <p>Country: {tvDetails.origin_country}</p>
              {tvDetails.genres && (
                <p>Genre: {tvDetails.genres.map((genre) => genre.name).join(", ")}</p>
              )}
                {tvDetails.production_companies && (
                <p>Production: {tvDetails.production_companies.map((genre) => genre.name).join(", ")}</p>
              )}
              <p>Release Date: {tvDetails.first_air_date}</p>
              <p>Language: {tvDetails.original_language}</p>
              </div>
        </div>
      </div>
    </div>
  );
};
export default TVDetails;
