import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header: React.FC = () => {
  return (
    <Navbar className="navbar-light bg-light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="./JMFLOGO-Site-v3.png"
          width="120"
          height="60"
          className="m-0 d-inline-block align-top"
          alt="Dashboard Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home">
          <Nav.Link href="#">
            <span className="nav-bg">Another page</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
