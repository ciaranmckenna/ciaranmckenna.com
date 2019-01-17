var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
};

module.exports = {
  siteMetadata: {
    title: `Barry McGee`,
    description: `Infrequent blog of Barry McGee - a software developer base in Belfast, N. Ireland on technology, politics & life generally.`,
    author: `@barrymcgee`,
    siteUrl: `https://www.barrymcgee.co.uk`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sharp`,
    netlifyCmsPaths,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Barry McGee`,
        short_name: `barrymcgee`,
        start_url: `/`,
        background_color: `#981ceb`,
        theme_color: `#981ceb`,
        display: `minimal-ui`,
        icon: `src/images/avatar.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'Playfair Display'],
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: 'md-figure' },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 648,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-embed-gist`,
            options: {
              username: 'barrymcgee',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#508b62`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
};
