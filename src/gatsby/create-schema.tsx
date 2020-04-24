import { GatsbyNode, CreateSchemaCustomizationArgs } from 'gatsby'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions
  const typeDefs = `
    type airtableManufacturer implements Node {
      Manufacturer: String
      Date_created: Date
      Last_update: Date
      Products: [String]!
      MASTER_FORMAT_CLASSIFICATION: [String]!
    }
`

  createTypes(typeDefs)
}
