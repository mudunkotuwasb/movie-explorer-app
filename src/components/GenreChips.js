import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';

const GenreChips = ({ genres }) => {
  return (
    <div className="genre-chips">
      {genres.map((genre) => (
        <Chip key={genre.id} label={genre.name} style={{ margin: '4px' }} />
      ))}
    </div>
  );
};

GenreChips.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GenreChips;