import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import labels from '../../content/site/labels'
import IEdge from '../../types/edge'
import { navigate } from 'gatsby'
import Classification from '../Classification'
import { style } from 'typestyle'
import SmallCardRestricted from './restricted'
import FavoriteButton from '../favorite-button'

const TitleStyle = style({
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.25rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

const CardStyle = style({
  width: '18rem',
  placeContent: 'flex-end',
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      boxShadow: '0 0.5rem 1rem rgba(40, 0, 0, 0.3) !important',
      transform: 'scale(1.05)',
      transition: '0.2s;',
    },
  },
})

function renderTooltip(props) {
  return (
    <Tooltip id={`tooltip-${props.name}`} {...props} style={{ zIndex: '9999' }}>
      {props.name}
    </Tooltip>
  )
}

interface IProps {
  isRestricted: boolean
  favorites: Array<string>
  isAlreadyFavorite: boolean
}

const SmallCard: React.FC<IEdge & IProps> = ({ node, isRestricted, favorites, isAlreadyFavorite }) => {
  const [isShowReverse, setShowReverse] = useState(false)
  const name = node.data.Manufacturer || labels.notAvailable
  const manufacturerId = node.recordId
  const thumbnail = node.data.Logo ? node.data.Logo[0].thumbnails?.full : null
  const classifications = node.data.MASTER_FORMAT_CLASSIFICATION
  const detailPage = `/manufacturer/${node.recordId}`

  const handleCardClick = e => {
    e.stopPropagation()
    if (isRestricted) {
      setShowReverse(true)
    } else if (typeof window !== 'undefined') navigate(detailPage)
  }

  const handleDismissClick = () => {
    setShowReverse(false)
  }

  return (
    <>
      <OverlayTrigger placement="top" delay={{ show: 100, hide: 100 }} overlay={renderTooltip({ name })}>
        <Card
          onClick={(event: React.MouseEvent<HTMLElement>) => handleCardClick(event)}
          className={`${CardStyle} card-small shadow bg-white m-2 m-md-3 m-xl-4`}
        >
          {isRestricted ? null : (
            <FavoriteButton
              manufacturerId={manufacturerId}
              favorites={favorites}
              isAlreadyFavorite={isAlreadyFavorite}
              alt="favourite button"
            />
          )}
          <div style={{ height: '14rem' }} className="mx-auto d-flex align-items-center">
            <Card.Img variant="top" src={thumbnail?.url} className="p-4 mw-100 mh-100" />
          </div>
          <Card.Body className="d-flex flex-column mt-2 justify-content-end">
            <Card.Title className={`${TitleStyle} font-weight-bold`}>{name}</Card.Title>
            <div className="d-flex flex-grow-1 flex-column mb-4 mt-2 px-1">
              <Classification classifications={classifications} />
            </div>
            <Button
              className="btn btn-primary"
              onClick={(event: React.MouseEvent<HTMLElement>) => handleCardClick(event)}
            >
              View Details
            </Button>
          </Card.Body>
          {isShowReverse ? <SmallCardRestricted dismissCallback={() => handleDismissClick()} /> : null}
        </Card>
      </OverlayTrigger>
    </>
  )
}

export default SmallCard
