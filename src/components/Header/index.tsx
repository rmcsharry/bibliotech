import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'

import Navbar from 'react-bootstrap/Navbar'
import { Search } from 'react-bootstrap-icons/'
import Nav from 'react-bootstrap/Nav'
import LogOutButton from '../LogOutButton'
import { withAuthentication, withFirebase } from '../../contexts/Firebase'
import IPageProps from '../../types/page-props'
import SearchBox from '../SearchBox'
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
  min-width: 350px;
  height: 36px;
  margin-bottom: 10px;
`
const StyledIcon = styled.span`
  right: 30px;
  position: absolute;
  top: 25px;
`
const Header: React.FC<IPageProps> = ({ authUser }) => {
  const data = useStaticQuery<IQuery>(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/BibliotechLogo.png/" }) {
        childImageSharp {
          fixed(width: 160, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar className="navbar-dark" expand="lg" fixed="top">
      <Navbar.Brand>
        <Link to="/">
          <Image fixed={data.logo.childImageSharp.fixed} alt={'company logo'} />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
        <Nav activeKey="/home">
          <Link to="/about">
            <span className="nav-bg nav-link">About</span>
          </Link>
          {authUser ? (
            <React.Fragment>
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
                <span className="nav-bg nav-link">Sign In</span>
              </Link>
            </React.Fragment>
          )}
          <Link to="/contact_us">
            <span className="nav-bg nav-link">Contact Us</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
      {authUser ? (
        <SearchBox indices={searchIndices} user={authUser} />
      ) : (
        <>
          <StyledInput
            disabled
            type="search"
            placeholder="Please sign in or sign up to explore the library"
            aria-label="Login to search"
          />
          <StyledIcon aria-hidden="true">
            <Search></Search>
          </StyledIcon>
        </>
      )}
    </Navbar>
  )
}

export default withFirebase(withAuthentication(Header))
