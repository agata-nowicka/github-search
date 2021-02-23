/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Results from './Results';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';

function SearchBar() {
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
        <GitHubIcon />
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="User name"
            variant="outlined"
            type="text"
            value={searchInput}
            onChange={handleChange}
            onKeyPress={handleKeypress} /*Not working now */
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        <Link
          to={{
            pathname: '/',
          }}
        >
          <Button variant="contained" onClick={handleClear}>
            Clear
          </Button>
        </Link>
      </div>
      <Results repos={repos} user={searchInput} />
    </>
  );
}

export default SearchBar;
