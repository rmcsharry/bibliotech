const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
import { CreateResolversArgs, GatsbyNode } from 'gatsby'

// export const createResolvers: GatsbyNode['createResolvers'] = async ({ createResolvers }) =>  {

/**
 * Add custom field resolvers to the GraphQL schema.
 * @param args
 * @param pluginOptions
 * @see https://www.gatsbyjs.org/docs/node-apis/#createResolvers
 */
export const createResolvers: GatsbyNode['createResolvers'] = (args: CreateResolversArgs): Promise<void> => {
  const { actions, cache, createNodeId, createResolvers, store, reporter } = args

  createResolvers({
    AirtablePremiumData: {
      FAQ_HTML: {
        resolve(source: any, args: any, context: any, info: any) {
          const faqHtml = remark().use(html).processSync(source.FAQ).contents
          return faqHtml
        },
      },
    },
  })

  return Promise.resolve()
}
