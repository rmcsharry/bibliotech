import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LogOutButton from '../LogOutButton'
import { withAuthentication, withFirebase } from '../../Contexts/Firebase'
import IPageProps from '../../types/page-props'

interface IQuery {
  logo: {
    childImageSharp: {
      fixed: FixedObject | FixedObject[]
    }
  }
}

const Header: React.FC<IPageProps> = ({ authUser }) => {
  console.log('HEADER USER', authUser)
  const data = useStaticQuery<IQuery>(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/BibliotechLogo.png/" }) {
        childImageSharp {
          fixed(width: 200, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar className="navbar-dark bg-primary" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <Image fixed={data.logo.childImageSharp.fixed} alt={'company logo'} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home">
          {authUser ? (
            <React.Fragment>
              <Link to="/profile">
                <span className="nav-bg nav-link">Profile</span>
              </Link>
              <LogOutButton />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/sign_up">
                <span className="nav-bg nav-link">Sign Up</span>
              </Link>
              <Link to="/sign_in">
                <span className="nav-bg nav-link">Login</span>
              </Link>
            </React.Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withFirebase(withAuthentication(Header))
