import './App.css';
import movie from './movie.json';
function App() {
  return (
    <div className="App">
      <div className=''>
      {
          movie.map((movie) => {
            return (
                <div className=' '>
                <img src={movie.image_url} alt={movie.title} />
                <p>{movie.title}</p>
                </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
