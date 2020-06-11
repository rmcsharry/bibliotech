/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BgImageQuery
// ====================================================

export interface BgImageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface BgImageQuery_hero_childImageSharp {
  fluid: BgImageQuery_hero_childImageSharp_fluid | null
}

export interface BgImageQuery_hero {
  childImageSharp: BgImageQuery_hero_childImageSharp | null
}

export interface BgImageQuery {
  hero: BgImageQuery_hero | null
}
