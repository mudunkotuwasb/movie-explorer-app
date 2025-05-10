import React from 'react';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <div className="cast-list">
      <h2>Top Cast</h2>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id}>
            <img src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt={member.name} />
            <p>{member.name} as {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CastList;