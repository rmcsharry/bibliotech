/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ManufacturersPageQuery
// ====================================================

export interface ManufacturersPageQuery_firms_edges_node_data_Logo_thumbnails_full {
  height: number | null
  url: string | null
  width: number | null
}

export interface ManufacturersPageQuery_firms_edges_node_data_Logo_thumbnails {
  full: ManufacturersPageQuery_firms_edges_node_data_Logo_thumbnails_full | null
}

export interface ManufacturersPageQuery_firms_edges_node_data_Logo {
  thumbnails: ManufacturersPageQuery_firms_edges_node_data_Logo_thumbnails | null
}

export interface ManufacturersPageQuery_firms_edges_node_data_MASTER_FORMAT_CLASSIFICATION_data {
  Section_Name: string | null
  Section_No: string | null
}

export interface ManufacturersPageQuery_firms_edges_node_data_MASTER_FORMAT_CLASSIFICATION {
  data: ManufacturersPageQuery_firms_edges_node_data_MASTER_FORMAT_CLASSIFICATION_data | null
}

export interface ManufacturersPageQuery_firms_edges_node_data {
  Manufacturer: string | null
  Logo: (ManufacturersPageQuery_firms_edges_node_data_Logo | null)[] | null
  MASTER_FORMAT_CLASSIFICATION:
    | (ManufacturersPageQuery_firms_edges_node_data_MASTER_FORMAT_CLASSIFICATION | null)[]
    | null
}

export interface ManufacturersPageQuery_firms_edges_node {
  recordId: string | null
  data: ManufacturersPageQuery_firms_edges_node_data | null
}

export interface ManufacturersPageQuery_firms_edges {
  node: ManufacturersPageQuery_firms_edges_node
}

export interface ManufacturersPageQuery_firms {
  edges: ManufacturersPageQuery_firms_edges[]
}

export interface ManufacturersPageQuery {
  firms: ManufacturersPageQuery_firms
}
