import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/page-title'
import { withAuthentication, withFirebase } from '../contexts/fbase'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Profile = ({ authUser }) => {
  return (
    <Layout>
      <PageTitle title={'Profile'} />
      <Container className="fluid justify-content-center">
        <Row>
          <div className="col">
            <h5>Name: {authUser?.displayName}</h5>
          </div>
        </Row>
        <Row>
          <div className="col">
            <h5>Email: {authUser?.email}</h5>
          </div>
        </Row>
        <br></br>
        <Row>
          <div className="col">
            {authUser?.providerData[0].providerId === 'password' ? (
              <p>You authorised using email/password</p>
            ) : (
              <p>You authorised via: {authUser?.providerData[0].providerId}</p>
            )}
          </div>
        </Row>
        <Row>
          <div className="col">
            <img src={authUser?.photoURL} />
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default withFirebase(withAuthentication(Profile))
