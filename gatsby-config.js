/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Post.e`,
    description: `🟨 🟧 🟥 A multi-programming language, social media platform example for iOS. Share photos, videos, text, any file type, follow others, and enjoy a dynamic newsfeed. Designed for developers and tech enthusiasts learning how to structure their own social media application.`,
    author: `@scottgriv`,
    siteUrl: `https://post-e.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Post.e`,
        short_name: `Post.e`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
      },
    },
  ],
}
