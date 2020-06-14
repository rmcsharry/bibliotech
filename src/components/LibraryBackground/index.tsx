import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { FluidObject } from 'gatsby-image'
import { style } from 'typestyle'

const StyledOverlay = styled.div`
  position: relative;
  background-color: hsla(0, 0%, 0%, 0.4);
`
const BgImageStyle = style({
  paddingTop: '25px',
  paddingBottom: '30px',
})

interface IQuery {
  hero: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

const LibraryBackground = ({ children }) => {
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
    <StyledOverlay>
      <BackgroundImage
        Tag="section"
        className={BgImageStyle}
        fluid={heroImage}
        backgroundColor={`#040e18`}
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledOverlay>
  )
}

const StyledLibraryBackground = styled(LibraryBackground)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledLibraryBackground
