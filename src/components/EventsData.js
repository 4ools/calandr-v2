import { graphql, useStaticQuery } from 'gatsby';

const useEventData = () => {
  const data = useStaticQuery(
    graphql`
      query EVENT_DATA_QUERY {
        allMarkdownRemark(
          sort: { order: ASC, fields: frontmatter___start }
          filter: { frontmatter: { templateKey: { eq: "event" } } }
        ) {
          edges {
            node {
              frontmatter {
                start
                end
                description
                title
                yt_id
              }
            }
          }
        }
      }
    `
  );

  return data.allMarkdownRemark.edges.map((edge) => {
    return edge.node.frontmatter;
  });
};

export default useEventData;
