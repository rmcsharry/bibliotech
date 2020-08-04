import React from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import IEdge from '../types/edge'
import LargeCard from '../components/large-card'
import { withFirebase, withAuthentication } from '../contexts/firebase'
import { withFavorites } from '../contexts/favorites'

interface IPageQuery {
  data: IEdge
}

class ManufacturerTemplate extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    if (!this.props.authUser) {
      if (typeof window !== 'undefined') navigate('/sign_up')
      return null
    }

    return (
      <Layout location={this.props.location} title={this.props.data.node.data.Manufacturer}>
        <LargeCard node={this.props.data.node} favorites={this.props.favorites} />
      </Layout>
    )
  }
}

export default withFirebase(withAuthentication(withFavorites(ManufacturerTemplate)))

export const pageQuery = graphql`
  query manufacturerQuery($id: String!) {
    node: airtableManufacturer(recordId: { eq: $id }) {
      recordId
      data {
        Manufacturer
        MASTER_FORMAT_CLASSIFICATION {
          data {
            Section_Name
            Section_No
          }
        }
        Company_Description
        Website
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
        Tech_Reps {
          data {
            Email
            Technical_Rep_Name
            Cell_Number
          }
          recordId
        }
      }
    }
  }
`
