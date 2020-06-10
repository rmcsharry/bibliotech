import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import { withFirebase, withAuthentication } from '../contexts/Firebase'
import ManufacturerList from '../components/ManufacturerList'

const Manufacturers: React.FC<IPageProps> = ({ authUser, firebase }) => {
  if (!authUser) {
    if (typeof window !== 'undefined') navigate('/')
    return null
  }

  return (
    <Layout title="Manufacturers">
      <ManufacturerList isRestricted={false} />
    </Layout>
  )
}

export default withFirebase(withAuthentication(Manufacturers))
