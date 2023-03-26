import './App.css';
import { MovieList } from './component/MovieList';
import { RandomMovie } from './component/RandomMovie';
function App() {

 
  return (
    <div className="App">

      <RandomMovie/>
      <MovieList/>
    </div>
  );
}

export default App;
