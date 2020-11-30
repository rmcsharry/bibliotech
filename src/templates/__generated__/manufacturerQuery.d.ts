/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: manufacturerQuery
// ====================================================

export interface manufacturerQuery_node_data_MASTER_FORMAT_CLASSIFICATION_data {
  Section_Name: string | null
  Section_No: string | null
}

export interface manufacturerQuery_node_data_MASTER_FORMAT_CLASSIFICATION {
  data: manufacturerQuery_node_data_MASTER_FORMAT_CLASSIFICATION_data | null
}

export interface manufacturerQuery_node_data_Logo_thumbnails_full {
  height: number | null
  url: string | null
  width: number | null
}

export interface manufacturerQuery_node_data_Logo_thumbnails {
  full: manufacturerQuery_node_data_Logo_thumbnails_full | null
}

export interface manufacturerQuery_node_data_Logo {
  thumbnails: manufacturerQuery_node_data_Logo_thumbnails | null
}

export interface manufacturerQuery_node_data_Tech_Reps_data {
  Email: string | null
  Technical_Rep_Name: string | null
  Cell_Number: string | null
}

export interface manufacturerQuery_node_data_Tech_Reps {
  data: manufacturerQuery_node_data_Tech_Reps_data | null
  recordId: string | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos_thumbnails_large {
  url: string | null
  height: number | null
  width: number | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos_thumbnails_small {
  url: string | null
  height: number | null
  width: number | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos_thumbnails {
  large: manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos_thumbnails_large | null
  small: manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos_thumbnails_small | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos {
  thumbnails: manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos_thumbnails | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads_thumbnails_large {
  url: string | null
  width: number | null
  height: number | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads_thumbnails_small {
  url: string | null
  width: number | null
  height: number | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads_thumbnails {
  large: manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads_thumbnails_large | null
  small: manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads_thumbnails_small | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads {
  id: string | null
  filename: string | null
  url: string | null
  thumbnails: manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads_thumbnails | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_Feature_Images_thumbnails_large {
  url: string | null
  width: number | null
  height: number | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_Feature_Images_thumbnails {
  large: manufacturerQuery_node_data_Premium_Manufacturers_data_Feature_Images_thumbnails_large | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data_Feature_Images {
  thumbnails: manufacturerQuery_node_data_Premium_Manufacturers_data_Feature_Images_thumbnails | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers_data {
  About_Us: string | null
  Companies_Represented: (string | null)[] | null
  Represented_Logos: (manufacturerQuery_node_data_Premium_Manufacturers_data_Represented_Logos | null)[] | null
  FAQ: string | null
  FAQ_HTML: string | null
  File_Downloads: (manufacturerQuery_node_data_Premium_Manufacturers_data_File_Downloads | null)[] | null
  Last_update: any | null
  Is_Supplier: boolean | null
  Feature_Images: (manufacturerQuery_node_data_Premium_Manufacturers_data_Feature_Images | null)[] | null
}

export interface manufacturerQuery_node_data_Premium_Manufacturers {
  recordId: string | null
  data: manufacturerQuery_node_data_Premium_Manufacturers_data | null
}

export interface manufacturerQuery_node_data {
  Manufacturer: string | null
  MASTER_FORMAT_CLASSIFICATION: (manufacturerQuery_node_data_MASTER_FORMAT_CLASSIFICATION | null)[] | null
  Website: string | null
  Last_update: any | null
  Logo: (manufacturerQuery_node_data_Logo | null)[] | null
  Tech_Reps: (manufacturerQuery_node_data_Tech_Reps | null)[] | null
  Premium: boolean | null
  Premium_Manufacturers: (manufacturerQuery_node_data_Premium_Manufacturers | null)[] | null
}

export interface manufacturerQuery_node {
  recordId: string | null
  data: manufacturerQuery_node_data | null
}

export interface manufacturerQuery {
  node: manufacturerQuery_node | null
}

export interface manufacturerQueryVariables {
  id: string
}
