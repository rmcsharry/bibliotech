import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import { withAuthentication, withFirebase } from '../contexts/Firebase'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Profile = ({ authUser }) => {
  console.log(authUser, 'auth')
  return (
    <Layout>
      <PageTitle title={'Profile'} />
      <Container className="justify-content-center">
        <Row>
          <h5>Name: {authUser?.displayName}</h5>
        </Row>
        <Row>
          <h5>Email: {authUser?.email}</h5>
        </Row>
        <br></br>
        <Row>
          {authUser?.providerData[0].providerId === 'password' ? (
            <p>You authorised using email/password</p>
          ) : (
            <p>You authorised via: {authUser?.providerData[0].providerId}</p>
          )}
        </Row>
        <Row>
          <img src={authUser?.photoURL} />
        </Row>
      </Container>
    </Layout>
  )
}

export default withFirebase(withAuthentication(Profile))
