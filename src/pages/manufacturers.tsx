import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import IPageProps from '../types/page-props'
import { withFirebase, withAuthentication } from '../Contexts/Firebase'
import ManufacturerList from '../components/ManufacturerList'
import PageTitle from '../components/PageTitle'

const Manufacturers: React.FC<IPageProps> = ({ authUser }) => {
  if (!authUser) {
    if (typeof window !== 'undefined') navigate('/')
    return null
  }

  return (
    <Layout title="Manufacturers">
      <PageTitle title={'Manufacturers'} />
      <ManufacturerList isRestricted={false} />
    </Layout>
  )
}

export default withFirebase(withAuthentication(Manufacturers))
