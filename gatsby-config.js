module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-123757096-1",
      },
    },
    `gatsby-plugin-sharp`,
  ],
}
