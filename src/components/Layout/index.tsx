import React from 'react'
import { Link } from 'gatsby'
import { WindowLocation } from '@reach/router'
import Header from '../Header'
import Footer from '../Footer'

import Container from 'react-bootstrap/Container'
import styled from '@emotion/styled'
import SEO from '../SEO'

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
          }}
        >
          {title}
        </h3>
      )
    }
    return (
      <StyledApp>
        <SEO title={title} />
        <Header />
        <Container fluid>
          <header>{pageTitle}</header>
          <main>{children}</main>
        </Container>
        <Footer />
      </StyledApp>
    )
  }
}

export default Layout
