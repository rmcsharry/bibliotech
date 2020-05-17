import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Row from 'react-bootstrap/Row'
import SmallCard from '../SmallCard'
import IEdge from '../../types/edge'
import Container from 'react-bootstrap/Container'
import { withFavorites } from '../../contexts/Favorites'

interface IQuery {
  firms: {
    edges: [IEdge]
  }
}

interface IProps {
  isRestricted: boolean
  favorites: Array<string>
}

const ManufacturerList: React.FC<IProps> = ({ isRestricted, favorites }) => {
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
    let isFavorite = false
    if (favorites?.findIndex(element => element === node.recordId) >= 0) {
      isFavorite = true
    }
    return (
      <SmallCard
        node={node}
        key={node.recordId}
        isRestricted={isRestricted}
        favorites={favorites}
        isAlreadyFavorite={isFavorite}
      />
    )
  })

  return (
    <Container fluid>
      <Row className="justify-content-center mt-4">{list}</Row>
    </Container>
  )
}

export default withFavorites(ManufacturerList)
