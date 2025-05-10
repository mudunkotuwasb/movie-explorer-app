import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

const MovieGrid = ({ movies }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={handleCardClick} />
      ))}
    </div>
  );
};

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieGrid;