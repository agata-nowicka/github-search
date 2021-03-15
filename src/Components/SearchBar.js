/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Results from './Results';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
    textDecoration: 'none',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [repos, setRepos] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);
  const classes = useStyles();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
      setRepos(result.data);
      setSearchedUser(searchInput);
    } catch (error) {
      console.log(error);
      setRepos([]);
      setSearchedUser('errorerror');
    }
  };

  const handleClear = () => {
    setSearchInput('');
    setRepos([]);
    setSearchedUser(null);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form noValidate autoComplete="off" onSubmit={handleSearch}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="GitHub user name"
                variant="outlined"
                color="primary"
                fullWidth
                type="text"
                value={searchInput}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" onClick={handleSearch} type="submit">
                  Search
                </Button>
              </Grid>
              <Grid item>
                <Link
                  to={{
                    pathname: '/',
                  }}
                  className={classes.heroButtons}
                >
                  <Button variant="outlined" onClick={handleClear}>
                    Clear
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
      <Results repos={repos} user={searchedUser} />
    </Container>
  );
}

export default SearchBar;
