import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { withFirebase } from '../FirebaseProvider'

const LogOutButton = ({ firebase }) => {
  const handleLogout = (a, b) => {
    console.log('LOGOUT')
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          console.log('Signed Out')
        },
        function (error) {
          console.error('Sign Out Error', error)
        },
      )
  }

  return (
    <Nav.Link href="#" onSelect={(eventKey, event) => handleLogout(eventKey, event)}>
      <span className="nav-bg">Logout</span>
    </Nav.Link>
  )
}

export default withFirebase(LogOutButton)
