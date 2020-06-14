/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SignInBgImageQuery
// ====================================================

export interface SignInBgImageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface SignInBgImageQuery_hero_childImageSharp {
  fluid: SignInBgImageQuery_hero_childImageSharp_fluid | null
}

export interface SignInBgImageQuery_hero {
  childImageSharp: SignInBgImageQuery_hero_childImageSharp | null
}

export interface SignInBgImageQuery {
  hero: SignInBgImageQuery_hero | null
}
