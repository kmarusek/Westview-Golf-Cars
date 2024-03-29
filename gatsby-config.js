const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Westview Golf Cars`,
    description: 'Sales, service (mobile available), and parts for golf cars. Also repairs on small engines,snowblowers, Chinese utility vehicles etc. Welding available as well.',
    author: `abovemediateam`,
    keywords: 'mechanical, electrical, welding services, hauling, trailer, golf car, repairs, maintenance'
  },
  plugins: [
    `gatsby-plugin-jss`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-tailwindcss',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'static', `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Westview Golf Cars',
        short_name: `Westview Golf Cars`,
        start_url: `/`,
        background_color: `#E53E3E`,
        theme_color: `#E53E3E`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        ignore: ['/src/pages/landingPage.scss'],
        purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/svg/, 
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `huqxhdgcoj8c`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'EUsX3VXdAq4Znzhtx3UmUcnJDEadvGYTBeb8JrEl88Q',
        environment: 'master',
        downloadLocal: true,
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
