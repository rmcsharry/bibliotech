import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Row from 'react-bootstrap/Row'
import SmallCard from '../SmallCard'
import IEdge from '../../types/edge'
import Container from 'react-bootstrap/Container'
import { withFavourites } from '../../contexts/Favourites'

interface IQuery {
  firms: {
    edges: [IEdge]
  }
}

interface IProps {
  isRestricted: boolean
  favourites: Array<string>
}

const ManufacturerList: React.FC<IProps> = ({ isRestricted, favourites }) => {
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

  const list = manufacturers.map(({ node }) => {
    let isFavourite = false
    if (favourites.findIndex(element => element === node.recordId) >= 0) {
      isFavourite = true
    }
    return (
      <SmallCard
        node={node}
        key={node.recordId}
        isRestricted={isRestricted}
        favourites={favourites}
        isAlreadyFavourite={isFavourite}
      />
    )
  })

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">{list}</Row>
    </Container>
  )
}

export default withFavourites(ManufacturerList)
