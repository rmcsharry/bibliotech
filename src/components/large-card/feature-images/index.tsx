import React from 'react'
import styled from '@emotion/styled'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { navigate } from 'gatsby'
import Image from 'gatsby-image'
import { IPremium, IThumbnail } from '../../../types/edge'

interface IProps {
  premium: IPremium
}

const FeatureImage: React.FC<IProps> = ({ premium }) => {
  console.log('here', premium)
  if (!premium.data) return null

  const thumbnails = premium.data.Feature_Images?.map((item, index) => {
    return (
      <>
        <img className="p-2 mb-1 w-50 mx-auto" src={item.thumbnails.large.url} alt={`company image ${index}`}></img>
      </>
    )
  })

  return <Row>{thumbnails}</Row>
}

export default FeatureImage
