/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_content_fields_markdownContent_childMarkdownRemark {
  html: string | null;
}

export interface AboutPageQuery_content_fields_markdownContent {
  childMarkdownRemark: AboutPageQuery_content_fields_markdownContent_childMarkdownRemark | null;
}

export interface AboutPageQuery_content_fields {
  markdownContent: AboutPageQuery_content_fields_markdownContent | null;
}

export interface AboutPageQuery_content {
  fields: AboutPageQuery_content_fields | null;
}

export interface AboutPageQuery {
  content: AboutPageQuery_content | null;
}
