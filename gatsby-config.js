module.exports = {
  siteMetadata: {
    title: 'Lil Data Monster',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lil Data Monster',
        short_name: 'Lil Data Monster',
        start_url: '/',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`, `200`]
          },
          {
            family: `Open Sans Condensed`,
            variants: [`700`]
          },
        ],
      },
    }
  ],
};
