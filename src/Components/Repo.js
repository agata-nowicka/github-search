import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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
  content: {
    flex: '1 0 auto',
    flexDirection: 'column',
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
  const [userAvatar, setUserAvatar] = useState([]);
  const [repoUrl, setRepoUrl] = useState([]);
  const classes = useStyles();
  const history = useHistory();
  //useCallback retuerns memorized function versiion, which changes only when URL history changes
  const handleBack = useCallback(() => history.push(`/?query=${author}`), [history]);
  useEffect(async () => {
    try {
      const resultLang = await axios(`https://api.github.com/repos/${author}/${name}/languages`);
      const languageAr = Object.keys(resultLang.data);
      languageAr.length !== 0 ? setLanguages(languageAr) : setLanguages(['No used languages']);
      const resultAuth = await axios(`https://api.github.com/users/${author}`);
      setUserAvatar(resultAuth.data.avatar_url);
      setRepoUrl(`https://github.com/${author}/${name}`);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container className={classes.center} component="main" maxWidth="md">
      <CssBaseline />
      <Card className={classes.root}>
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
        <CardMedia className={classes.media} image={userAvatar} title="avatar" />
      </Card>
      <div>
        <Button variant="contained" className={classes.button} onClick={handleBack}>
          Back
        </Button>
      </div>
    </Container>
  );
};
export default Repo;
