import React, { useState, useEffect } from "react";
import movies from "../data/data";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
const moviess = localStorage.getItem("movie");
if (
  !moviess ||
  JSON.stringify(movies).length > JSON.stringify(moviess).length
) {
  localStorage.setItem("movie", JSON.stringify(movies));
}
// console.log(moviess)

function Home() {
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
  console.log("getlocal", moviesx);
  let filtermovies = moviesx.filter((item) => {
    console.log("chaque", item);
    return (
      item.Title &&
      item.Title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      item.rating >= filterRating
    );
  });

  return (
    <>
      <div>
        <Filter
          filterTitle={filterTitle}
          handleSearch={handleSearch}
          filterRating={filterRating}
          handleFilter={handleFilter}
        />
        <MovieList filter={filtermovies}  />
      </div>
      <div className="form">
        <AddMovie addMovie={addMovie} />
      </div>
    </>
  );
}

export default Home;
