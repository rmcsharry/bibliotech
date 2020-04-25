import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import IPageProps from '../types/page-props'
import IEdge from '../types/edge'
import Card from 'react-bootstrap/Card'
import labels from '../../content/site/labels'
import Classification from '../components/Classification'

interface IPageQuery {
  data: IEdge
}

const TitleStyle = {
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.25rem',
}

class ManufacturerTemplate extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props.data.node
    const name = data.Manufacturer || labels.notAvailable
    const thumbnail = data.Logo ? data.Logo[0].thumbnails?.full : null
    const classifications = data.MASTER_FORMAT_CLASSIFICATION
    const title = 'Manufacturer Details'
    const description = data.Company_Description
    const website = data.Website

    console.log('DATA', data)
    return (
      <Layout location={this.props.location} title={title}>
        <div className="d-flex mt-4 justify-content-center">
          <Card className="p-2 p-sm-2 p-md-4 shadow" style={{ width: '36rem' }}>
            <Card.Img variant="top" src={thumbnail?.url} className="p-4 mb-5 w-50 mx-auto" style={{ width: '20rem' }} />
            <Card.Title className="font-weight-bold" style={TitleStyle}>
              {name}
            </Card.Title>
            <Card.Body style={{ minHeight: '6rem' }} className="mt-2">
              <Classification classifications={classifications} />
              {description ? (
                <>
                  <h6>Description</h6>
                  <p className="pl-4">{description}</p>
                </>
              ) : null}
              <h6>Website</h6>
              <p className="pl-4">{website}</p>
            </Card.Body>
          </Card>
        </div>
      </Layout>
    )
  }
}

export default ManufacturerTemplate

// MAKE THE BELOW INTO A COMPONENT for next/prev nav

// <ul
//             style={{
//               display: `flex`,
//               flexWrap: `wrap`,
//               justifyContent: `space-between`,
//               listStyle: `none`,
//               padding: 0,
//             }}
//           >
//             <li>
//               {previous?.node && (
//                 <Link to={previous.node.fields.slug} rel="prev">
//                   ← {previous.node.frontmatter.title}
//                 </Link>
//               )}
//             </li>
//             <li>
//               {next && (
//                 <Link to={next.node.fields.slug} rel="next">
//                   {next.node.frontmatter.title} →
//                 </Link>
//               )}
//             </li>
//           </ul>

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
            Phone_no___Cell_
          }
          recordId
        }
      }
    }
  }
`
