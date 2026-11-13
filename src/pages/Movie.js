import { useParams, Link } from "react-router-dom";
import "./Movie.css";

import movies from "../data/data";
// Read the saved movies from localStorage (same list Home.js uses)
const new_movie = JSON.parse(localStorage.getItem("movie"));
console.log("hellllll", new_movie);

function Movie() {
  // Get the ":id" from the URL, e.g. /movie/3 -> id = "3"
  const { id } = useParams();
  // Find the movie whose id matches (URL gives text, so convert with parseFloat)
  const movieId = new_movie.find((m) => m.id === parseFloat(id));

  return (
    <div>
      <div class="movie__card">
        {/* ---------- Top part: blurred backdrop + poster + info ---------- */}
        <div class="containerM">
          <a href="#">
            {/* "cover" = blurred big background, "movie__img" = the poster */}
            <img class="cover" src={movieId.Poster} alt={movieId.Title} />
            <img class="movie__img" src={movieId.Poster} alt={movieId.Title} />
          </a>

          <div class="hero_d">
            <div class="details">
              <div class="title_m">{movieId.Title}</div>
            </div>

            <div class="description">
              {/* Genre tags (still the fixed ones from your code) */}
              <div class="column1">
                <span class="tag">action</span>
                <span class="tag">fantasy</span>
                <span class="tag">adventure</span>
              </div>

              {/* Story / description */}
              <div class="column2">
                <p>{movieId.Description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Bottom part: trailer video + back link ---------- */}
        <div className="trailer">
          <iframe
            width="853"
            height="480"
            src={movieId.trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* Link back to the Home route */}
          <Link to="/">
            <p>Back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Movie;
