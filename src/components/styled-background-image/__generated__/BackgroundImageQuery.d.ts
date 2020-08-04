/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BackgroundImageQuery
// ====================================================

export interface BackgroundImageQuery_library_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface BackgroundImageQuery_library_childImageSharp {
  fluid: BackgroundImageQuery_library_childImageSharp_fluid | null
}

export interface BackgroundImageQuery_library {
  childImageSharp: BackgroundImageQuery_library_childImageSharp | null
}

export interface BackgroundImageQuery_coffee_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface BackgroundImageQuery_coffee_childImageSharp {
  fluid: BackgroundImageQuery_coffee_childImageSharp_fluid | null
}

export interface BackgroundImageQuery_coffee {
  childImageSharp: BackgroundImageQuery_coffee_childImageSharp | null
}

export interface BackgroundImageQuery_swatches_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface BackgroundImageQuery_swatches_childImageSharp {
  fluid: BackgroundImageQuery_swatches_childImageSharp_fluid | null
}

export interface BackgroundImageQuery_swatches {
  childImageSharp: BackgroundImageQuery_swatches_childImageSharp | null
}

export interface BackgroundImageQuery {
  library: BackgroundImageQuery_library | null
  coffee: BackgroundImageQuery_coffee | null
  swatches: BackgroundImageQuery_swatches | null
}
