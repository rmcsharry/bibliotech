import { GatsbyNode, CreateSchemaCustomizationArgs } from 'gatsby'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions,
}: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions

  const typeDefs = `
    type AirtablePremium implements Node @infer {
      data: AirtablePremiumData
    }

    type AirtablePremiumData {
      FAQ_HTML: String
    }

    type AirtableManufacturer implements Node {
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
