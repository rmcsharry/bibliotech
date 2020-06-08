/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ContactUsPageQuery
// ====================================================

export interface ContactUsPageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface ContactUsPageQuery_hero_childImageSharp {
  fluid: ContactUsPageQuery_hero_childImageSharp_fluid | null
}

export interface ContactUsPageQuery_hero {
  childImageSharp: ContactUsPageQuery_hero_childImageSharp | null
}

export interface ContactUsPageQuery {
  hero: ContactUsPageQuery_hero | null
}
