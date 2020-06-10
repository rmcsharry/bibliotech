import React from 'react'
import Card from 'react-bootstrap/Card'
import GoogleLogo from './google-logo.png'
import { withFirebase } from '../../contexts/Firebase'
import { style } from 'typestyle'
import { navigate } from 'gatsby'

const CardStyle = style({
  width: '18rem',
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      boxShadow: '0 0.5rem 1rem rgba(40, 0, 0, 0.3) !important',
      transform: 'scale(1.05)',
      transition: '0.2s;',
    },
  },
})
interface IProps {
  firebase: any
}

const SignInWithGoogle: React.FC<IProps> = ({ firebase }) => {
  const handleClick = () => {
    let provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    provider.setCustomParameters({ prompt: 'select_account' })
    firebase.auth().signInWithRedirect(provider)
    if (typeof window !== 'undefined') navigate('/redirector')
  }

  return (
    <Card onClick={() => handleClick()} className={`${CardStyle} p-3 p-sm-3 p-md-3 shadow mx-auto`}>
      <span className="text-uppercase">
        <img src={GoogleLogo} height="40" className="mr-4" />
        Sign In with Google
      </span>
    </Card>
  )
}

export default withFirebase(SignInWithGoogle)
