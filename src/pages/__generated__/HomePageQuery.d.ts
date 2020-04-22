/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_site_siteMetadata {
  title: string | null
}

export interface HomePageQuery_site {
  siteMetadata: HomePageQuery_site_siteMetadata | null
}

export interface HomePageQuery_allMarkdownRemark_edges_node_fields {
  slug: string | null
}

export interface HomePageQuery_allMarkdownRemark_edges_node_frontmatter {
  date: any | null
  title: string | null
  description: string | null
}

export interface HomePageQuery_allMarkdownRemark_edges_node {
  excerpt: string | null
  fields: HomePageQuery_allMarkdownRemark_edges_node_fields | null
  frontmatter: HomePageQuery_allMarkdownRemark_edges_node_frontmatter | null
}

export interface HomePageQuery_allMarkdownRemark_edges {
  node: HomePageQuery_allMarkdownRemark_edges_node
}

export interface HomePageQuery_allMarkdownRemark {
  edges: HomePageQuery_allMarkdownRemark_edges[]
}

export interface HomePageQuery {
  site: HomePageQuery_site | null
  allMarkdownRemark: HomePageQuery_allMarkdownRemark
}
