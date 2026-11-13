import React from 'react'
import { FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";

function MovieCard({ getmovie }) {
  return (
    <div className="movie-card">
      {/* Link goes to /movie/<id> (handled by the Route in App.js) */}
      <Link to={`/movie/${getmovie.id}`}>
        <img src={getmovie.Poster} alt={getmovie.Title} />
      </Link>

      {/* Info panel: appears on hover (CSS), shows title / rating / genres */}
      <div className="movie-card-info">
        <h2>{getmovie.Title}</h2>
        {/* <p>{getmovie.Description}</p> */}
        <div>
          <FaImdb className="icon" /> {getmovie.rating}
        </div>
        <div>{getmovie.genres} </div>
      </div>
    </div>
  );
}

export default MovieCard
