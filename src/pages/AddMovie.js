import React, { useState } from "react";
import movies from "../data/data";
import ReactModal from "react-modal";

function AddMovie({ addMovie }) {
  const [movie, setMovies] = useState(movies);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Poster, setPoster] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      Title: Title,
      Description: Description,
      Poster: Poster,
      rating: parseInt(rating),
      genres: genres,
      trailer:trailer,
    };
    addMovie(newMovie);

    setTitle("");
    setDescription("");
    setPoster("");
    setRating(0);
    setGenres("");
    setTrailer("");
    setModalIsOpen(false);
  };

  return (
    <div>
      <button class="btn_" onClick={() => setModalIsOpen(true)}>Add New Movie</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Movie Modal"
        className="form-modal"
      >
        <form onSubmit={handleSubmit} className="form_add">
          <h3>Add New Movie</h3>
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
            type="text"
            placeholder="trailer"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
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
          <button onClick={() => setModalIsOpen(false)}>Cancel</button>
        </form>
      </ReactModal>
    </div>
  );
}

export default AddMovie;
