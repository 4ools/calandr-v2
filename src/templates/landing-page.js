import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Calendar from '../components/Calendar';
import NavBar from '../components/NavBar';

export const LandingPageTemplate = ({ title }) => (
  <>
    <NavBar title={title} />
    <Calendar />
  </>
);

LandingPageTemplate.propTypes = {
  title: PropTypes.string,
};

const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LandingPageTemplate title={frontmatter.title} />
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
      }
    }
  }
`;
