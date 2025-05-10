import React, { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [lastSearchedTerm, setLastSearchedTerm] = useState(localStorage.getItem('lastSearchedTerm') || '');
  const [favoriteMovies, setFavoriteMovies] = useState(JSON.parse(localStorage.getItem('favoriteMovies')) || []);

  useEffect(() => {
    localStorage.setItem('lastSearchedTerm', lastSearchedTerm);
  }, [lastSearchedTerm]);

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavoriteMovie = (movieId) => {
    setFavoriteMovies((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieId));
  };

  return (
    <MovieContext.Provider value={{ lastSearchedTerm, setLastSearchedTerm, favoriteMovies, addFavoriteMovie, removeFavoriteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };