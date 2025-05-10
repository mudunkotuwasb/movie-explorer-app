import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        style={{ flexGrow: 1 }}
      />
      <IconButton onClick={handleSearchSubmit}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;