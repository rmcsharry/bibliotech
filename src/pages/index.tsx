import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/'
import SEO from '../components/SEO/'
import { IPageProps } from '../types/page-props'
import labels from '../../content/site/labels'
import { HomePageQuery } from './__generated__/HomePageQuery'

class BlogIndex extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props

    const siteTitle: string = data?.site?.siteMetadata?.title || labels.notAvailable

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <Link to="manufacturers">View Manufacturer List</Link>
      </Layout>
    )
  }
}

export default BlogIndex

interface IPageQuery {
  data: HomePageQuery
}

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
