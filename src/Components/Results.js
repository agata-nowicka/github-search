/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint react/prop-types: 0 */
import React from 'react';
import imageUrl from './no-messages.png';
import imageUrlStart from '../img/cherry-online-service.png';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },

  customLink: {
    color: theme.palette.text.main,
    textDecoration: 'none',
  },
  media: {
    marginTop: theme.spacing(6),
    width: '150px',
    height: '180px',
  },
  mediaStart: {
    marginTop: theme.spacing(6),
    width: '180px',
    height: '150px',
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
    listRepos = (
      <div className={classes.mediaStart}>
        <CardMedia className={classes.mediaStart} image={imageUrlStart} />
      </div>
    );
  } else if (user === 'errorerror') {
    listRepos = (
      <div>
        No such user
        <div className={classes.media}>
          <CardMedia className={classes.media} image={imageUrl} />
        </div>
      </div>
    );
  } else {
    listRepos = (
      <div>
        No repos
        <div className={classes.media}>
          <CardMedia className={classes.media} image={imageUrl} />
        </div>
      </div>
    );
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <h2> {listRepos} </h2>
    </Grid>
  );
};

export default Results;
