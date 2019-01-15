import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Notes = () => (
  <StaticQuery
    query={graphql`
      query AllNotes {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          totalCount
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <Layout>
        <SEO title="All notes" />
        <h1>All notes</h1>
        <ul>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/notes/${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
);

export default Notes;
