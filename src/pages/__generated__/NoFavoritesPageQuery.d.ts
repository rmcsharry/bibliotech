/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NoFavoritesPageQuery
// ====================================================

export interface NoFavoritesPageQuery_hero_childImageSharp_fluid {
  tracedSVG: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export interface NoFavoritesPageQuery_hero_childImageSharp {
  fluid: NoFavoritesPageQuery_hero_childImageSharp_fluid | null
}

export interface NoFavoritesPageQuery_hero {
  childImageSharp: NoFavoritesPageQuery_hero_childImageSharp | null
}

export interface NoFavoritesPageQuery {
  hero: NoFavoritesPageQuery_hero | null
}
