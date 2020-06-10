import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import BgImage from '../components/BgImage'
import { NoFavoritesPageQuery } from './__generated__/NoFavoritesPageQuery'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  max-height: calc(100vh + 155px);
  background: transparent;
  padding: 2rem;
  margin: 150px auto 0;
  text-align: center;
  h1 {
    color: white;
    font-weight: 400;
    text-transform: none;
  }
`
const StyledReturnContainer = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
`

interface IPageQuery {
  data: NoFavoritesPageQuery
}

class NoFavorites extends React.Component<IPageQuery> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    const { data } = this.props
    const heroImage = data?.hero?.childImageSharp

    return (
      <>
        <Layout title={'About Us'}>
          <BgImage
            fluid={heroImage.fluid}
            title={'Welcome to Bibliotech'}
            height={'calc(100vh - 155px)'}
            mobileHeight={'calc(100vh + 155px)'}
            overlayColor={'hsla(0, 0%, 0%, 0.5)'}
          >
            <StyledContainer>
              <h1>Ooops! :(</h1>
              <h1>It doesn't look like you've saved any favorites. </h1>
              <h1>
                Bummer. Click on the star (⭐) icon at the top right of any card to add it to your favorites library
              </h1>
            </StyledContainer>
            <StyledReturnContainer>
              <Link to="/manufacturers" className="btn btn-primary">
                Return to the Library
              </Link>
            </StyledReturnContainer>
          </BgImage>
        </Layout>
      </>
    )
  }
}

export default NoFavorites

export const pageQuery = graphql`
  query NoFavoritesPageQuery {
    hero: file(relativePath: { eq: "no_favorites_bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1180, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
