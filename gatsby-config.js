module.exports = {
  siteMetadata: {
    title: `TRIBU`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `somos tribu landing`,
        icon: `static/17326156-isotype.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
