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
  Phone_no___Cell_: string | null
}

export interface manufacturerQuery_node_data_Tech_Reps {
  data: manufacturerQuery_node_data_Tech_Reps_data | null
  recordId: string | null
}

export interface manufacturerQuery_node_data {
  Manufacturer: string | null
  MASTER_FORMAT_CLASSIFICATION: (manufacturerQuery_node_data_MASTER_FORMAT_CLASSIFICATION | null)[] | null
  Company_Description: string | null
  Date_created: any | null
  Logo: (manufacturerQuery_node_data_Logo | null)[] | null
  Tech_Reps: (manufacturerQuery_node_data_Tech_Reps | null)[] | null
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
