import React from 'react'
import { Link, graphql, navigate } from 'gatsby'

import Layout from '../components/Layout/'
import IPageProps from '../types/page-props'
import labels from '../../content/site/labels'
import { LandingPageQuery } from './__generated__/LandingPageQuery'
import { withAuthentication, withFirebase } from '../Contexts/Firebase'
import heroImage from './bookshelf.jpg'
import ManufacturerList from '../components/ManufacturerList'
import RestrictedModal from '../components/RestrictedModal'

class LandingPage extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props

    const siteTitle: string = data?.site?.siteMetadata?.title || labels.notAvailable

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        authUser={this.props.authUser}
        firebase={this.props.firebase}
      >
        <RestrictedModal />
        <img src={heroImage} className="w-100 mb-4 heroImage" />
        <ManufacturerList isRestricted={true} />
      </Layout>
    )
  }
}

export default withFirebase(withAuthentication(LandingPage))

interface IPageQuery {
  data: LandingPageQuery
}

export const pageQuery = graphql`
  query LandingPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
