import React from 'react'
import { Link } from 'gatsby'
import { WindowLocation } from '@reach/router'
import { rhythm, scale } from '../../utils/typography'
import Header from '../Header'
import Footer from '../Footer'

import Container from 'react-bootstrap/Container'

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
            ...scale(1.5),
            marginBottom: rhythm(1.5),
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
            ...scale(1.2),
            marginTop: rhythm(1),
            marginBottom: rhythm(1.25),
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
            Welcome
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <Header />
        <Container>
          <header>{pageTitle}</header>
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Layout
