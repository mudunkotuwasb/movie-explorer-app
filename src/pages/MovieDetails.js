import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieVideos } from '../api/tmdb';
import MovieInfo from '../components/MovieInfo';
import GenreChips from '../components/GenreChips';
import CastList from '../components/CastList';
import TrailerEmbed from '../components/TrailerEmbed';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import { Grid } from '@mui/material';

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
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <MovieInfo title={movie.title} poster={movie.poster_path} overview={movie.overview} />
      </Grid>
      <Grid item xs={12} md={4}>
        <GenreChips genres={movie.genres} />
      </Grid>
      <Grid item xs={12}>
        <CastList cast={credits.cast.slice(0, 5)} />
      </Grid>
      <Grid item xs={12}>
        <TrailerEmbed videos={videos.results} />
      </Grid>
    </Grid>
  );
};

export default MovieDetails;