import React from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'

import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import Row from 'react-bootstrap/Row'
import ManufacturerCard from '../components/SmallCard'
import IEdge from '../types/edge'
import { withFirebase, withAuthentication } from '../components/FirebaseProvider'

interface IQuery {
  firms: {
    edges: [IEdge]
  }
}

const Manufacturers: React.FC<IPageProps> = ({ authUser }) => {
  if (!authUser) {
    navigate('/')
    return null
  }

  const data = useStaticQuery<IQuery>(graphql`
    query ManufacturersPageQuery {
      firms: allAirtableManufacturer {
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
  `)

  const manufacturers: IEdge[] = (data?.firms.edges as IEdge[]) || []

  return (
    <Layout title="Manufacturers">
      <Row className="justify-content-center">
        {manufacturers.map(({ node }) => {
          return <ManufacturerCard node={node} key={node.recordId} />
        })}
      </Row>
    </Layout>
  )
}

export default withFirebase(withAuthentication(Manufacturers))
