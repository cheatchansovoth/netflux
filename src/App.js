import './App.css';
import { MovieList } from './component/MovieList';
import { Navbar } from './component/Navbar';
import { RandomMovie } from './component/RandomMovie';
function App() {

 
  return (
    <div className="App">
      <Navbar/>
      <RandomMovie/>
      <MovieList/>
    </div>
  );
}

export default App;
