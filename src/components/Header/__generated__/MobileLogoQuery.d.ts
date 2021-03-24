/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MobileLogoQuery
// ====================================================

export interface MobileLogoQuery_logoMobile_childImageSharp_fixed {
  base64: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
}

export interface MobileLogoQuery_logoMobile_childImageSharp {
  fixed: MobileLogoQuery_logoMobile_childImageSharp_fixed | null;
}

export interface MobileLogoQuery_logoMobile {
  childImageSharp: MobileLogoQuery_logoMobile_childImageSharp | null;
}

export interface MobileLogoQuery {
  logoMobile: MobileLogoQuery_logoMobile | null;
}
