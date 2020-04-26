export default {
  siteMetadata: {
    title: `Manufacturer Data Tool`,
    author: {
      name: `Bibliotech - data about Manufacturing Companies`,
      summary: `A micro website to provide customers with data on manufacturing companies`,
    },
    description: `Manufacturer company data`,
    siteUrl: `https://github.com/rmcsharry/jmf-services-gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
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
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `appP5vBdAitw6yyDH`,
            tableName: `Manufacturers`,
            queryName: `Manufacturer`,
            tableView: `AppView_Details_DONOTCHANGE`,
            tableLinks: [`Tech_Reps`, `MASTER_FORMAT_CLASSIFICATION`],
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
        ],
      },
    },
  ],
}
