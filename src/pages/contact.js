import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hello.</h1>
    <p>Send me a message using the form below and I'll get back to you asap.</p>
    <form
      name="Contact"
      method="POST"
      data-netlify="true"
      action="/success?no-cache=1"
      netlify-honeypot="bot-field"
    >
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
      <p style={{ display: 'none' }}>
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <p>
        <button type="submit">Send message</button>
      </p>
    </form>
  </Layout>
);

export default Contact;
