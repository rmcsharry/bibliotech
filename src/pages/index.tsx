import React from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../components/Layout/'
import IPageProps from '../types/page-props'
import labels from '../content/site/labels'
import { LandingPageQuery } from './__generated__/LandingPageQuery'
import { withAuthentication, withFirebase } from '../contexts/Firebase'
import ManufacturerList from '../components/ManufacturerList'
import PageTitle from '../components/PageTitle'
import styled from '@emotion/styled'
import BgImage from '../components/BgImage'

const StyledTitle = styled.h2`
  position: absolute;
  top: 45%;
  left: 10%;
  color: white;
  text-transform: capitalize;
`
const StyledSubTitle = styled.h5`
  position: absolute;
  top: 54%;
  left: 10%;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
`

interface IProps extends IPageProps {
  listRef: any
}

interface IPageQuery {
  data: LandingPageQuery
}

class LandingPage extends React.Component<IPageQuery & IProps> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    const { data, authUser } = this.props
    if (authUser) {
      if (typeof window !== 'undefined') navigate('/manufacturers')
      return null
    }
    const siteTitle: string = data?.site?.siteMetadata?.title || labels.notAvailable
    const heroImage = data?.hero?.childImageSharp

    return (
      <div>
        <Layout
          location={this.props.location}
          title={siteTitle}
          authUser={this.props.authUser}
          firebase={this.props.firebase}
        >
          <BgImage
            fluid={heroImage.fluid}
            title={'Welcome to Bibliotech'}
            height={'800px'}
            mobileHeight={'400px'}
            overlayColor={'hsla(0, 0%, 0%, 0.5)'}
          >
            <StyledTitle>Welcome to Bibliotech</StyledTitle>
            <StyledSubTitle>Your digital architectural library</StyledSubTitle>
          </BgImage>
          <PageTitle title="Manufacturers" />
          <ManufacturerList isRestricted={authUser ? false : true} />
        </Layout>
      </div>
    )
  }
}

export default withFirebase(withAuthentication(LandingPage))

export const pageQuery = graphql`
  query LandingPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(relativePath: { eq: "landing_bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1180) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
