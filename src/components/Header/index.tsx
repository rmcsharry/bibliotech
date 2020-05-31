import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LogOutButton from '../LogOutButton'
import { withAuthentication, withFirebase } from '../../contexts/Firebase'
import IPageProps from '../../types/page-props'
import Search from '../Search'
import styled from '@emotion/styled'

const searchIndices = [{ name: `Manufacturers`, title: `Search Results`, hitComp: `ManufacturerHit` }]

interface IQuery {
  logo: {
    childImageSharp: {
      fixed: FixedObject | FixedObject[]
    }
  }
}
const StyledInput = styled.input`
  background: white;
  color: black;
  width: 300px;
  height: 36px;
  margin-bottom: 10px;
`

const Header: React.FC<IPageProps> = ({ authUser }) => {
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
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
        <Nav activeKey="/home">
          {authUser ? (
            <React.Fragment>
              <Link to="/manufacturers">
                <span className="nav-bg nav-link">All</span>
              </Link>
              <Link to="/favorites">
                <span className="nav-bg nav-link">Favorites</span>
              </Link>
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
          <Link to="/contact_us">
            <span className="nav-bg nav-link">Contact Us</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
      {authUser ? (
        <Search indices={searchIndices} />
      ) : (
        <StyledInput disabled type="search" placeholder="Please login to search" aria-label="Login to search" />
      )}
    </Navbar>
  )
}

export default withFirebase(withAuthentication(Header))
