// import React from 'react'
// import { Link, graphql } from 'gatsby'

// import Bio from '../components/bio'
// import Layout from '../components/Layout'
// import SEO from '../components/SEO'
// import { rhythm, scale } from '../utils/typography'
// import { IPageProps } from '../types/page-props'
// import { IEdge } from '../gatsby/create-pages'

// class ManufacturerListTemplate extends React.Component<IPageQuery & IPageProps & ITemplateProps> {
// }

// interface IPageQuery {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//       }
//     }
//     markdownRemark: {
//       id: number
//       excerpt: string
//       html: string
//       frontmatter: {
//         title: string
//         date: string
//         description: string
//       }
//     }
//   }
// }

// MAKE THE BELOW INTO A COMPONENT for next/prev nav

// <ul
//             style={{
//               display: `flex`,
//               flexWrap: `wrap`,
//               justifyContent: `space-between`,
//               listStyle: `none`,
//               padding: 0,
//             }}
//           >
//             <li>
//               {previous?.node && (
//                 <Link to={previous.node.fields.slug} rel="prev">
//                   ← {previous.node.frontmatter.title}
//                 </Link>
//               )}
//             </li>
//             <li>
//               {next && (
//                 <Link to={next.node.fields.slug} rel="next">
//                   {next.node.frontmatter.title} →
//                 </Link>
//               )}
//             </li>
//           </ul>
