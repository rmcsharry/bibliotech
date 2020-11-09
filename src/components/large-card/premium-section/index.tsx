import React, { Fragment } from 'react'

import { IPremium } from '../../../types/edge'
import { style } from 'typestyle'
import Markdown from 'markdown-to-jsx'

const TitleStyle = style({
  borderTop: '1px solid black',
  borderBottom: '1px solid black',
  padding: '0.5rem 0.5rem',
})

import styled from '@emotion/styled'
import Downloadables from './downloadables'
import Represented from './represented'
// import { mq } from '../../helpers/mq'

const StyledTitle = styled.h6`
  margin-top: 40px;
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
    <Fragment>
      {data.About_Us ? (
        <Fragment>
          <StyledTitle>About Us</StyledTitle>
          <p>{data.About_Us}</p>
        </Fragment>
      ) : null}
      {data.Is_Supplier ? (
        <Fragment>
          <StyledTitle>Companies We Represent</StyledTitle>
          <Represented companies={data.Companies_Represented}></Represented>
        </Fragment>
      ) : null}
      {data.FAQ ? (
        <Fragment>
          <StyledTitle>Frequently Asked Questions</StyledTitle>
          <Markdown opions={{ forceBlock: true }}>{data.FAQ}</Markdown>
        </Fragment>
      ) : null}
      {data.File_Downloads ? (
        <Fragment>
          <StyledTitle>Available Files</StyledTitle>
          <Downloadables downloads={data.File_Downloads}></Downloadables>
        </Fragment>
      ) : null}
    </Fragment>
  )
}

export default PremiumSection
