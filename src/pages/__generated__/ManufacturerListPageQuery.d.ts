/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ManufacturerListPageQuery
// ====================================================

export interface ManufacturerListPageQuery_site_siteMetadata {
  title: string | null
}

export interface ManufacturerListPageQuery_site {
  siteMetadata: ManufacturerListPageQuery_site_siteMetadata | null
}

export interface ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails_full {
  height: number | null
  url: string | null
  width: number | null
}

export interface ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails {
  full: ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails_full | null
}

export interface ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data_Logo {
  thumbnails: ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails | null
}

export interface ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data {
  Last_update: any | null
  Logo: (ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data_Logo | null)[] | null
  Manufacturer: string | null
  Rep_s_email: (string | null)[] | null
}

export interface ManufacturerListPageQuery_allAirtableManufacturer_edges_node {
  recordId: string | null
  data: ManufacturerListPageQuery_allAirtableManufacturer_edges_node_data | null
}

export interface ManufacturerListPageQuery_allAirtableManufacturer_edges {
  node: ManufacturerListPageQuery_allAirtableManufacturer_edges_node
}

export interface ManufacturerListPageQuery_allAirtableManufacturer {
  edges: ManufacturerListPageQuery_allAirtableManufacturer_edges[]
}

export interface ManufacturerListPageQuery {
  site: ManufacturerListPageQuery_site | null
  allAirtableManufacturer: ManufacturerListPageQuery_allAirtableManufacturer
}
