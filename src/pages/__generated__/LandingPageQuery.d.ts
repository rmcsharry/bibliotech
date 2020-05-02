/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LandingPageQuery
// ====================================================

export interface LandingPageQuery_site_siteMetadata {
  title: string | null
}

export interface LandingPageQuery_site {
  siteMetadata: LandingPageQuery_site_siteMetadata | null
}

export interface LandingPageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface LandingPageQuery_hero_childImageSharp {
  fluid: LandingPageQuery_hero_childImageSharp_fluid | null
}

export interface LandingPageQuery_hero {
  childImageSharp: LandingPageQuery_hero_childImageSharp | null
}

export interface LandingPageQuery {
  site: LandingPageQuery_site | null
  hero: LandingPageQuery_hero | null
}
