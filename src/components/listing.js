import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';

const Article = styled.article`
  border-bottom: 1px dotted #ccc;
  padding-bottom: 1rem;

  &:last-child {
    border-bottom: 0;
  }

  h2 {
    margin-bottom: 0;
  }

  time {
    color: #828282;
  }
`;

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Article key={node.frontmatter.slug}>
          <h2>
            <Link to={`/notes/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
        </Article>
      ))
    }
  />
);

export default Listing;
