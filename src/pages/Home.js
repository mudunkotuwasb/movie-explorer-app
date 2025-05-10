import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const fetchMovies = async (searchQuery, pageNumber) => {
    const response = await searchMovies(searchQuery, pageNumber);
    setMovies((prevMovies) => [...prevMovies, ...response.results]);
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
    setQuery(query);
    setPage(1);
    setMovies([]);
    fetchMovies(query, 1);
  };

  const loadMoreMovies = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query, page);
    }
  }, [query, page]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieGrid movies={movies} />
      <button onClick={loadMoreMovies}>Load More</button>
      Home Page
    </div>
  );
}

export default Home;