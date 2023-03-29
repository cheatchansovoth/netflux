import { useState } from 'react';
import './App.css';
import { MovieList } from './component/MovieList';
import { Navbar } from './component/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { RandomMovie } from './component/RandomMovie';
import { SearchMovie } from './component/SearchMovie';
import {MovieContext} from './component/movieContext';
import { Movies } from './component/Movies';
import { TvShows } from './component/TvShows';
import TVDetails from './component/TVDetails';
import { ActionMovie } from './component/ActionMovie';
import { Animation } from './component/Animation';
import { PopularMovie } from './component/PopularMovie';
import { Register } from './component/Register';
import PopUp from './component/Popup';
import { Resetpassword } from './component/Resetpassword';
function App() {

  const [searchMovie,setMovieResult]=useState('');
 
  return (
    <div className="App">
      <Router>
      <MovieContext.Provider value={{ searchMovie, setMovieResult }}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<RandomMovie/>}></Route>
        <Route path='/resetpassword' exact element={<Resetpassword/>}></Route>
        <Route path='/movie' element={<MovieList/>}></Route>
        <Route path='/movies/:id' element={<Movies/>}></Route>
        <Route path='/movie/action' element={<ActionMovie/>}></Route>
        <Route path='/movie/animation' element={<Animation/>}></Route>
        <Route path='/movie/popular' element={<PopularMovie/>}></Route>
        <Route path='/tvshows' element={<TvShows/>}></Route>
        <Route path='/tvshows/:showid' element={<TVDetails/>}></Route>
        <Route path='/tvshows/:showid/:episode' element={<TVDetails/>}></Route>
        <Route path='/search/:query' element={<SearchMovie/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </MovieContext.Provider>
      </Router>
    </div>
  );
}

export default App;
