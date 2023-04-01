import './App.css';
import Home from './pages/Home';
import movies from "./data/data";
import Hero from './pages/Hero'




function App() {
 

  return (
    <div className="App">
      <div className="movie-list">
        <Hero />
        <Home />
      </div>
    </div>
  );
}

export default App;
