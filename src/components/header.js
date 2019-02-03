import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeadWrapper = styled.div`
  max-width: 648px;
  margin: auto;
  padding: 1rem;
  display: grid;

  img {
    display: block;
    width: 150px;
    margin: auto;
  }

  @media (min-width: 420px) {
    grid-template-columns: 1fr 3fr;
    grid-gap: 2rem;
  }

  h1 {
    margin-bottom: 0.5rem;

    @media (max-width: 420px) {
      text-align: center;
    }
  }

  h4 {
    margin-top: 0rem;

    @media (max-width: 420px) {
      text-align: center;
    }
  }

  img {
    max-width: 150px;
    margin: auto;
    border-radius: 50%;
  }
`;

const Header = ({ siteTitle }) => (
  <HeadWrapper>
    <Link to="/" className="no-underline">
      <img
        alt="Ciaran McKenna"
        src="https://pbs.twimg.com/profile_images/991567557852311553/3hJVSsSa_400x400.jpg"
      />
    </Link>
    <div>
      <h1>{siteTitle}</h1>
      <h4>
        I'm a Software Engineer based in Belfast, N. Ireland.{' '}
        <span className="no-print">
          Here I occasionally discuss technology, politics &amp; healthy living.
        </span>
      </h4>
    </div>
  </HeadWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
