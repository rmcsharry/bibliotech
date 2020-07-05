/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PrivacyPageQuery
// ====================================================

export interface PrivacyPageQuery_content_data_Attachments {
  filename: string | null
  type: string | null
  url: string | null
}

export interface PrivacyPageQuery_content_data {
  Attachments: (PrivacyPageQuery_content_data_Attachments | null)[] | null
  Name: string | null
  Content: string | null
}

export interface PrivacyPageQuery_content {
  data: PrivacyPageQuery_content_data | null
}

export interface PrivacyPageQuery {
  content: PrivacyPageQuery_content | null
}
