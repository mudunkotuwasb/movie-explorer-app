import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';

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
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={10} sm={11}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={2} sm={1}>
        <IconButton onClick={handleSearchSubmit}>
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;