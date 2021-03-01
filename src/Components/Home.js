import React from 'react';
import SearchBar from './SearchBar';
import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <h1> Search Bar </h1>
      <SearchBar />
    </Grid>
  );
};

export default Home;
