import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import Row from 'react-bootstrap/Row'
import { ManufacturersPageQuery } from './__generated__/ManufacturersPageQuery'
import ManufacturerCard from '../components/SmallCard'
import IEdge from '../types/edge'

class Manufacturers extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props
    const manufacturers: IEdge[] = (data?.allAirtableManufacturer?.edges as IEdge[]) || []

    return (
      <Layout location={this.props.location} title="Manufacturers">
        <Row className="justify-content-center">
          {manufacturers.map(({ node }) => {
            return <ManufacturerCard node={node} key={node.recordId} />
          })}
        </Row>
      </Layout>
    )
  }
}

export default Manufacturers

interface IPageQuery {
  data: ManufacturersPageQuery
}

export const pageQuery = graphql`
  query ManufacturersPageQuery {
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
            Manufacturer
            Logo {
              thumbnails {
                full {
                  height
                  url
                  width
                }
              }
            }
            MASTER_FORMAT_CLASSIFICATION {
              data {
                Section_Name
                Section_No
              }
            }
          }
        }
      }
    }
  }
`
