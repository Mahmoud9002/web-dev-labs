import { useState } from 'react';
import './App.css';

function MovieCard({ movie, onRemove, onRate }) {

  const starEmojis = "⭐".repeat(movie.rating);

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p className="review">Review: {movie.review}</p>

      {}
      <div className="stars-display">
        {movie.rating > 0 ? starEmojis : "Not rated yet"}
      </div>

      <div className="controls">
        {}
        <span>Rate: </span>
        <button onClick={() => onRate(movie.id, 1)}>1⭐</button>
        <button onClick={() => onRate(movie.id, 2)}>2⭐</button>
        <button onClick={() => onRate(movie.id, 3)}>3⭐</button>
        <button onClick={() => onRate(movie.id, 4)}>4⭐</button>
        <button onClick={() => onRate(movie.id, 5)}>5⭐</button>
        <button onClick={() => onRemove(movie.id)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
}

function App() {

  const [movies, setMovies] = useState([]);


  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || review.trim() === '') return;

    const newMovie = {
      id: Date.now(),
      title: title,
      review: review,
      rating: 0
    };

    setMovies([...movies, newMovie]);

    setTitle('');
    setReview('');
  };

  const removeMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const rateMovie = (id, newRating) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, rating: newRating };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  return (
    <div className="app-container">
      <h1>🎬 My Movie Watch List</h1>

      {}
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Review/Comment"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>

      {}
      <div className="movie-list">
        {movies.length === 0 ? (
          <p className="empty-msg">No movies added yet. Start watching!</p>
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemove={removeMovie}
              onRate={rateMovie}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;