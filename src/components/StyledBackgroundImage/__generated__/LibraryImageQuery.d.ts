/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LibraryImageQuery
// ====================================================

export interface LibraryImageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface LibraryImageQuery_hero_childImageSharp {
  fluid: LibraryImageQuery_hero_childImageSharp_fluid | null
}

export interface LibraryImageQuery_hero {
  childImageSharp: LibraryImageQuery_hero_childImageSharp | null
}

export interface LibraryImageQuery {
  hero: LibraryImageQuery_hero | null
}
