import React, { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [lastSearchedTerm, setLastSearchedTerm] = useState(() => {
    return localStorage.getItem('lastSearchedTerm') || '';
  });

  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const savedFavorites = localStorage.getItem('favoriteMovies');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('lastSearchedTerm', lastSearchedTerm);
  }, [lastSearchedTerm]);

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const updateSearchTerm = (term) => {
    setLastSearchedTerm(term);
  };

  const addFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFavoriteMovie = (movieId) => {
    setFavoriteMovies((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieId));
  };

  return (
    <MovieContext.Provider value={{ lastSearchedTerm, favoriteMovies, updateSearchTerm, addFavoriteMovie, removeFavoriteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };