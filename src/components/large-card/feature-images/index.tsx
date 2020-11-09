import React from 'react'
import Row from 'react-bootstrap/Row'
import { IPremium } from '../../../types/edge'

interface IProps {
  premium: IPremium
}

const FeatureImage: React.FC<IProps> = ({ premium }) => {
  if (!premium.data) return null

  const thumbnails = premium.data.Feature_Images?.map((item, index) => {
    return (
      <img
        key={`feature-image-${index}`}
        className="p-2 mb-1 w-50 mx-auto"
        src={item.thumbnails.large.url}
        alt={`company image ${index}`}
      ></img>
    )
  })

  return <Row>{thumbnails}</Row>
}

export default FeatureImage
