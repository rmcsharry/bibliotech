import React from 'react'
import { Link } from 'gatsby'
import { WindowLocation } from '@reach/router'
import Header from '../Header'
import Footer from '../Footer'

import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'
import SEO from '../SEO'
import { FirebaseContext } from '../FirebaseProvider'

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

interface IProps {
  location?: WindowLocation
  title: string
}

class Layout extends React.Component<IProps> {
  render(): JSX.Element {
    const { location, title, children } = this.props
    const pathPrefix: string | null = typeof window !== 'undefined' ? (window as any).__PATH_PREFIX__ : '' // eslint-disable-line
    const rootPath = `${pathPrefix}/`
    let pageTitle

    if (location && location.pathname === rootPath) {
      pageTitle = (
        <h1
          style={{
            marginTop: '2rem',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            I think you found a page that is not finished...
          </Link>
        </h1>
      )
    } else {
      pageTitle = (
        <h3
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            marginBottom: '3rem',
          }}
        >
          {title}
        </h3>
      )
    }
    const isUserSignedIn = fb => {
      fb.auth()
        .getRedirectResult()
        .then(function (result) {
          if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken
            // ...
          }
          // The signed-in user info.
          if (result.user) navigate
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          // ...
        })
      return true
    }

    return (
      <FirebaseContext.Consumer>
        {firebase =>
          isUserSignedIn(firebase) ? (
            <StyledApp>
              {console.log(firebase)}
              {/* {firebase.auth().createUserWithEmailAndPassword('rmcsharry+firebase@gmail.com', 'test1234!test')} */}
              <SEO title={title} />
              <Header firebase={firebase} />
              <Container fluid>
                <header>{pageTitle}</header>
                <main>{children}</main>
              </Container>
              <Footer />
            </StyledApp>
          ) : null
        }
      </FirebaseContext.Consumer>
    )
  }
}

export default Layout
