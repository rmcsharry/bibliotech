import React from 'react'

import styled from '@emotion/styled'
import StyledBackgroundImage from '../StyledBackgroundImage'
import { withFirebase, withAuthentication } from '../../contexts/Firebase'
import { StyledBackgroundWrapper } from '../../helpers/StyledBackgroundWrapper'
import ManufacturerList from '../ManufacturerList'

const StyledTitle = styled.h2`
  position: absolute;
  top: 45%;
  left: 10%;
  color: white;
  text-transform: capitalize;
`
const StyledSubTitle = styled.h5`
  position: absolute;
  top: 54%;
  left: 10%;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
`

const Home = ({ authUser }) => {
  console.log('user is ', authUser)
  return (
    <>
      <StyledBackgroundImage imageName="swatches">
        <StyledBackgroundWrapper minHeight="52vh">
          <StyledTitle>Welcome to Bibliotech</StyledTitle>
          <StyledSubTitle>Your digital architectural library</StyledSubTitle>
        </StyledBackgroundWrapper>
      </StyledBackgroundImage>
      <ManufacturerList isRestricted={authUser ? false : true} />
    </>
  )
}

export default withFirebase(withAuthentication(Home))
