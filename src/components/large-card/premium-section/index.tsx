import React from 'react'

import { IPremium } from '../../../types/edge'
import { style } from 'typestyle'
import Markdown from 'markdown-to-jsx'

const TitleStyle = style({
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.5rem',
})

import styled from '@emotion/styled'
// import { mq } from '../../helpers/mq'

const StyledTitle = styled.h6`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0.5rem 0.5rem;
`

interface IProps {
  premium: IPremium
}

const PremiumSection: React.FC<IProps> = ({ premium }) => {
  console.log('PREMIUM', premium)
  const { data } = premium

  return (
    <>
      <StyledTitle>About Us</StyledTitle>
      <StyledTitle>Frequently Asked Questions</StyledTitle>
      <Markdown opions={{ forceBlock: true }}>{data.FAQ}</Markdown>
      <StyledTitle>Downloads</StyledTitle>
    </>
  )
}

export default PremiumSection
