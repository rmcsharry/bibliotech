/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface AboutPageQuery_hero_childImageSharp {
  fluid: AboutPageQuery_hero_childImageSharp_fluid | null
}

export interface AboutPageQuery_hero {
  childImageSharp: AboutPageQuery_hero_childImageSharp | null
}

export interface AboutPageQuery {
  hero: AboutPageQuery_hero | null
}
