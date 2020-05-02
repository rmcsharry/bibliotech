import React from 'react'
import { withFirebase } from '../Contexts/Firebase'
import { navigate } from 'gatsby'
import WaitSpinner from '../components/WaitSpinner'

interface IProps {
  firebase: any
}

const Redirector: React.FC<IProps> = ({ firebase }) => {
  firebase
    ?.auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        // ...
      }
      // The signed-in user info.
      if (result.user) navigate('/manufacturers')
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      // ...
    })
  return <WaitSpinner />
}

export default withFirebase(Redirector)
