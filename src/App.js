import './App.css';
import Home from './pages/Home';
import movies from "./data/data";
import Hero from './pages/Hero';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './pages/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from './pages/Movie'





function App() {
 

  return (
    <BrowserRouter>
      <div className="App ">
        <div className="container fluid">
          <Header />
          <div className="movie-list">
            <Routes>
              <Route path="/" element={<Home hero={<Hero />} />} />
              <Route exact path="/movie/:id" element={<Movie />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
