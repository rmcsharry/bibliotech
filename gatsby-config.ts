const queries = require('./src/utils/algolia')
import { config } from './config'

export default {
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-6DV6T2MDLW`,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JMF Services`,
        short_name: `JMF`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/assets/bibliotech-logo-icon.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
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
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `appP5vBdAitw6yyDH`,
            tableName: `Manufacturers`,
            queryName: `Manufacturer`,
            tableView: `AppView_Details_DONOTCHANGE`,
            tableLinks: [`Tech_Reps`, `MASTER_FORMAT_CLASSIFICATION`, `Premium_Manufacturers`],
            separateNodeType: true,
            defaultValues: {
              Company_Description: '',
            },
          },
          {
            baseId: `appP5vBdAitw6yyDH`,
            tableName: `Tech Reps`,
            tableLinks: [`Manufacturers`],
          },
          {
            baseId: `appP5vBdAitw6yyDH`,
            tableName: `MANUFACTURER MASTERFORMAT`,
            tableLinks: [`Manufacturers`],
          },
          {
            baseId: `appP5vBdAitw6yyDH`,
            tableName: 'Premium_Manufacturers',
            queryName: 'Premium',
            separateNodeType: true,
            tableLinks: [`Manufacturers`],
          },
          {
            baseId: `appP5vBdAitw6yyDH`,
            tableName: 'Website_HTML',
            queryName: `HtmlContent`,
            separateNodeType: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBSAE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
        matchFields: ['lastUpdated'],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `red`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
  ],
}
