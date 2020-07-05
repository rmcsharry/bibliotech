/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LogoQuery
// ====================================================

export interface LogoQuery_logo_childImageSharp_fixed {
  base64: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export interface LogoQuery_logo_childImageSharp {
  fixed: LogoQuery_logo_childImageSharp_fixed | null
}

export interface LogoQuery_logo {
  childImageSharp: LogoQuery_logo_childImageSharp | null
}

export interface LogoQuery_logoMobile_childImageSharp_fixed {
  base64: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export interface LogoQuery_logoMobile_childImageSharp {
  fixed: LogoQuery_logoMobile_childImageSharp_fixed | null
}

export interface LogoQuery_logoMobile {
  childImageSharp: LogoQuery_logoMobile_childImageSharp | null
}

export interface LogoQuery {
  logo: LogoQuery_logo | null
  logoMobile: LogoQuery_logoMobile | null
}
