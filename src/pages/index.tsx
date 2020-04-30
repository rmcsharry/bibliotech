import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/'
import IPageProps from '../types/page-props'
import labels from '../../content/site/labels'
import { LandingPageQuery } from './__generated__/LandingPageQuery'

class LandingPage extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props

    const siteTitle: string = data?.site?.siteMetadata?.title || labels.notAvailable
    console.log('LANDIN PAGE', location)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Link to="manufacturers">View Manufacturer List</Link>
      </Layout>
    )
  }
}

export default LandingPage

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
