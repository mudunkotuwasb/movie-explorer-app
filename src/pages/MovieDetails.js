import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieVideos } from '../api/tmdb';
import MovieInfo from '../components/MovieInfo';
import GenreChips from '../components/GenreChips';
import CastList from '../components/CastList';
import TrailerEmbed from '../components/TrailerEmbed';
import { Snackbar, Alert, CircularProgress } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      setError(null);
      try {
        const movieData = await getMovieDetails(id);
        const creditsData = await getMovieCredits(id);
        const videosData = await getMovieVideos(id);
        setMovie(movieData);
        setCredits(creditsData);
        setVideos(videosData);
      } catch (err) {
        setError('API failed');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieData();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Snackbar open={true} autoHideDuration={6000} onClose={() => setError(null)}>
    <Alert onClose={() => setError(null)} severity="error">
      {error}
    </Alert>
  </Snackbar>;

  return (
    <div>
      <MovieInfo title={movie.title} poster={movie.poster_path} overview={movie.overview} />
      <GenreChips genres={movie.genres} />
      <CastList cast={credits.cast.slice(0, 5)} />
      <TrailerEmbed videos={videos.results} />
    </div>
  );
};

export default MovieDetails;