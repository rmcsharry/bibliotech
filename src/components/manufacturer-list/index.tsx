import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Row from 'react-bootstrap/Row'
import SmallCard from '../small-card'
import IEdge from '../../types/edge'
import Container from 'react-bootstrap/Container'
import { withFavorites } from '../../favorites'
import styled from '@emotion/styled'
import NoFavorites from '../no-favorites'
import FavoritesHeader from '../favorites-header'

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

const StyledContainer = styled(Container)`
  margin-top: 70px;
`

const ManufacturerList: React.FC<IProps> = ({ isRestricted, favorites, onlyFavorites }) => {
  const data = useStaticQuery<IQuery>(graphql`
    query ManufacturersPageQuery {
      firms: allAirtableManufacturer(sort: { fields: data___Manufacturer, order: ASC }) {
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
              Premium
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

  if (onlyFavorites && list.length === 0) {
    if (typeof window !== 'undefined') return <NoFavorites></NoFavorites>
  }

  return (
    <>
      {onlyFavorites ? (
        <Container fluid>
          <FavoritesHeader></FavoritesHeader>
          <Row className="justify-content-center mt-4">{list}</Row>
        </Container>
      ) : (
        <StyledContainer fluid>
          <Row className="justify-content-center mt-4">{list}</Row>
        </StyledContainer>
      )}
    </>
  )
}

export default withFavorites(ManufacturerList)
