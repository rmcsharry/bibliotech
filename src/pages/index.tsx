import React from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'

import Layout from '../components/Layout/'
import IPageProps from '../types/page-props'
import labels from '../content/site/labels'
import { LandingPageQuery } from './__generated__/LandingPageQuery'
import { withAuthentication, withFirebase } from '../Contexts/Firebase'
import Img from 'gatsby-image'
import ManufacturerList from '../components/ManufacturerList'
import PageTitle from '../components/PageTitle'

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
      navigate('/manufacturers')
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
          {heroImage ? <Img alt={`Hero image`} fluid={heroImage.fluid} /> : ''}
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
    hero: file(relativePath: { eq: "bookshelf.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1180) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
