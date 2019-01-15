import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hello.</h1>
    <p>Send me a message using the form below and I'll get back to you asap.</p>
    <form name="contact" method="POST" data-netlify="true" action="/success">
      <p>
        <label>
          Your name: <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Your email: <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Your message: <textarea name="message" required />
        </label>
      </p>
      <div data-netlify-recaptcha="true" />
      <p>
        <button type="submit">Send message</button>
      </p>
    </form>
  </Layout>
);

export default Contact;
