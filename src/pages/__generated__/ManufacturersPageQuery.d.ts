/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ManufacturersPageQuery
// ====================================================

export interface ManufacturersPageQuery_site_siteMetadata {
  title: string | null
}

export interface ManufacturersPageQuery_site {
  siteMetadata: ManufacturersPageQuery_site_siteMetadata | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails_full {
  height: number | null
  url: string | null
  width: number | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails {
  full: ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails_full | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_Logo {
  thumbnails: ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_Logo_thumbnails | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_MASTER_FORMAT_CLASSIFICATION_data {
  Section_Name: string | null
  Section_No: string | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_MASTER_FORMAT_CLASSIFICATION {
  data: ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_MASTER_FORMAT_CLASSIFICATION_data | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges_node_data {
  Manufacturer: string | null
  Logo: (ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_Logo | null)[] | null
  MASTER_FORMAT_CLASSIFICATION:
    | (ManufacturersPageQuery_allAirtableManufacturer_edges_node_data_MASTER_FORMAT_CLASSIFICATION | null)[]
    | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges_node {
  recordId: string | null
  data: ManufacturersPageQuery_allAirtableManufacturer_edges_node_data | null
}

export interface ManufacturersPageQuery_allAirtableManufacturer_edges {
  node: ManufacturersPageQuery_allAirtableManufacturer_edges_node
}

export interface ManufacturersPageQuery_allAirtableManufacturer {
  edges: ManufacturersPageQuery_allAirtableManufacturer_edges[]
}

export interface ManufacturersPageQuery {
  site: ManufacturersPageQuery_site | null
  allAirtableManufacturer: ManufacturersPageQuery_allAirtableManufacturer
}
