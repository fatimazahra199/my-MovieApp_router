import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Home from './pages/Home';
import movies from "./data/data";          // (unused here, kept from your code)
import Hero from './pages/Hero';
import Header from './pages/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from './pages/Movie'

function App() {
  return (
    // BrowserRouter enables routing for everything inside it
    <BrowserRouter>
      <div className="App ">
        <div className="container fluid">
          {/* Header is OUTSIDE <Routes>, so it shows on every page */}
          <Header />
          <div className="movie-list">
            {/* Routes = decides which page to show depending on the URL */}
            <Routes>
              {/* "/" -> Home page. The Hero banner is passed as a prop ("hero") */}
              <Route path="/" element={<Home hero={<Hero />} />} />
              {/* "/movie/:id" -> detail page; ":id" is read with useParams() in Movie.js */}
              <Route exact path="/movie/:id" element={<Movie />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
