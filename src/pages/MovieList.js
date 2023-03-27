import React, { useState } from "react";
import movies from "../data/data";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
const movie = JSON.parse(localStorage.getItem("movie")) || { items: [] };
function MovieList() {
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
      setMovies(movie.concat(newMovie));
      localStorage.setItem("movie", JSON.stringify(movie));
    };

  const filtermovies = movie.filter((item) => {
    return (
      item.Title &&
      item.Title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      item.rating >= filterRating
    );
  });

  return (
    <div>
      <Filter
        filterTitle={filterTitle}
        handleSearch={handleSearch}
        filterRating={filterRating}
        handleFilter={handleFilter}
      />

      <div className="card-list">
        {filtermovies.map((movie, index) => {
          console.log("Movie:", movie);
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
      <div className="form">
        <AddMovie addMovie={addMovie} />
      </div>
    </div>
  );
}

export default MovieList;
