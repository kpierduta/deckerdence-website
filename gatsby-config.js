const config = require('./src/utils/config.js');

module.exports = {
  siteMetadata: {
    title: config.siteName,
    author: config.author,
    description: config.description,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8zqv9o3f',
        dataset: 'production',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalytics,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteName,
        short_name: config.siteName,
        start_url: config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './static/images/logo.jpg',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://gmail.us10.list-manage.com/subscribe/post?u=dd9ecdec0e9fc56c1c26b16c8&amp;id=1ec867ab81', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
