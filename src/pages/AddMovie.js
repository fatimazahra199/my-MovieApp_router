import React, { useState } from "react";
import movies from "../data/data";

function AddMovie({ addMovie }) {
  const [movie, setMovies] = useState(movies);

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Poster, setPoster] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title: Title,
      description: Description,
      poster: Poster,
      rating: parseInt(rating),
      genres: genres,
    };
    addMovie(newMovie);
    setTitle("");
    setDescription("");
    setPoster("");
    setRating(0);
    setGenres("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={Poster}
        onChange={(e) => setPoster(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genres"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
