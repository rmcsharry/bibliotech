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
      // The signed-in user info.
      if (result.user && typeof window !== 'undefined') {
        navigate('/manufacturers')
      }
    })
    .catch((error: any) => console.error(error))
  return <WaitSpinner text="Authorizing..." />
}

export default withFirebase(Redirector)
