import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: '60%',
  },
});

const EventDetails = ({ event }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {event.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Add to Google Calendar
          </Button>
        </CardActions>
      </div>
      <ReactPlayer
        className={classes.media}
        controls={true}
        url={`https://www.youtube.com/watch?v=${event.yt_id}`}
      />
    </Card>
  );

  // <pre>{JSON.stringify(event, null, 2)}</pre>
};

export default EventDetails;
