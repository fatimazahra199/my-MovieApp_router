import React from 'react'
import { FaImdb } from "react-icons/fa";

function MovieCard({ getmovie }) {

  return (
    <div className="movie-card">
      <img src={getmovie.Poster} alt={getmovie.title} />
      <div className="movie-card-info">
        <h2>{getmovie.Title}</h2>
        <p>{getmovie.Description}</p>
        <div>
          <FaImdb className='icon'/> {getmovie.rating}
        </div>
        <div>{getmovie.genres} </div>
      </div>
    </div>
  );
}



export default MovieCard
