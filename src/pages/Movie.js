import { useParams, Link } from "react-router-dom";
import "./Movie.css";

import movies from "../data/data";
const new_movie = JSON.parse(localStorage.getItem("movie"));
console.log("hellllll", new_movie);

function Movie() {
  const { id } = useParams();
  const movieId = new_movie.find((m) => m.id === parseFloat(id));

  return (
    <div>
      <div class="movie__card">
        <div class="containerM">
          <a href="#">
            <img class="cover" src={movieId.Poster} alt={movieId.Title} />
            <img class="movie__img" src={movieId.Poster} alt={movieId.Title} />
          </a>

          <div class="hero_d">
            <div class="details">
              <div class="title_m">{movieId.Title}</div>
            </div>

            <div class="description">
              <div class="column1">
                <span class="tag">action</span>
                <span class="tag">fantasy</span>
                <span class="tag">adventure</span>
              </div>

              <div class="column2">
                <p>{movieId.Description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trailer">
          <iframe
            width="853"
            height="480"
            src={movieId.trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to="/">
            <p>Back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Movie;
