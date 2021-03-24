/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DesktopLogoQuery
// ====================================================

export interface DesktopLogoQuery_logo_childImageSharp_fixed {
  base64: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
}

export interface DesktopLogoQuery_logo_childImageSharp {
  fixed: DesktopLogoQuery_logo_childImageSharp_fixed | null;
}

export interface DesktopLogoQuery_logo {
  childImageSharp: DesktopLogoQuery_logo_childImageSharp | null;
}

export interface DesktopLogoQuery {
  logo: DesktopLogoQuery_logo | null;
}
