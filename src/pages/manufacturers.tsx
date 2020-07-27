import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import { withFirebase, withAuthentication } from '../contexts/Firebase'
import ManufacturerList from '../components/ManufacturerList'

const Manufacturers: React.FC<IPageProps> = ({ authUser }) => {
  return (
    <Layout title="Manufacturers">
      <ManufacturerList isRestricted={authUser ? false : true} />
    </Layout>
  )
}

export default withFirebase(withAuthentication(Manufacturers))
