/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ImageQuery
// ====================================================

export interface ImageQuery_library_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface ImageQuery_library_childImageSharp {
  fluid: ImageQuery_library_childImageSharp_fluid | null
}

export interface ImageQuery_library {
  childImageSharp: ImageQuery_library_childImageSharp | null
}

export interface ImageQuery_coffee_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface ImageQuery_coffee_childImageSharp {
  fluid: ImageQuery_coffee_childImageSharp_fluid | null
}

export interface ImageQuery_coffee {
  childImageSharp: ImageQuery_coffee_childImageSharp | null
}

export interface ImageQuery {
  library: ImageQuery_library | null
  coffee: ImageQuery_coffee | null
}
