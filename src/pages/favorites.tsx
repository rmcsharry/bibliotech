import React from 'react'
import Layout from '../components/Layout'
import Container from 'react-bootstrap/Container'
import ManufacturerList from '../components/ManufacturerList'

const Favorites: React.FC<{}> = ({}) => {
  return (
    <>
      <Layout title={'Favorites'}>
        <ManufacturerList isRestricted={false} onlyFavorites={true} />
      </Layout>
    </>
  )
}

export default Favorites
