import React from 'react'
import { WindowLocation } from '@reach/router'
import Header from '../Header'
import Footer from '../Footer'

import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'
import SEO from '../SEO'
import { withFirebase, withAuthentication } from '../../Contexts/Firebase'

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

  return (
    <StyledApp>
      <SEO title={title} />
      <Header firebase={firebase} />
      <Container fluid>
        <header>{pageTitle}</header>
        <main>{children}</main>
      </Container>
      <Footer />
    </StyledApp>
  )
}

export default withFirebase(withAuthentication(Layout))
