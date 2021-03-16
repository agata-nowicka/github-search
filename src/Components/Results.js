/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },

  customLink: {
    color: theme.palette.text.main,
    textDecoration: 'none',
  },
}));

const Results = (props) => {
  const { repos, user } = props;
  const classes = useStyles();
  let listRepos = [];

  if (repos.length !== 0) {
    listRepos = repos.map((item) => (
      <Link
        className={classes.customLink}
        to={{ pathname: `/repo/${item.full_name}` }}
        key={item.id}
      >
        <div className={classes.root}>
          <List component="nav" aria-label="list of repos">
            <ListItem button>
              <ListItemIcon className={classes.customLink}>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </List>
        </div>
      </Link>
    ));
  } else if (!user) {
    listRepos = <div> </div>;
  } else if (user === 'errorerror') {
    listRepos = <div> No such user </div>;
  } else {
    listRepos = <div> No repos </div>;
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <h2> {listRepos} </h2>
    </Grid>
  );
};

export default Results;
