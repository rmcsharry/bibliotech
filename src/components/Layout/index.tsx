import React from 'react'
import { Link, navigate } from 'gatsby'
import { WindowLocation } from '@reach/router'
import Header from '../Header'
import Footer from '../Footer'

import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'
import SEO from '../SEO'
import { FirebaseContext, withFirebase, withAuthentication } from '../FirebaseProvider'

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

interface IProps {
  authUser: any
  firebase: any
  location?: WindowLocation
  title: string
  children: any
}

const Layout: React.FC<IProps> = ({ authUser, firebase, title, location, children }) => {
  let pageTitle = (
    <h3
      style={{
        textAlign: 'center',
        marginTop: '3rem',
        marginBottom: '2rem',
      }}
    >
      {title}
    </h3>
  )

  const isUserSignedIn = fb => {
    // fb.auth()
    //   .getRedirectResult()
    //   .then(function (result) {
    //     if (result.credential) {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       var token = result.credential.accessToken
    //       // ...
    //     }
    //     // The signed-in user info.
    //     // if (result.user) navigate('/manufacturers')
    //   })
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code
    //     var errorMessage = error.message
    //     // The email of the user's account used.
    //     var email = error.email
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential
    //     // ...
    //   })
    return true
  }

  return (
    <>
      {isUserSignedIn(firebase) ? (
        <StyledApp>
          {console.log('USER', authUser)}
          {/* {firebase.auth().createUserWithEmailAndPassword('rmcsharry+firebase@gmail.com', 'test1234!test')} */}
          <SEO title={title} />
          <Header firebase={firebase} />
          <Container fluid>
            <header>{pageTitle}</header>
            <main>{children}</main>
          </Container>
          <Footer />
        </StyledApp>
      ) : null}
    </>
  )
}

export default withFirebase(withAuthentication(Layout))
