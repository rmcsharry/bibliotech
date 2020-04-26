import React from 'react'
import IEdge from '../../types/edge'
import Card from 'react-bootstrap/Card'
import Fade from 'react-bootstrap/Fade'
import labels from '../../../content/site/labels'
import Classification from '../Classification'
import { style } from 'typestyle'
import BodySection from '../BodySection'
import Website from '../BodySections/Website'
import TechReps from '../BodySections/TechReps'

const TitleStyle = style({
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.5rem',
})

const LargeCard: React.FC<IEdge> = ({ node }) => {
  const { data } = node
  const name = data.Manufacturer || labels.notAvailable
  const thumbnail = data.Logo ? data.Logo[0].thumbnails?.full : null
  const classifications = data.MASTER_FORMAT_CLASSIFICATION
  const description = data.Company_Description
  const website = data.Website
  const techReps = data.Tech_Reps

  return (
    <>
      <Card className="p-3 p-sm-3 p-md-4 shadow" style={{ width: '36rem' }}>
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
          </Card.Body>
        </Fade>
      </Card>
    </>
  )
}

export default LargeCard