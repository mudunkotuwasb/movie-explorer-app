import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await tmdb.get('/trending/movie/week');
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await tmdb.get('/search/movie', {
    params: { query },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const getMovieVideos = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}/videos`);
  return response.data;
};

export default tmdb;