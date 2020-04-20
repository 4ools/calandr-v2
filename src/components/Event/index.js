import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const EventDetails = ({ event }) => (
  <>
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5">{event.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}></Grid>
    </Grid>

    <pre>{JSON.stringify(event, null, 2)}</pre>
  </>
);

export default EventDetails;
