import React, { useState } from 'react'
import SignUpForm from '../SignUpForm'
import Layout from '../Layout'
import SignInWithGoogle from '../SignInWithGoogle'
import { withFirebase } from '../FirebaseProvider'
import WaitSpinner from '../WaitSpinner'

interface IProps {
  firebase: any
}

const SignUp: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <>
      {isShowOverlay ? <WaitSpinner /> : null}
      <SignUpForm firebase={firebase} parentCallback={value => handleCallback(value)} />
      <h5 className="mt-4 mb-4 text-center">OR</h5>
      <SignInWithGoogle />
    </>
  )
}

export default withFirebase(SignUp)
