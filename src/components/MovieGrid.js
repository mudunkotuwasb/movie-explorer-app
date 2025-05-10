import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

const MovieGrid = ({ movies }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} key={movie.id}>
          <MovieCard movie={movie} onClick={handleCardClick} />
        </Grid>
      ))}
    </Grid>
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