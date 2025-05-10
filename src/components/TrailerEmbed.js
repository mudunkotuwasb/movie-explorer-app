import React from 'react';
import PropTypes from 'prop-types';

const TrailerEmbed = ({ videos }) => {
  const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  if (!trailer) return <div>No trailer available</div>;

  return (
    <div className="trailer-embed">
      <h2>Trailer</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

TrailerEmbed.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      site: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrailerEmbed;