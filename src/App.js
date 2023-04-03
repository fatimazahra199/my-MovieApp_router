import './App.css';
import Home from './pages/Home';
import movies from "./data/data";
import Hero from './pages/Hero';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './pages/Header';





function App() {
 

  return (
    <div className="App ">
      <div className="container fluid">
        <Header />
        <div className="movie-list">
          <Hero />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
