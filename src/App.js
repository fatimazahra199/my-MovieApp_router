import './App.css';
import MovieCard from './pages/MovieCard';
import movies from "./data/data";
import Filter from './pages/Filter';
import MovieList from './pages/MovieList';




function App() {
  
  
  return (
    <div className="App">
        <div className='movie-list'> 
         <MovieList />
         </div>
    </div>

        
  
  );
}

export default App;
