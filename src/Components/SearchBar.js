/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Results from './Results';
import SearchIcon from '@material-ui/icons/Search';
import {
  InputAdornment,
  Button,
  CssBaseline,
  TextField,
  Grid,
  makeStyles,
  Container,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  clear: {
    '&:hover': {
      backgroundColor: theme.palette.buttons.action.hover,
      boxShadow: 'none',
    },
  },
  blue: {
    backgroundColor: theme.palette.buttons.action.selected,
    borderColor: theme.palette.buttons.action.selected,
    '&:hover': {
      backgroundColor: '#5095b5',
      borderColor: '#5095b5',
      boxShadow: 'none',
    },
  },
  customLink: {
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
  root: {
    width: '300px',
    backgroundColor: '#424242',
    color: theme.palette.buttons.action.selected,
  },
}));
function SearchBar() {
  const location = useLocation();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const [repos, setRepos] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);
  const [ifError, setIfError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const classes = useStyles();
  useEffect(() => {
    // get user URL and search for his/her repositoreis when the page load
    const params = new URLSearchParams(location.search);
    const userFromParams = params.get('query');
    if (userFromParams) {
      setSearchInput(userFromParams);
      searchUser(userFromParams);
    }
  }, []);
  const searchUser = async (user) => {
    try {
      setIfError(false);
      const result = await axios(`https://api.github.com/users/${user}/repos`);
      setRepos(result.data);
      setSearchedUser(user);
      // type user into URL on clicking
      history.push({ search: `?query=${user}` });
    } catch (error) {
      console.log(error.message);
      setIfError(true);
      if ((error.message = 'Not found')) {
        setErrorMessage('Not found');
      } else {
        setErrorMessage('Something went wrong');
      }
    }
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = (e) => {
    setErrorMessage(' ');
    e.preventDefault();
    searchUser(searchInput);
  };
  const handleClear = () => {
    setSearchInput('');
    setRepos([]);
    setSearchedUser(null);
    setErrorMessage(' ');
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form noValidate autoComplete="off" onSubmit={handleSearch}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className={classes.root}
                id="outlined-basic"
                label="GitHub user name"
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
                <Button
                  variant="contained"
                  onClick={handleSearch}
                  type="submit"
                  className={classes.blue}
                >
                  Search
                </Button>
              </Grid>
              <Grid item>
                <Link
                  to={{
                    pathname: '/',
                  }}
                  className={classes.customLink}
                >
                  <Button variant="contained" onClick={handleClear} className={classes.clear}>
                    Clear
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
      <Results repos={repos} user={searchedUser} message={errorMessage} />
    </Container>
  );
}
export default SearchBar;
