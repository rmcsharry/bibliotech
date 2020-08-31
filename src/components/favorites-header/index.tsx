import React from 'react'
import { withAuthentication } from '../../firebase'
import styled from '@emotion/styled'
import { mq } from '../../helpers/mq'
import IPageProps from '../../types/page-props'

const StyledHeader = styled.h4`
  text-transform: none;
  margin-left: 2rem;
  margin-top: 2.5rem;

  ${mq('sm')} {
    margin-top: 0;
  }
`

const FavoritesHeader: React.FC<IPageProps> = ({ authUser }) => {
  return (
    <>
      <br></br>
      {authUser?.displayName ? (
        <StyledHeader>Hello, {authUser.displayName.split(' ')[0]}. Here are the companies you've saved.</StyledHeader>
      ) : (
        <StyledHeader>Here are the companies you've saved.</StyledHeader>
      )}
    </>
  )
}

export default withAuthentication(FavoritesHeader)
