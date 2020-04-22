/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BioQuery
// ====================================================

export interface BioQuery_avatar_childImageSharp_fixed {
  base64: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export interface BioQuery_avatar_childImageSharp {
  fixed: BioQuery_avatar_childImageSharp_fixed | null
}

export interface BioQuery_avatar {
  childImageSharp: BioQuery_avatar_childImageSharp | null
}

export interface BioQuery {
  avatar: BioQuery_avatar | null
}
