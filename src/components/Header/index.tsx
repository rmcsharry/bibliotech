import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LogOutButton from '../LogOutButton'

interface IQuery {
  logo: {
    childImageSharp: {
      fixed: FixedObject | FixedObject[]
    }
  }
}

interface IProps {
  firebase: any
}

const Header: React.FC<IProps> = ({ firebase }) => {
  const data = useStaticQuery<IQuery>(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/LegoLogo.jpeg/" }) {
        childImageSharp {
          fixed(width: 120, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar className="navbar-dark bg-primary" expand="lg">
      <Navbar.Brand href="/">
        <Image fixed={data.logo.childImageSharp.fixed} alt={'company logo'} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home">
          <Nav.Link href="/">
            <span className="nav-bg">Home</span>
          </Nav.Link>
          <Nav.Link href="/sign_up">
            <span className="nav-bg">Sign Up</span>
          </Nav.Link>
          <Nav.Link href="/sign_in">
            <span className="nav-bg">Login</span>
          </Nav.Link>
          <LogOutButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
