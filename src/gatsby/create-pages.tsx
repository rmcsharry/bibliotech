import { GatsbyNode } from 'gatsby'
import * as path from 'path'
import IEdge from '../types/edge'

interface IQueryResult {
  allAirtableManufacturer: {
    edges: IEdge[]
  }
}

/**
 * Gatsby exposes interfaces for every lifecycle hook
 */
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const manufacturerTemplate = path.resolve(`./src/templates/manufacturer.tsx`)

  /**
   * Pass the query structure generic for complete type-check coverage
   */
  const result = await graphql<IQueryResult>(
    `
      {
        allAirtableManufacturer(sort: { fields: data___Manufacturer, order: ASC }) {
          edges {
            node {
              recordId
              data {
                Manufacturer
              }
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    throw result.errors
  }

  if (!result.data) {
    throw new Error('ERROR: Could not fetch Airtable Manufacturer data on build')
  }

  const manufacturers = result.data.allAirtableManufacturer.edges

  manufacturers.forEach((manufacturer, index) => {
    const previous = index === manufacturers.length - 1 ? null : manufacturers[index + 1].node
    const next = index === 0 ? null : manufacturers[index - 1].node

    createPage({
      path: `manufacturer/${manufacturer.node.recordId}`,
      component: manufacturerTemplate,
      context: {
        id: manufacturer.node.recordId,
        previous,
        next,
      },
    })
  })
}
