import { GatsbyNode } from 'gatsby'

interface MarkdownContent {
  Content: string
}
export const addMarkdownNodes: GatsbyNode['onCreateNode'] = ({ node, actions, createNodeId, createContentDigest }) => {
  const { createNode, createNodeField } = actions

  if (node.internal.type === `AirtableHtmlContent`) {
    const data = node.data as MarkdownContent
    if (Object.keys(data).length > 0) {
      const newNode = {
        id: createNodeId(`${node.id}--MarkdownContent`),
        children: [],
        parent: node.id,
        internal: {
          content: data.Content,
          mediaType: `text/markdown`,
          contentDigest: createContentDigest(data.Content),
          type: `${node.internal.type}Markdown`,
        },
      }
      createNode(newNode)

      // Add link to the new node
      createNodeField({
        node,
        name: `markdownContent___NODE`,
        value: newNode.id,
      })
    }
  }
}
