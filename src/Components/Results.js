/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint react/prop-types: 0 */
import React from 'react';
import imageUrl from '../img/no-messages.png';
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
  Box,
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
    marginTop: theme.spacing(1),
    width: '150px',
    height: '180px',
  },
  mediaStart: {
    width: '270px',
    height: '210px',
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
      <Box display="flex" flexDirection="column" alignItems="center">
        <span>No such user</span>
        <div className={classes.media}>
          <CardMedia className={classes.media} image={imageUrl} />
        </div>
      </Box>
    );
  } else {
    listRepos = (
      <Box display="flex" flexDirection="column" alignItems="center">
        <span>No repos</span>
        <div className={classes.media}>
          <CardMedia className={classes.media} image={imageUrl} />
        </div>
      </Box>
    );
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <h2> {listRepos} </h2>
    </Grid>
  );
};

export default Results;
