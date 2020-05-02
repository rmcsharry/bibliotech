import React from 'react'
import { graphql, navigate } from 'gatsby'

import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import IEdge from '../types/edge'
import LargeCard from '../components/LargeCard'
import { withFirebase, withAuthentication } from '../Contexts/Firebase'
import PageTitle from '../components/PageTitle'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CaretLeftFill } from 'react-bootstrap-icons/'
import Container from 'react-bootstrap/Container'

interface IPageQuery {
  data: IEdge
}

class ManufacturerTemplate extends React.Component<IPageQuery & IPageProps> {
  go = destination => {
    if (typeof window !== 'undefined') navigate(destination)
  }

  render(): JSX.Element {
    if (!this.props.authUser) {
      if (typeof window !== 'undefined') navigate('/')
      return null
    }

    return (
      <Layout location={this.props.location} title={this.props.data.node.data.Manufacturer}>
        <Container fluid>
          <Row style={{ marginTop: '50px' }}>
            <Col>
              <Button className="ml-4" onClick={() => this.go('/manufacturers')}>
                <CaretLeftFill style={{ marginTop: '-2px', marginRight: '2px' }} />
                BACK
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <PageTitle title="Manufacturer Details" />
          </Row>
          <div className="d-flex mt-4 justify-content-center">
            <LargeCard node={this.props.data.node} />
          </div>
        </Container>
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
