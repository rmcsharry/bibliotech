import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import ManufacturerList from '../components/ManufacturerList'

const Favorites: React.FC<{}> = ({}) => {
  return (
    <>
      <Layout title={'Favorites'}>
        <PageTitle title={'Your favorites'} />
        <br></br>
        <Container fluid>
          <ManufacturerList isRestricted={false} onlyFavorites={true} />
        </Container>
      </Layout>
    </>
  )
}

export default Favorites
