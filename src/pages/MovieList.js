import React, { useState } from "react";
import MovieCard from "./MovieCard";
import movies from "../data/data";

function MovieList({movie}) {
    // const moviess = JSON.parse(localStorage.getItem("movie"))
    // localStorage.setItem("movie", JSON.stringify(movie));
    console.log("list",movie)

  return (
  <div className="card-list">
  {movie.map((movie) => {
    return <MovieCard getmovie={movie}/>;
   })} 
</div>);
}

export default MovieList;
