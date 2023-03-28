import { useState } from 'react';
import './App.css';
import { MovieList } from './component/MovieList';
import { Navbar } from './component/Navbar';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import { RandomMovie } from './component/RandomMovie';
import { SearchMovie } from './component/SearchMovie';
import {MovieContext} from './component/movieContext';
import { Movies } from './component/Movies';
function App() {

  const [searchMovie,setMovieResult]=useState('');
 
  return (
    <div className="App">
      <Router>
      <MovieContext.Provider value={{ searchMovie, setMovieResult }}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<RandomMovie/>}></Route>
        <Route path='/movie' element={<MovieList/>}></Route>
        <Route path='/movies/:id' element={<Movies/>}></Route>
        <Route path='/search/:query' element={<SearchMovie/>}></Route>
      </Routes>
      </MovieContext.Provider>
      </Router>
    </div>
  );
}

export default App;
