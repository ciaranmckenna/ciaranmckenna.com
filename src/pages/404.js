import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <h1>
      Hmm.. page not found{' '}
      <span role="img" aria-label="Curious emoji">
        🧐
      </span>
    </h1>
    <iframe
      src="https://giphy.com/embed/aZ3LDBs1ExsE8"
      width="480"
      height="433"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
      title="WTF"
    />
    <p>
      Sorry, can't find that page. <Link to="/notes">Maybe it's here?</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
