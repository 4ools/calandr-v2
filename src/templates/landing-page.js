import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';
import Event from '../components/Event';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  calendar: {
    padding: theme.spacing(2),
    backgroundColor: 'white',
    color: 'black',
  },
}));

export const LandingPageTemplate = ({ title, meetlink, description }) => {
  const classes = useStyles();

  const [event, setEvent] = useState(null);

  const selectEvent = (event) => {
    setEvent(event);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <NavBar title={title} />
        {/* https://meet.google.com/hox-ipzp-fqf */}
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant='h6'>
            <ReactMarkdown source={description} />
          </Typography>
          <br />
          <Button
            variant='contained'
            color='default'
            href={meetlink}
            startIcon={<LaunchIcon />}
          >
            Go to google meet
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.calendar}>
          <Calendar selectEvent={selectEvent} />
        </Paper>
      </Grid>
      {event && (
        <Grid item xs={12}>
          <Event event={event} />
        </Grid>
      )}
      <Grid item xs={12}>
        <Paper className={classes.footer}>
          <Footer />
        </Paper>
      </Grid>
    </Grid>
  );
};

LandingPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meetlink: PropTypes.string,
};

const LandingPage = ({ data }) => {
  const { title, description, meetlink } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <LandingPageTemplate
        title={title}
        description={description}
        meetlink={meetlink}
      />
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LandingPage;

// just get the homepage title from the cms
export const pageQuery = graphql`
  query LandingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      frontmatter {
        title
        description
        meetlink
      }
    }
  }
`;
