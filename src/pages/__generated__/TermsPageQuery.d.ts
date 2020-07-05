/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TermsPageQuery
// ====================================================

export interface TermsPageQuery_content_data_Attachments {
  filename: string | null
  type: string | null
  url: string | null
}

export interface TermsPageQuery_content_data {
  Attachments: (TermsPageQuery_content_data_Attachments | null)[] | null
  Name: string | null
  Content: string | null
}

export interface TermsPageQuery_content {
  data: TermsPageQuery_content_data | null
}

export interface TermsPageQuery {
  content: TermsPageQuery_content | null
}
