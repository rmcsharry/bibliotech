import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/'
import SEO from '../components/SEO/'
import IPageProps from '../types/page-props'
import Row from 'react-bootstrap/Row'
import labels from '../../content/site/labels'
import { ManufacturerListPageQuery } from './__generated__/ManufacturerListPageQuery'
import ManufacturerCard from '../components/ManufacturerCard'
import IEdge from '../types/edge'

class ManufacturerList extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props
    const manufacturers: IEdge[] = data?.allAirtableManufacturer?.edges || []

    return (
      <Layout location={this.props.location} title="Manufacturers">
        <Row className="mx-auto justify-content-center">
          {manufacturers.map(({ node }) => {
            return <ManufacturerCard node={node} key={node.recordId} />
          })}
        </Row>
      </Layout>
    )
  }
}

export default ManufacturerList

interface IPageQuery {
  data: ManufacturerListPageQuery
}

export const pageQuery = graphql`
  query ManufacturerListPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allAirtableManufacturer {
      edges {
        node {
          recordId
          data {
            Last_update
            Logo {
              thumbnails {
                full {
                  height
                  url
                  width
                }
              }
            }
            Manufacturer
            Rep_s_email
          }
        }
      }
    }
  }
`