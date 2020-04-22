import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image, { FixedObject } from 'gatsby-image'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styled from '@emotion/styled'

const StyledImage = styled.img`
  width: 120px;
  height: 60px;
  margin: 0;
`

const Header: React.FC = () => {
  return (
    <Navbar className="navbar-light bg-light" expand="lg">
      <Navbar.Brand href="#home">
        {/* could not use Gatsby <Image /> import for some reason it hates PNG's! */}
        <StyledImage src="logo.png" height="60" width="120" alt="company logo"></StyledImage>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home">
          <Nav.Link href="#">
            <span className="nav-bg">SIGN UP</span>
          </Nav.Link>
          <Nav.Link href="#">
            <span className="nav-bg">LOGIN</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
