import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import movies from "../data/data";

// "filter" = the already-filtered array sent from Home.js
function MovieList({ filter }) {
  return (
    // "card-list" = CSS grid (see App.css)
    <div className="card-list">
      {filter.map((movie) => {
        // "key" helps React track each card; getmovie = the movie data for this card
        return <MovieCard getmovie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default MovieList;
