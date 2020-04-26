import { GatsbyNode, CreateSchemaCustomizationArgs } from 'gatsby'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions
  const typeDefs = `
    type airtableManufacturer implements Node {
      Manufacturer: String!
      Last_update: Date
      Products: [String]!
      MASTER_FORMAT_CLASSIFICATION: Node
      Tech_Reps: Node
      Company_Description: String
    }

    type MASTER_FORMAT_CLASSIFICATION implements Node {
      recordId: String
    }

    type Tech_Reps implements Node {
      Phone_no___Cell_: String!
    }
`

  createTypes(typeDefs)
}
