import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieVideos } from '../api/tmdb';
import MovieInfo from '../components/MovieInfo';
import GenreChips from '../components/GenreChips';
import CastList from '../components/CastList';
import TrailerEmbed from '../components/TrailerEmbed';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await getMovieDetails(id);
      const creditsData = await getMovieCredits(id);
      const videosData = await getMovieVideos(id);
      setMovie(movieData);
      setCredits(creditsData);
      setVideos(videosData);
    };
    fetchMovieData();
  }, [id]);

  if (!movie || !credits || !videos) return <div>Loading...</div>;

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