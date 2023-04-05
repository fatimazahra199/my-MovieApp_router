import React, { useState, useEffect } from "react";
import movies from "../data/data";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Hero from './Hero';






const moviess = localStorage.getItem("movie");
if (
  !moviess ||
  JSON.stringify(movies).length > JSON.stringify(moviess).length
) {
  localStorage.setItem("movie", JSON.stringify(movies));
}

function Home({ hero }) {
  const [movie, setMovies] = useState(movies);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleSearch = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterRating(e.target.value);
  };
  const addMovie = (newMovie) => {
    const updatedMovies = movie.concat(newMovie);
    setMovies(updatedMovies);
    localStorage.setItem("movie", JSON.stringify(updatedMovies));
  };

  const moviesx = JSON.parse(localStorage.getItem("movie"));
  // console.log("getlocal", moviesx);
  let filtermovies = moviesx.filter((item) => {
    return (
      item.Title &&
      item.Title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      item.rating >= filterRating
    );
  });

  return (
    <>
      {hero}

      <div className="align">
        <Filter
          filterTitle={filterTitle}
          handleSearch={handleSearch}
          filterRating={filterRating}
          handleFilter={handleFilter}
        />
        <div className="form">
          <AddMovie addMovie={addMovie} />
        </div>
      </div>
      <div>
        <MovieList filter={filtermovies} />
      </div>
    </>
  );
}

export default Home;
