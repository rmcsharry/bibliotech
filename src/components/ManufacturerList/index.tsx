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
  onlyFavorites: boolean
}

const ManufacturerList: React.FC<IProps> = ({ isRestricted, favorites, onlyFavorites }) => {
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

  const list = manufacturers
    .map(({ node }) => {
      let isFavorite = false
      if (favorites?.findIndex(element => element === node.recordId) >= 0) {
        isFavorite = true
      }
      if (onlyFavorites) {
        if (!isFavorite) return null
        return (
          <SmallCard
            node={node}
            key={node.recordId}
            isRestricted={isRestricted}
            favorites={favorites}
            isAlreadyFavorite={isFavorite}
          />
        )
      } else {
        return (
          <SmallCard
            node={node}
            key={node.recordId}
            isRestricted={isRestricted}
            favorites={favorites}
            isAlreadyFavorite={isFavorite}
          />
        )
      }
    })
    .filter(element => element !== null)

  return (
    <Container fluid>
      {list.length > 0 ? (
        <Row className="justify-content-center mt-4">{list}</Row>
      ) : (
        <p>You have not saved any favorites. Click the heart in the top right of any card to save a favorite.</p>
      )}
    </Container>
  )
}

export default withFavorites(ManufacturerList)
