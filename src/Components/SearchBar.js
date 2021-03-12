/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Results from './Results';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
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
      setRepos(result);
      setSearchedUser(searchInput);
      console.log(searchInput);
      console.log(searchedUser);
    } catch (error) {
      console.log(error);
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
        <Avatar>
          <GitHubIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="secondary">
          Find a Github user
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSearch}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="User name"
                variant="outlined"
                fullWidth
                type="text"
                value={searchInput}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleSearch} type="submit">
                  Search
                </Button>
              </Grid>
              <Grid item>
                <Link
                  to={{
                    pathname: '/',
                  }}
                >
                  <Button variant="outlined" color="secondary" onClick={handleClear}>
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
