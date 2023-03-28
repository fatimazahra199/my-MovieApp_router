import React from 'react'

function MovieCard({ getmovie }) {

  return (
    <div className="movie-card">
      <img src={getmovie.Poster} alt={getmovie.title} />
      <h2>{getmovie.Title}</h2>
      <p>{getmovie.Description}</p>
      <div>
        <strong>Rating:</strong> {getmovie.rating}
      </div>
      <div>{getmovie.genres} </div>
    </div>
  );
}



export default MovieCard
