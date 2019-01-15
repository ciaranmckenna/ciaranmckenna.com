import React, { Component } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Nav = styled.nav`
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 648px;
  margin: auto;

  a {
    display: inline;
    text-align: center;
    padding: 0.5rem 0;
  }

  @media (max-width: 420px) {
    padding: 0.5rem;
  }
`;

export default class nav extends Component {
  render() {
    return (
      <Nav>
        <Link to="/notes" className="no-underline">
          Notes
        </Link>
        <Link to="/about" className="no-underline">
          About
        </Link>
        <Link to="/resume" className="no-underline">
          CV
        </Link>
        <Link to="/contact" className="no-underline">
          Contact
        </Link>
      </Nav>
    );
  }
}
