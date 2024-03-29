import React from 'react'
import { WindowLocation } from '@reach/router'
import Header from '../Header'
import Footer from '../Footer'
import styled from '@emotion/styled'
import SEO from '../SEO'
import { withFirebase, withAuthentication } from '../../firebase'

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

const Layout: React.FC<IProps> = ({ authUser, firebase, location, children }) => {
  return (
    <StyledApp>
      <SEO />
      <Header firebase={firebase} />
      <main style={{ marginTop: '52px' }}>{children}</main>
      <Footer />
    </StyledApp>
  )
}

export default withFirebase(withAuthentication(Layout))
