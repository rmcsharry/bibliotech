import React from 'react'
import { withFirebase } from '../firebase'
import { navigate } from 'gatsby'
import WaitSpinner from '../components/wait-spinner'

interface IProps {
  firebase: any
}

const Redirector: React.FC<IProps> = ({ firebase }) => {
  firebase
    ?.auth()
    .getRedirectResult()
    .then(result => {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken
      }
      // The signed-in user info.
      if (result.user && typeof window !== 'undefined') {
        navigate('/manufacturers').then(_ => console.log('redirected'))
      }
    })
    .catch((error: any) => console.error(error))
  return <WaitSpinner text="Authorizing..." />
}

export default withFirebase(Redirector)
