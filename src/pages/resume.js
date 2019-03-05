import Layout from '../components/layout';
import React from 'react';
import SEO from '../components/seo';
import bbcLogo from '../images/logos/bbc.svg';
import canonicalLogo from '../images/logos/canonical.svg';
import futurelearnLogo from '../images/logos/futurelearn.svg';
import kahootLogo from '../images/logos/kahoot.svg';
import madebymanyLogo from '../images/logos/madebymany.svg';
import nuffieldHealthLogo from '../images/logos/nuffield-health.svg';
import othermediaLogo from '../images/logos/othermedia.svg';
import styled from 'styled-components';
import uuLogo from '../images/logos/uu.svg';

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
            <time dateTime="2015-10-16">Jan '16</time> &ndash;
            <time dateTime="2015-12-18">Present (Full-time employment)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={canonicalLogo} alt="Canonical logo" />
          </h3>
          <p>
            <em>Canonical</em> is best known as the company that delivers
            Ubuntu, an open source software platform that runs everywhere from
            the smartphone to the cloud.
          </p>
          <p>
            I'm currently working with Canonical to support their web offering
            in the front end space across their multiple product streams.
          </p>
          <p>
            Canonical&#039;s core mission to make open source software available
            to people everywhere and one of the many perks of working with them
            is the ability to contribute back to the open source community. One
            highlight I'm currently working on is Vanilla Framework, a SASS
            based framework of patterns to support all of Canonical&#039;s
            upcoming web releases.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2015-10-16">Oct</time> &ndash;
            <time datetime="2015-12-18">Dec 2015 (Short-term contract)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={madebymanyLogo} alt="Made by Many logo" />
          </h3>
          <p>
            <em>Made by Many</em> is an award winning innovation accelerator
            based in Angel. I worked with them over 5 two week sprints to
            develop a complex Ruby on Rails product with an accompanying Pattern
            Library for a leading scientific laboratory.
          </p>
          <p>
            The lab was a large corporate with multiple competing sub-brands so
            the challenge was to develop an over-arching set of patterns &amp;
            living components that could be thread through multiple products to
            build a cohesive overall brand.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2015-02-04">Feb</time> &ndash;
            <time datetime="2015-10-16">Oct 2015 (Medium-term contract)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={kahootLogo} alt="Kahoot! logo" />
          </h3>
          <p>
            <em>Kahoot!</em> is a real-time quiz collaboration platform
            experiencing huge growth - as of May '15, Kahoot has now been used
            by over 50 million users worldwide.
          </p>
          <p>
            I worked with Kahoot over a eight month period to provide guidance
            and direction on improving their front end architecture for
            scalability and modularity in the future. This involved:
          </p>
          <ul>
            <li>
              Architecting a new modular CSS framework to style entire product
              using Atomic Design principles.
            </li>
            <li>
              Creating documentation repository to outline conventions, best
              practices and linting rules.
            </li>
            <li>Switching the development team from using LESS to SASS</li>
            <li>
              Building out a Pattern Library from the ground up using
              Fabricator.
            </li>
            <li>
              Educating and guiding the development team on style guide driven
              development.
            </li>
            <li>Helping the development team transition to Scrum.</li>
            <li>
              Rebuilding the marketing website as a full stack developer using
              Craft CMS.
            </li>
          </ul>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2014-12-01">Dec '14</time> &ndash;
            <time datetime="2015-01-28">Jan '15 (Short-term contract)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={nuffieldHealthLogo} alt="Nuffield Health logo" />
          </h3>
          <p>
            I developed a microsite for <em>Nuffield Health</em> to support
            their new year media &amp; print campaigns. The site was built on
            NodeJS &amp; included Salesforce integration for CRM and Google Maps
            integration for an interactive location finder of Nuffield Hospitals
            by postcode.
          </p>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2013-07-28">Jul '13</time> &ndash;
            <time datetime="2014-11-28">Nov '14 (Long-term contract)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={futurelearnLogo} alt="FutureLearn logo" />
          </h3>
          <p>
            I joined a small team of developers four months after{' '}
            <em>FutureLearn</em> was founded to help build a beta product fit
            for public unveiling in mid-Sept.
          </p>
          <p>
            Within the first 3 months, the user base quickly grew to over
            250,000 registered users. In Oct 2014, after just one year live,
            FutureLearn is fast approaching 1.5 million enrolments.
          </p>
          <p>
            The product is built in Ruby on Rails, using HAML and SASS on the
            front end. The team worked using Agile to gain real-time feedback
            from beta users to shape the product. I was one of two contracting
            Front Enders who helped build a scalable, modular, front end
            architecture which the maturing team can now inherit and build upon
            further.
          </p>
          <ul>
            <li>
              Worked with other developers to create a consistent Pattern
              Library.
            </li>
            <li>
              Collaborated closely with design/UX team to produce mobile first
              designs.
            </li>
            <li>
              Worked with automated testing to ensure QA and confidence in site
              stability.
            </li>
            <li>
              Using Continuous Integration to deploy on average 5 times a day.
            </li>
            <li>
              Heavily involved in recruitment process for full time front end
              team.
            </li>
          </ul>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2012-06-28">Jun '12</time> &ndash;
            <time datetime="2013-07-28">Jul '13 (Full-time employment)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={othermediaLogo} alt="Other Media logo" />
          </h3>
          <p>
            In my time with <em>Other Media</em> I was leading a small Front End
            team helping them transition to a more agile way of working (Scrum)
            to deliver high profile responsive projects for large enterprise
            clients such as Paul Smith and smaller high impact projects for
            highly visible clients such as Jasper Conran.
          </p>
          <ul>
            <li>
              Responsible for Front End build of Paul Smith redesign on Drupal
              with Magento eCommerce integration.
            </li>
            <li>
              Worked on sites for ZSL (London Zoo) &amp; the English Cricket
              Board.
            </li>
            <li>
              Worked on pitch and early versions for 2013 Wildlife Photographer
              of the Year showcase.
            </li>
            <li>Involved in brainstorming and pitching for new work.</li>
            <li>
              Organised internal 'Learning Lunches' to encourage knowledge share
              within the agency.
            </li>
          </ul>
        </div>
      </section>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2007-06-28">Jun '07</time> &ndash;
            <time datetime="2012-07-09">Jul '12 (Full-time employment)</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={bbcLogo} alt="BBC logo" />
          </h3>
          <p>
            I worked at the <em>BBC</em> for just under 5 years in total,
            progressing from a Junior Client Side Developer in 2007 at BBC
            Switch to spending my last eighteen months on the BBC iPlayer team.
          </p>
          <p>
            In this role, I worked within a large project team to deliver
            continuous improvements and features to the BBC's high profile TV
            &amp; iPlayer website.
          </p>
          <p>
            I worked in an Agile team of &tilde;10 developers, and was required
            to produce high performing, well written, object oriented code on a
            daily basis.
          </p>
          <p>
            Working closely with my Project Manager, designers, other developers
            and testers within two week release cycles, I help shape new
            features and improvements that enhanced the user experience for the
            millions of visitors that hit BBC iPlayer each week.
          </p>
          <p>
            We were one of the first teams within the BBC to embrace responsive,
            launching the Channels websites just before I left in June 2012,
            which went on to be the foundation for the revamped iPlayer site as
            it is today.
          </p>
          <ul>
            <li>
              In my five years, I also spent eighteen months on attachment to
              BBC Northern Ireland in Belfast where I had responsibility of
              supporting a large portfolio of legacy sites within a small
              technical team.
            </li>
            <li>Involved in producing live events sites for BBC Radio 1</li>
            <li>
              Worked on high visibility products such as Human Planet, Battle of
              Britain and the Royal Wedding.
            </li>
          </ul>
        </div>
      </section>
      <h2 className="entry-list__section-title">Way back, in academia...</h2>
      <section className="entry-list__item row">
        <div className="column">
          <span className="entry-list__meta">
            <time datetime="2003-09-18">Sept '03</time> &ndash;
            <time datetime="2007-06-04">Jun '07</time>
          </span>
        </div>
        <div className="column column-75">
          <h3 className="entry-list__heading">
            <img src={uuLogo} alt="University of Ulster logo" />
          </h3>
          <p>
            Awarded 2:1 in{' '}
            <a href="http://scm.ulster.ac.uk/imd/">
              BSc (Hons) Interactive Multimedia Design
            </a>
          </p>
          <p>
            Notable: Awarded place in SPEED Young Entrepreneurs Programme in
            Final Year.
          </p>
        </div>
      </section>
    </ResumeWrap>
  </Layout>
);

export default Resume;
