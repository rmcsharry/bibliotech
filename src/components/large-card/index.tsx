import React from 'react'
import { navigate } from 'gatsby'

import IEdge from '../../types/edge'
import Card from 'react-bootstrap/Card'
import Fade from 'react-bootstrap/Fade'
import labels from '../../content/site/labels'
import Classification from '../Classification'
import { style } from 'typestyle'
import BodySection from '../body-section'
import Website from '../body-sections/website'
import TechReps from '../body-sections/tech-reps'
import FavoriteButton from '../favorite-button'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { CaretLeftFill } from 'react-bootstrap-icons/'
import StyledBackgroundImage from '../styled-background-image'

const TitleStyle = style({
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.5rem',
})

interface IProps {
  favorites: Array<string>
}

const LargeCard: React.FC<IEdge & IProps> = ({ node, favorites }) => {
  const { data } = node
  const name = data.Manufacturer || labels.notAvailable
  const manufacturerId = node.recordId
  const thumbnail = data.Logo ? data.Logo[0].thumbnails?.full : null
  const classifications = data.MASTER_FORMAT_CLASSIFICATION
  const description = data.Company_Description
  const website = data.Website
  const techReps = data.Tech_Reps

  const isFavorite = favorites?.findIndex(element => element === manufacturerId) >= 0

  const go = destination => {
    if (typeof window !== 'undefined') navigate(destination)
  }

  return (
    <>
      <StyledBackgroundImage imageName="library">
        <div className="d-flex mt-4 p-3 justify-content-center" style={{ padding: '60px 0' }}>
          <Card className="p-3 p-sm-3 p-md-4 shadow" style={{ width: '36rem', opacity: 0.92 }}>
            <FavoriteButton
              manufacturerId={manufacturerId}
              favorites={favorites}
              isAlreadyFavorite={isFavorite}
              alt="favorite button"
            />
            <img src={thumbnail?.url} className="p-4 mb-5 w-50 mx-auto" />
            <Card.Title className={`${TitleStyle} font-weight-bold`}>{name}</Card.Title>
            <Fade in={true} appear={true} timeout={1000}>
              <Card.Body style={{ minHeight: '6rem' }} className="mt-2">
                <Classification classifications={classifications} />
                {description ? (
                  <BodySection title={'Description'}>
                    <p className="pl-4">{description}</p>
                  </BodySection>
                ) : null}
                <Website address={website} />
                <TechReps reps={techReps} />
                <h6 className="small mb-0 text-right">Last updated</h6>
                <p className="small mb-0 text-right"> {data.Last_update}</p>
              </Card.Body>
            </Fade>
            <Row>
              <Col className="text-center">
                <Button className="ml-4" onClick={() => go('/manufacturers')}>
                  <CaretLeftFill style={{ marginTop: '-5px', marginRight: '2px' }} />
                  RETURN TO THE LIBRARY
                </Button>
              </Col>
            </Row>
          </Card>
        </div>
      </StyledBackgroundImage>
    </>
  )
}

export default LargeCard
