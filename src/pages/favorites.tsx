import React from 'react'
import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import ManufacturerList from '../components/ManufacturerList'
import { withAuthentication } from '../contexts/Firebase'
import IPageProps from '../types/page-props'
import styled from '@emotion/styled'

const StyledHeader = styled.h4`
  text-transform: none;
  margin-left: 2rem;
  margin-top: 2.5rem;
`

const Favorites: React.FC<IPageProps> = ({ authUser }) => {
  console.log(authUser)
  return (
    <>
      <Layout title={'Favorites'}>
        <br></br>
        {authUser?.displayName ? (
          <StyledHeader>Hello, {authUser.displayName.split(' ')[0]}. Here are the companies you've saved.</StyledHeader>
        ) : (
          <StyledHeader>Here are the companies you've saved.</StyledHeader>
        )}
        <Container fluid>
          <ManufacturerList isRestricted={false} onlyFavorites={true} />
        </Container>
      </Layout>
    </>
  )
}

export default withAuthentication(Favorites)
