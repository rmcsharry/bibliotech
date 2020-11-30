import React from 'react'
import IEdge from '../../types/edge'
import Card from 'react-bootstrap/Card'
import Fade from 'react-bootstrap/Fade'
import labels from '../../content/site/labels'
import Classification from '../Classification'
import { style } from 'typestyle'
import Website from '../sections/website'
import TechReps from '../sections/tech-reps'
import FavoriteButton from '../favorite-button'

import StyledBackgroundImage from '../styled-background-image'
import ReturnFooter from './return-footer'
import PremiumSection from './premium-section'
import FeatureImages from './feature-images'

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
  const website = data.Website
  const techReps = data.Tech_Reps
  const isPremium = data.Premium

  const isFavorite = favorites?.findIndex(element => element === manufacturerId) >= 0

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
            {isPremium ? <FeatureImages premium={data.Premium_Manufacturers[0]}></FeatureImages> : ''}
            <Fade in={true} appear={true} timeout={1000}>
              <Card.Body style={{ minHeight: '6rem' }} className="mt-2">
                <Classification classifications={classifications} />
                <Website address={website} />
                <TechReps reps={techReps} />
                {isPremium ? <PremiumSection premium={data.Premium_Manufacturers[0]}></PremiumSection> : ''}
                <h6 className="small mb-0 text-right">Last updated</h6>
                <p className="small mb-0 text-right"> {data.Last_update}</p>
              </Card.Body>
            </Fade>
            <ReturnFooter></ReturnFooter>
          </Card>
        </div>
      </StyledBackgroundImage>
    </>
  )
}

export default LargeCard
