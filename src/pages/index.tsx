import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/'
import IPageProps from '../types/page-props'
import labels from '../content/site/labels'
import { LandingPageQuery } from './__generated__/LandingPageQuery'
import { withFirebase } from '../firebase'
import Home from '../components/Home'

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
    const { data } = this.props

    const siteTitle: string = data?.site?.siteMetadata?.title || labels.notAvailable

    return (
      <div>
        <Layout location={this.props.location} title={siteTitle} authUser={null} firebase={this.props.firebase}>
          <Home></Home>
        </Layout>
      </div>
    )
  }
}

export default withFirebase(LandingPage)

export const pageQuery = graphql`
  query LandingPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
