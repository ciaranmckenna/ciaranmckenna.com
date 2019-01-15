import React, { Component } from 'react';

import githubLogo from '../images/icons/github.svg';
import linkedinLogo from '../images/icons/linkedin.svg';
import twitterLogo from '../images/icons/twitter.svg';

import styled from 'styled-components';

const Footer = styled.footer`
  border-top: 1px solid #ccc;
  display: grid;
  font-size: 0.8rem;
  padding: 1rem;
  margin: auto;
  margin-bottom: 2rem;
  max-width: 648px;

  @media (min-width: 400px) {
    grid-template-columns: 3fr 1fr;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    margin: 0.5rem 0 0;
    padding: 0;

    img {
      max-width: 25px;
      margin-left: 1rem;
    }
  }
`;

export default class footer extends Component {
  render() {
    return (
      <Footer>
        <div>
          <p>
            Licenced under{' '}
            <a
              href="http://opensource.org/licenses/lgpl-3.0.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPL v3.0
            </a>
            . Found a bug?{' '}
            <a href="https://github.com/barrymcgee/bmg-co-uk/issues">
              Let me know!
            </a>
          </p>
        </div>
        <ul>
          <li>
            <a
              className="no-underline"
              href="https://www.github.com/barrymcgee"
            >
              <img src={githubLogo} alt="Github" />
            </a>
          </li>
          <li>
            <a
              className="no-underline"
              href="https://www.linkedin.com/in/barrymcgee"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              className="no-underline"
              href="https://www.twitter.com/barrymcgee"
            >
              <img src={twitterLogo} alt="Twitter" />
            </a>
          </li>
        </ul>
      </Footer>
    );
  }
}
