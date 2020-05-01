import React from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import IEdge from '../types/edge'
import LargeCard from '../components/LargeCard'
import { withFirebase, withAuthentication } from '../components/FirebaseProvider'

interface IPageQuery {
  data: IEdge
}

class ManufacturerTemplate extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    if (!this.props.authUser) {
      navigate('/')
      return null
    }

    return (
      <Layout location={this.props.location} title={'Manufacturer Details'}>
        <div className="d-flex mt-4 justify-content-center">
          <LargeCard node={this.props.data.node} />
        </div>
      </Layout>
    )
  }
}

export default withFirebase(withAuthentication(ManufacturerTemplate))

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
