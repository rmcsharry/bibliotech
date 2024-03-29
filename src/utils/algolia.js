const manufacturerQuery = `{
  manufacturers: allAirtableManufacturer {
    edges {
      node {
        recordId
        data {
          Manufacturer
          KEYWORDS
          MASTER_FORMAT_CLASSIFICATION {
            data {
              Section_Name
            }
          }
          Last_update
        }
      }
    }
  }
}`

const flatten = arr => {
  if (arr)
    return arr.map(({ node }) => ({
      objectID: node.recordId,
      manufacturer: node.data.Manufacturer,
      keywords: node.data.KEYWORDS,
      classification: flattenMFC(node.data.MASTER_FORMAT_CLASSIFICATION),
      lastUpdated: node.data.Last_update,
    }))
}

const flattenMFC = arr => {
  if (arr)
    return arr.map(({ data }) => ({
      sectionName: data.Section_Name,
    }))
  else return null
}

const settings = {
  attributesToSnippet: ['keywords:20'],
  attributesToHighlight: ['manufacturer', 'classification'],
  customRanking: ['asc(manufacturer)'],
}

const queries = [
  {
    query: manufacturerQuery,
    transformer: ({ data }) => flatten(data.manufacturers.edges),
    indexName: `Manufacturers`,
    settings,
  },
]

module.exports = queries
