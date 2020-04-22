export default {
  siteMetadata: {
    title: `JMF Services`,
    author: {
      name: `Richard McSharry`,
      summary: `Coding Stormtrooper. Former Code Moneky.`,
    },
    description: `Construction company data`,
    siteUrl: `https://github.com/rmcsharry/jmf-services-gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyKyHWopjFifJzyo`,
        concurrency: 5,
        tables: [
          {
            baseId: `appP5vBdAitw6yyDH`,
            tableName: `Manufacturers`,
            tableView: `AppView_Details_DONOTCHANGE`,
            mapping: { Manufacturer: `string`, Tech_Reps: 'Array' },
            // tableLinks: [`Tech_Reps`],
          },
          // {
          //   baseId: `appP5vBdAitw6yyDH`,
          //   tableName: `Tech_Reps`,
          //   // mapping: { 'COLUMN NAME': `VALUE_FORMAT` },
          //   tableLinks: [`Manufacturers`],
          // },
        ],
      },
    },
  ],
}
