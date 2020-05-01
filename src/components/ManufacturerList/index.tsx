import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Row from 'react-bootstrap/Row'
import ManufacturerCard from '../SmallCard'
import IEdge from '../../types/edge'

interface IQuery {
  firms: {
    edges: [IEdge]
  }
}

interface IProps {
  isRestricted: boolean
}

const ManufacturerList: React.FC<IProps> = ({ isRestricted }) => {
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
    <Row className="justify-content-center">
      {manufacturers.map(({ node }) => {
        return <ManufacturerCard node={node} key={node.recordId} isRestricted={isRestricted} />
      })}
    </Row>
  )
}

export default ManufacturerList
