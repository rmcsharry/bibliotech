import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import { style } from 'typestyle'
import { BackgroundImageQuery } from './__generated__/BackgroundImageQuery'

const StyledOverlay = styled.div`
  position: relative;
  background-color: hsla(0, 0%, 0%, 0.4);
`
const BgImageStyle = style({
  paddingTop: '35px',
  paddingBottom: '45px',
})

const Background = ({ children, imageName }) => {
  const data = useStaticQuery<BackgroundImageQuery>(graphql`
    query BackgroundImageQuery {
      library: file(relativePath: { eq: "library_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100, srcSetBreakpoints: [300, 1180]) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      coffee: file(relativePath: { eq: "coffee_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100, srcSetBreakpoints: [300, 1180]) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      swatches: file(relativePath: { eq: "swatches_bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1180, quality: 100, srcSetBreakpoints: [300, 1180]) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  let heroImage = null
  switch (imageName) {
    case 'library':
      heroImage = data.library.childImageSharp.fluid
      break
    case 'coffee':
      heroImage = data.coffee.childImageSharp.fluid
      break
    case 'swatches':
      heroImage = data.swatches.childImageSharp.fluid
      break
    default:
      heroImage = data.library.childImageSharp.fluid
  }

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

const StyledBackgroundImage = styled(Background)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledBackgroundImage
