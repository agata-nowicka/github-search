import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => setSearchInput(e.target.value);

  const handleSearch = async () => {
    try {
      const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
      setRepos(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchInput('');
    setRepos([]);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Type user name"
          value={searchInput}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <Results repos={repos} />
    </>
  );
};

export default SearchBar;
