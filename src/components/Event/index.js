import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player';
import CalendarIcon from '@material-ui/icons/EventAvailable';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const breakPoint = 'sm';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up(breakPoint)]: {
      flexDirection: 'row'
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    order: 2,
    [theme.breakpoints.up(breakPoint)]: {
      width: '50%',
      order: 1
    }
  },
  content: {
    flex: '1 0 auto'
  },
  media: {
    width: '100% !important',
    order: 1,
    [theme.breakpoints.up(breakPoint)]: {
      width: '50% !important',
      order: 2
    }
  },
  time: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const formatTime = date => {
  let formattedDate = moment.utc(date).format('YYYYMMDDTHHmmssZ');
  return formattedDate.replace('+00:00', 'Z');
};

const EventDetails = ({ event, meetlink }) => {
  const classes = useStyles();

  let calendarUrl = 'https://calendar.google.com/calendar/render';
  calendarUrl += '?action=TEMPLATE';
  calendarUrl += '&dates=' + formatTime(event.start);
  calendarUrl += '/' + formatTime(event.end);
  calendarUrl += '&location=' + encodeURIComponent('at Home 💪');
  calendarUrl += '&text=' + encodeURIComponent(event.title);
  calendarUrl +=
    '&details=' + encodeURIComponent(`${event.description} ${meetlink}`);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h2'>
            {event.title}
          </Typography>
          <div className={classes.time}>
            <CalendarIcon />
            &nbsp;&nbsp;
            {moment(event.start).format('DD/MM/YYYY hh:mma')}&nbsp;-&nbsp;
            {moment(event.end).format('hh:mma')}
          </div>
          <Typography variant='body2' color='textSecondary' component='p'>
            <ReactMarkdown source={event.description} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            color='primary'
            href={calendarUrl}
            startIcon={<CalendarIcon />}
          >
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
};

export default EventDetails;
