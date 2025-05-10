import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieCard = ({ movie, onClick }) => {
  const { favoriteMovies, addFavoriteMovie, removeFavoriteMovie } = useContext(MovieContext);
  const isFavorite = favoriteMovies.some(favMovie => favMovie.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteMovie(movie.id);
    } else {
      addFavoriteMovie(movie);
    }
  };

  return (
    <div className="movie-card" onClick={() => onClick(movie.id)}>
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>Release Year: {movie.releaseYear}</p>
        <p>Rating: {movie.rating}</p>
        <button onClick={toggleFavorite}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;