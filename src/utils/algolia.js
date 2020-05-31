const manufacturerQuery = `{
  manufacturers: allAirtableManufacturer {
    edges {
      node {
        objectID: recordId
        data {
          Manufacturer
          KEYWORDS
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { data, ...rest } }) => ({
    ...data,
    ...rest,
  }))
const settings = {
  attributesToSnippet: ['data.KEYWORDS:20'],
  attributesToHighlight: ['data.Manufacturer'],
  customRanking: ['asc(data.Manufacturer)'],
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
