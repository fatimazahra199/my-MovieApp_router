import React, { useState } from "react";
import movies from "../data/data";
import ReactModal from "react-modal";

// addMovie = function received from Home.js
function AddMovie({ addMovie }) {
  const [movie, setMovies] = useState(movies);
  // Is the popup open or closed?
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // One state per form field
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Poster, setPoster] = useState("");
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState("");
  const [trailer, setTrailer] = useState("");

  // Runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();                 // stop the page from reloading
    // Build the new movie object from the form fields
    const newMovie = {
      id: Math.random(),
      Title: Title,
      Description: Description,
      Poster: Poster,
      rating: parseInt(rating),
      genres: genres,
      trailer:trailer,
    };
    addMovie(newMovie);                 // send it up to Home.js

    // Clear the form and close the popup
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
      {/* Button that opens the popup */}
      <button class="btn_" onClick={() => setModalIsOpen(true)}>Add New Movie</button>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Movie Modal"
        className="form-modal"            // the popup box (styled in App.css)
        overlayClassName="form-overlay"   // the dark background behind it (design)
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
          {/* Main action = gold button, secondary = outlined button */}
          <button type="submit" className="btn-submit">Add Movie</button>
          <button onClick={() => setModalIsOpen(false)} className="btn-cancel">Cancel</button>
        </form>
      </ReactModal>
    </div>
  );
}

export default AddMovie;
