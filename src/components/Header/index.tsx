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
import { mq } from '../../helpers/mq'

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
const StyledInput = styled.input`
  background: white;
  color: black;
  width: 240px;
  height: 30px;
  position: absolute;
  left: 50px;
  font-size: 10px;
  z-index: 9999;
  margin-top: 10px;

  ${mq('lg')} {
    font-size: 12px;
    width: 340px;
    position: absolute;
    right: 20px;
    left: auto;
  }
`
const StyledIcon = styled.span`
  font-size: 13px;
  left: 270px;
  position: absolute;
  top: 15px;
  z-index: 9999;

  ${mq('lg')} {
    font-size: 14px;
    position: absolute;
    right: 30px;
    top: 14px;
    left: auto;
  }
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
            {/* <Image fixed={data.logo.childImageSharp.fixed} alt={'company logo'} /> */}
            <Image
              style={{ marginTop: '5px', marginLeft: '-10px' }}
              fixed={data.logoMobile.childImageSharp.fixed}
              alt={'company logo'}
            />
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
