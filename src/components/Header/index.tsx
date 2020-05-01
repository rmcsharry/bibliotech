import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
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
          <Link to="/">
            <span className="nav-bg nav-link">Home</span>
          </Link>
          <Link to="/sign_up">
            <span className="nav-bg nav-link">Sign Up</span>
          </Link>
          <Link to="/sign_in">
            <span className="nav-bg nav-link">Login</span>
          </Link>
          <LogOutButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
