import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

const SignIn: React.FC<{}> = ({ children }) => {
  return (
    <Layout>
      <PageTitle title={'Login Below'} />
    </Layout>
  )
}

export default SignIn
