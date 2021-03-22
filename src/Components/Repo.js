import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Container,
  CssBaseline,
  Button,
  makeStyles,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    background: 'rgba(255, 255, 255, 0.7)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },

  media: {
    width: 170,
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(6),
    '&:hover': {
      backgroundColor: theme.palette.buttons.action.hover,
      boxShadow: 'none',
    },
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customLink: {
    fontSize: '1.5rem',
    color: theme.palette.background.default,
  },
  noLink: {
    textDecoration: 'none',
  },
}));

const Repo = () => {
  const { author, name } = useParams();
  const [languages, setLanguages] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [repoUrl, setRepoUrl] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    try {
      const resultLang = await axios(`https://api.github.com/repos/${author}/${name}/languages`);
      setLanguages(Object.keys(resultLang.data));
      const resultAuth = await axios(`https://api.github.com/users/${author}`);
      setAvatar(resultAuth.data.avatar_url);
      setRepoUrl(`https://github.com/${author}/${name}`);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container className={classes.center} component="main" maxWidth="m">
      <CssBaseline />
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <CardHeader
              avatar={
                <Avatar aria-label="first letter" className={classes.avatar}>
                  {author[0]}
                </Avatar>
              }
              title={
                <a target="blank" href={repoUrl} className={classes.customLink}>
                  {name}
                </a>
              }
            />
            <Typography variant="body1" color="textSecondary" component="p">
              The
              <Box fontWeight="fontWeightBold" m={1} display="inline">
                author
              </Box>
              is {author} <br />
              Used
              <Box fontWeight="fontWeightBold" m={1} display="inline">
                languages
              </Box>
              are: {languages.join(', ')}
            </Typography>
          </CardContent>
        </div>
        <CardMedia className={classes.media} image={avatar} title="avatar" />
      </Card>
      <div>
        <Link
          to={{
            pathname: '/',
          }}
          className={classes.noLink}
        >
          <Button variant="contained" className={classes.button}>
            Back
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Repo;
