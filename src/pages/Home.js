import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Add logic to handle search query
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      Home Page
    </div>
  );
}

export default Home;