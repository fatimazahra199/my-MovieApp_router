import React from 'react'
import movies from "../data/data"

function MovieCard(props) {

  return (
    <div className="movie-card">
      <img src={props.movie.Poster} alt={props.movie.title} />
      <h2>{props.movie.Title}</h2>
      <p>{props.movie.Description}</p>
      <div>
       {/* <img src="MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@.png" />   */}
        <strong>Rating:</strong> {props.movie.rating}
    </div>
    <div>{props.movie.genres} </div>
    </div>
  )
}



export default MovieCard
