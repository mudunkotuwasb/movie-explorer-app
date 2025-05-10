import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { Select, MenuItem, Slider } from '@mui/material';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [minRating, setMinRating] = useState(0);

  const fetchMovies = async (searchQuery, pageNumber) => {
    const response = await searchMovies(searchQuery, pageNumber);
    setMovies((prevMovies) => [...prevMovies, ...response.results]);
  };

  const fetchGenres = async () => {
    // Fetch genres from TMDb and set them in state
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query, page);
    }
  }, [query, page]);

  useEffect(() => {
    fetchGenres();
  }, []);

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

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    setPage(1);
    setMovies([]);
    fetchMovies(query, 1);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setPage(1);
    setMovies([]);
    fetchMovies(query, 1);
  };

  const handleRatingChange = (event, newValue) => {
    setMinRating(newValue);
    setPage(1);
    setMovies([]);
    fetchMovies(query, 1);
  };

  // Modify fetchMovies to include genre, year, and minRating in API call

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Select value={genre} onChange={handleGenreChange} displayEmpty>
        <MenuItem value="">All Genres</MenuItem>
        {/* Map through genres and create MenuItem for each */}
      </Select>
      <Select value={year} onChange={handleYearChange} displayEmpty>
        <MenuItem value="">All Years</MenuItem>
        {/* Add year options */}
      </Select>
      <Slider
        value={minRating}
        onChange={handleRatingChange}
        aria-labelledby="rating-slider"
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={0}
        max={10}
      />
      <MovieGrid movies={movies} />
      <button onClick={loadMoreMovies}>Load More</button>
      Home Page
    </div>
  );
}

export default Home;