import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    maxWidth: '80%',
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: 200,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    marginTop: theme.spacing(6),

    backgroundColor: theme.palette.primary.main,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Repo = () => {
  const { author, name } = useParams();
  const [languages, setLanguages] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    try {
      const res = await axios(`https://api.github.com/repos/${author}/${name}/languages`);
      setLanguages(Object.keys(res.data));
      const result2 = await axios(`https://api.github.com/users/${author}`);
      setAvatar(result2.data.avatar_url);
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
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {author[0]}
                </Avatar>
              }
              title={name}
              subheader="Lorem ipsum"
            />

            <Typography variant="body2" color="textSecondary" component="p">
              Choosen repo is {name}. The author is {author}
              <br />
              Used languages are: {languages.join(', ')}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </div>
        <CardMedia className={classes.media} image={avatar} title="avatar" />
      </Card>
      <Link
        to={{
          pathname: '/',
        }}
      >
        <Button variant="contained" className={classes.button}>
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default Repo;
