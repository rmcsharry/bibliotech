export { createPages } from './src/gatsby/create-pages'
// export { addSlugToPage as onCreateNode } from './src/gatsby/add-slug-to-page'
export { addMarkdownNodes as onCreateNode } from './src/gatsby/add-markdown-nodes'

// TODO: the below defines the field types, as it will increase build speed, but it's not finished
export { createSchemaCustomization } from './src/gatsby/create-schema'
