import React, { useState, useEffect } from "react";
import movies from "../data/data";          // default movies (static file)
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Hero from './Hero';

// ---- Runs once when the file loads ----
// Read the movies saved in the browser (localStorage, key "movie").
// If nothing is saved yet (or the saved data looks smaller than the default
// data), save the default movies so the app always has something to show.
const moviess = localStorage.getItem("movie");
if (
  !moviess ||
  JSON.stringify(movies).length > JSON.stringify(moviess).length
) {
  localStorage.setItem("movie", JSON.stringify(movies));
}

// "hero" is the <Hero /> element sent from App.js
function Home({ hero }) {
  // State: the list of movies (starts with the default data)
  const [movie, setMovies] = useState(movies);

  // State: what the user typed in the search box / rating box
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  // Called every time the user types in the search input
  const handleSearch = (e) => {
    setFilterTitle(e.target.value);
  };

  // Called every time the user changes the minimum rating
  const handleFilter = (e) => {
    setFilterRating(e.target.value);
  };

  // Called by AddMovie when the form is submitted:
  // adds the new movie to the list and saves the list in localStorage
  const addMovie = (newMovie) => {
    const updatedMovies = movie.concat(newMovie);
    setMovies(updatedMovies);
    localStorage.setItem("movie", JSON.stringify(updatedMovies));
  };

  // Read the saved movies, then keep only those matching the title + rating filters
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
      {/* Banner */}
      {hero}

      {/* Toolbar row: filters on the left, "Add New Movie" button on the right */}
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

      {/* The grid of movie cards (only the filtered ones) */}
      <div>
        <MovieList filter={filtermovies} />
      </div>
    </>
  );
}

export default Home;
