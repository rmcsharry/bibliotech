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
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`KEYWORDS:20`] }

const queries = [
  {
    query: manufacturerQuery,
    transformer: ({ data }) => flatten(data.manufacturers.edges),
    indexName: `Manufacturers`,
    settings,
  },
]

module.exports = queries
