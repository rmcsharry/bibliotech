import React from 'react'
import { graphql, useStaticQuery, navigate } from 'gatsby'

import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import Row from 'react-bootstrap/Row'
import ManufacturerCard from '../components/SmallCard'
import IEdge from '../types/edge'
import { withFirebase, withAuthentication } from '../components/FirebaseProvider'
import ManufacturerList from '../components/ManufacturerList'

interface IQuery {
  firms: {
    edges: [IEdge]
  }
}

const Manufacturers: React.FC<IPageProps> = ({ authUser }) => {
  if (!authUser) {
    navigate('/')
    return null
  }

  return (
    <Layout title="Manufacturers">
      <ManufacturerList isRestrictred={false} />
    </Layout>
  )
}

export default withFirebase(withAuthentication(Manufacturers))
