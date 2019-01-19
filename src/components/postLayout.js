import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import styled from 'styled-components';
import SEO from './seo';

const PostContent = styled.div`
  h1 {
    display: none;
  }

  .opener {
    font-size: 1.15rem;
  }

  figure {
    margin: 2rem 0 1rem;
  }

  figcaption {
    color: #828282;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const Opener = styled.p`
  font-size: 1.15rem;
`;

const PostHeading = styled.h1`
  margin-bottom: 0;
`;

const PostMetaData = styled.div`
  display: flex;
  color: #828282;

  time {
    margin-right: 0.5rem;
  }

  .ttr {
    margin-left: 0.5rem;
  }
`;

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;

    return (
      <Layout location={location}>
        <SEO
          title={markdownRemark.frontmatter.title}
          description={markdownRemark.frontmatter.opener}
          image={markdownRemark.frontmatter.featured}
        />
        <PostHeading>{markdownRemark.frontmatter.title}</PostHeading>
        <PostMetaData>
          <time dateTime={markdownRemark.frontmatter.date}>
            {markdownRemark.frontmatter.date}
          </time>
          &middot;
          <div className="ttr">{markdownRemark.timeToRead} min read</div>
        </PostMetaData>
        {markdownRemark.frontmatter.opener && (
          <Opener>{markdownRemark.frontmatter.opener}</Opener>
        )}
        {markdownRemark.frontmatter.featured && (
          <img src={markdownRemark.frontmatter.featured} alt="" />
        )}
        <PostContent
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        opener
        featured
      }
    }
  }
`;
