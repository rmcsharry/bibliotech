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
import { StyledInput } from '../SearchBox/styles'
import { StyledIcon } from '../SearchBox/styles'
import styled from '@emotion/styled'
import { mq } from '../../helpers/mq'

const StyledMobileImage = styled(Image)`
  margin-top: 5px;
  margin-left: -10px;

  ${mq('lg')} {
    display: none !important;
  }
`
const StyledDesktopImage = styled(Image)`
  display: none !important;

  ${mq('lg')} {
    display: inline-block !important;
  }
`

const searchIndices = [{ name: `Manufacturers`, title: `Search Results`, hitComp: `ManufacturerHit` }]

interface IQuery {
  logo: {
    childImageSharp: {
      fixed: FixedObject | FixedObject[]
    }
  }
  logoMobile: {
    childImageSharp: {
      fixed: FixedObject | FixedObject[]
    }
  }
}

const Header: React.FC<IPageProps> = ({ authUser }) => {
  const data = useStaticQuery<IQuery>(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/BibliotechLogo.png/" }) {
        childImageSharp {
          fixed(width: 120, height: 44) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoMobile: file(absolutePath: { regex: "/BibliotechLogo_Mobile.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar className="navbar-dark" expand="lg" fixed="top">
        <Navbar.Brand>
          <Link to="/">
            <StyledMobileImage fixed={data.logoMobile.childImageSharp.fixed} alt={'company logo'} />
            <StyledDesktopImage fixed={data.logo.childImageSharp.fixed} alt={'company logo'} />
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
      </Navbar>
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
    </>
  )
}

export default withFirebase(withAuthentication(Header))
