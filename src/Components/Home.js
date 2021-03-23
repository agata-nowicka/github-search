import React from 'react';
import SearchBar from './SearchBar';
import { Grid } from '@material-ui/core';

const Home = () => {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <SearchBar />
    </Grid>
  );
};

export default Home;
