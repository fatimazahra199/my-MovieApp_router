import React from 'react'

function MovieCard({ movie }) {

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Description}</p>
      <div>
        <strong>Rating:</strong> {movie.rating}
      </div>
      <div>{movie.genres} </div>
    </div>
  );
}



export default MovieCard
