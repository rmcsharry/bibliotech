import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { IPageProps } from '../types/page-props'

class NotFoundPage extends React.Component<IQueryProps & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={`404: Not Found`} />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

interface IQueryProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
