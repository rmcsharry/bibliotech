import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import { AboutPageQuery } from './__generated__/AboutPageQuery'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { style } from 'typestyle'
import { mq } from '../helpers/mq'
import { FluidObject } from 'gatsby-image'

interface IQuery {
  hero: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

const LibraryBackground = ({ className, children }) => {
  const data = useStaticQuery<IQuery>(graphql`
    query LibraryImageQuery {
      hero: file(relativePath: { eq: "library_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const heroImage = data.hero.childImageSharp.fluid

  return (
    <BackgroundImage Tag="section" className={className} fluid={heroImage} backgroundColor={`#040e18`}>
      {children}
    </BackgroundImage>
  )
}

const StyledLibraryBackground = styled(LibraryBackground)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledLibraryBackground
