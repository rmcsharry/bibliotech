export default {
  siteMetadata: {
    title: `Manufacturer Data Tool`,
    author: {
      name: `JMF Services Manufacturer Company data`,
      summary: `A micro website to provide customers with data on manufacturing companies`,
    },
    description: `Manufacturer company data`,
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
        name: `JMF Services`,
        short_name: `JMF`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/JMFLOGO-Site-v3-SQUARE.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
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
            queryName: `Manufacturer`,
            tableView: `AppView_Details_DONOTCHANGE`,
            // mapping: { Manufacturer: `string`, Tech_Reps: 'Array' },
            // tableLinks: [`Tech_Reps`],
            separateNodeType: true,
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
