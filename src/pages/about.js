import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About me" />
    <h1>About me</h1>
    <p>
      I am a development graduate, beginning my career as a back end developer. I was previously
      a teacher and head of department before joining the world of software development.
      I regularly invest in my own knowledge portfolio to enhance and cultivate my craft. 
    </p>
  </Layout>
);

export default About;
