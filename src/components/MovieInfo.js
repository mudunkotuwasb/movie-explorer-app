import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = ({ title, poster, overview }) => {
  return (
    <div className="movie-info">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieInfo;