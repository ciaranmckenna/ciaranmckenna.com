import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="About me" />
    <h1>About me</h1>
    <p>
      I am a front end web developer with over ten years experience of building
      websites used by millions of people. I care about crafting a web that
      looks good, loads fast &amp; works everywhere, for everyone.
    </p>
    <p>
      I write lean, clean HTML, CSS &amp; Javascript and actively contribute to
      open source software.
    </p>
  </Layout>
);

export default About;
