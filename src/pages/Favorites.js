import React, { useContext } from 'react';
import MovieGrid from '../components/MovieGrid';
import { MovieContext } from '../context/MovieContext';

const Favorites = () => {
  const { favoriteMovies, removeFavoriteMovie } = useContext(MovieContext);

  return (
    <div>
      <h1>Favorites</h1>
      <MovieGrid movies={favoriteMovies} onRemove={removeFavoriteMovie} />
    </div>
  );
};

export default Favorites;