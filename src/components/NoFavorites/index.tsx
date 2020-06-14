import React from 'react'
import { Link } from 'gatsby'
import StyledBackgroundImage from '../StyledBackgroundImage'
import { StyledBackgroundWrapper } from '../../helpers/StyledBackgroundWrapper'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  background: transparent;
  padding: 2rem;
  margin: 150px auto 0;
  text-align: center;
  h1 {
    color: white;
    font-weight: 400;
    text-transform: none;
  }
`
const StyledReturnContainer = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
`

export default function NoFavorites() {
  return (
    <StyledBackgroundImage imageName="coffee">
      <StyledBackgroundWrapper minHeight="66vh">
        <StyledContainer>
          <h1>Ooops! :(</h1>
          <h1>It doesn't look like you've saved any favorites. </h1>
          <h1>Bummer. Click on the star (⭐) icon at the top right of any card to add it to your favorites library</h1>
        </StyledContainer>
        <StyledReturnContainer>
          <Link to="/manufacturers" className="btn btn-primary">
            Return to the Library
          </Link>
        </StyledReturnContainer>
      </StyledBackgroundWrapper>
    </StyledBackgroundImage>
  )
}
