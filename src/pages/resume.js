import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import aeponaLogo from '../images/logos/aepona.png';
import citiLogo from '../images/logos/citi.png';
import consalisLogo from '../images/logos/ConsalisLogo.png';
import deniLogo from '../images/logos/deni.png';
import educationAutorityLogo from '../images/logos/educationauthority.png';
import qubLogo from '../images/logos/qub.png';
import rapid7logo from '../images/logos/rapid7logo.png'
import stMarysLogo from '../images/logos/stmarys.png';
import styled from 'styled-components';

const ResumeWrap = styled.div`
  h2 {
    margin-bottom: 4rem;
  }

  img {
    display: block;
    max-width: 250px;
    margin: 3rem auto;
    text-align: center;
  }

  section {
    margin-bottom: 4rem;
  }

  .entry-list__meta {
    border-top: 1px solid #508b62;
    color: #828282;
    display: block;
    padding-top: 0.5rem;
  }
`;

const Resume = () => (
  <Layout>
    <SEO title="Curriculum Vitae" />
    <h1>Curriculum Vitae</h1>
    <ResumeWrap>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time dateTime="2015-10-16">March 2020</time> &ndash;
            <time dateTime="2015-12-18"> Present (Full-time employment)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={rapid7logo} alt="Rapid7 logo" />
          </h3>
          <p>
            <em>Rapid7</em> is a leader in cyber security analytics and automation. 
            They provide a broad range of security products including, 
            vulnerability management, incident detection and response solutions.
          </p>
          <p>
          In my role as a software engineer, I work in a new team that delivers a vulnerability
          management product to business customers globally. This involves collaboration with 
          colleagues and stakeholders across the globe to remediate defects and implement new 
          product features. Product solutions are provided using Java backend development and 
          Postgres database operations. 
          </p>
          <p>
          I managed the set-up of this new development team in Belfast, interviewing and 
          onboarding many of our current developers. I established a knowledge transfer framework, 
          consisting of documentation and internal training videos that supports understanding 
          of the product, the codebase and the CICD pipeline.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time dateTime="2015-10-16">April 2018</time> &ndash;
            <time dateTime="2015-12-18"> February 2020</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={citiLogo} alt="Citi logo" />
          </h3>
          <p>
            <em>Citi</em> is an American multinational investment bank and financial services corporation,
            who provide consumers, corporations, governments and institutions 
            with a broad range of financial services and products.
          </p>
          <p>
          In my role as an Application Developer with Citi, 
          I worked with a development team to deliver continuous stability and enhancement to the e-Trading platform. 
          I have been a liaison with global business and development teams, 
          coordinating the testing of new and upgraded market-data components.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2015-10-16">October 2017</time> &ndash;
            <time datetime="2015-12-18"> January 2018 (Intern contract)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={consalisLogo} alt="Consalis logo" />
          </h3>
          <p>
            <em>Consalis</em> is an Edinburgh based company which supports the
            investment management industry in Scotland. They specialise in building
            bespoke software solutions to enhance key business processes.
          </p>
          <p>
          I worked as part of a development team to build a web-based asset management application. 
          This is a front office application for boutique asset managers. 
          The application compromises of compliance modelling, order generation and reconciliation modules.
          The user interface was developed with Angular 4, for which I have received training. 
          The styling of the application makes use of Bootstrap, enabling a consistent and responsive design.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2017-06-14">June 2017</time> &ndash;
            <time datetime="2017-09-16"> September 2017 (Master's Project)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={aeponaLogo} alt="Aepona logo" />
          </h3>
          <p>
            <em>Aepona</em> are a software provider that offer secure enterprise
            infrastructure, creating flexible and customisable solutions.
          </p>
          <p>
          As part of my university course, I worked on an Internet of Things project, 
          to design a smart city software solution for Belfast, with the aim of lowering traffic levels.

          I conducted research and analysis to provide a focused solution 
          to the traffic problem that exists in Belfast City.

          The solution consisted of a full-stack application, 
          in which the server was implemented in Python, and the front-end relied on HTML, CSS and JavaScript.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2014-12-01">September 2016</time> &ndash;
            <time datetime="2015-01-28"> September 2017 (MSc in Software Development)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={qubLogo} alt="Qub logo" />
          </h3>
          <p>
          During the academic year of 2016/17 I enrolled in the <a href="https://www.qub.ac.uk/courses/postgraduate-taught/software-development-msc/">MSc Software Development</a> course offered by Queen's University Belfast.

          This course gave me an opportunity to analyse and solve problems 
          through the design of robust and elegant software systems. 
          Skills developed included Java programming, web development, 
          database design, and software testing.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2013-07-28">September 2015</time> &ndash;
            <time datetime="2014-11-28"> June 2016 (Part-time Qualification)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={educationAutorityLogo} alt="Education Authority Logo" />
          </h3>
          <p>
          I was nominated to enroll in the Professional Headship Qualification cohort of 
          2015/16, an accredited course for those aspiring to headship. 
          This course provided opportunity for:
          Improving and developing strategic leadership expertise
          Developing key leadership and management skills
          Enabling you to build on your leadership and management strengths
          Provides opportunities to work in different educational contexts  
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2013-07-28">September 2008</time> &ndash;
            <time datetime="2014-11-28"> September 2016 (Permanent Teaching Position)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={deniLogo} alt="DENI logo" />
          </h3>
          <p>
          I have worked in various capacities including being a member of the school senior management team, 
          head of numeracy, head of PE &amp; Sport, Public Relations Officer, 
          Co-Ordinator of ICT assessment, teacher of the holistic curriculum in P7. 
          This experience has provided me with valuable skills in the areas of problem-solving, 
          communication, time/project management, teamwork and business awareness.
          </p>
        </div>
      </section>
      <h2 className="entry-list__section-title">  University years ...</h2>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2003-09-18">September 2004</time> &ndash;
            <time datetime="2007-06-04"> June 2008</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={stMarysLogo} alt="St Mary's University logo" />
          </h3>
          <p>
            Awarded 2:1 in{' '}
            <a href="https://www.stmarys-belfast.ac.uk/academic/education/default.asp">
              BEd (Hons) Primary
            </a>
          </p>
        </div>
      </section>
    </ResumeWrap>
  </Layout>
);

export default Resume;
