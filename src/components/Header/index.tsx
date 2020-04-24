import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

interface IQuery {
  logo: {
    childImageSharp: {
      fixed: FixedObject | FixedObject[]
    }
  }
}

const Header: React.FC = () => {
  const data = useStaticQuery<IQuery>(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/JMFLOGO-Site-v3.png/" }) {
        childImageSharp {
          fixed(width: 120, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar className="navbar-light bg-light" expand="lg">
      <Navbar.Brand href="/">
        <Image fixed={data.logo.childImageSharp.fixed} alt={'company logo'} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home">
          <Nav.Link href="/">
            <span className="nav-bg">Home</span>
          </Nav.Link>
          <Nav.Link href="#">
            <span className="nav-bg">Sign Up</span>
          </Nav.Link>
          <Nav.Link href="#">
            <span className="nav-bg">Login</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
