import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import movies from "../data/data";


function MovieList({ filter }) {
  

  return (
    <div className="card-list">
      {filter.map((movie) => {
        return <MovieCard getmovie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default MovieList;
