/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SignUpBgImageQuery
// ====================================================

export interface SignUpBgImageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface SignUpBgImageQuery_hero_childImageSharp {
  fluid: SignUpBgImageQuery_hero_childImageSharp_fluid | null
}

export interface SignUpBgImageQuery_hero {
  childImageSharp: SignUpBgImageQuery_hero_childImageSharp | null
}

export interface SignUpBgImageQuery {
  hero: SignUpBgImageQuery_hero | null
}
