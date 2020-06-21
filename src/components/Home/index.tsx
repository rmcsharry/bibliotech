import React from 'react'

import styled from '@emotion/styled'
import { navigate } from 'gatsby'
import StyledBackgroundImage from '../StyledBackgroundImage'
import { withFirebase, withAuthentication } from '../../contexts/Firebase'
import { StyledBackgroundWrapper } from '../../helpers/StyledBackgroundWrapper'

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
const StyledButton = styled.button`
  position: absolute;
  top: 64%;
  left: 10%;
  border: 1px solid white;
`
const Home = ({ authUser }) => {
  const go = e => {
    if (typeof window !== 'undefined') {
      navigate('/manufacturers')
    }
  }

  return (
    <StyledBackgroundImage imageName="swatches">
      <StyledBackgroundWrapper minHeight="82vh">
        <StyledTitle>Welcome to Bibliotech</StyledTitle>
        <StyledSubTitle>Your digital architectural library</StyledSubTitle>
        <StyledButton className="btn btn-primary" onClick={e => go(e)}>
          Click to view the library
        </StyledButton>
      </StyledBackgroundWrapper>
    </StyledBackgroundImage>
  )
}

export default withFirebase(withAuthentication(Home))
