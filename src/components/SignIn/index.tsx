import React, { useState } from 'react'
import SignInForm from '../SignInForm'
import SignInWithGoogle from '../SignInWithGoogle'
import { withFirebase } from '../../Contexts/Firebase'
import WaitSpinner from '../WaitSpinner'

interface IProps {
  firebase: any
}

const SignIn: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <>
      {isShowOverlay ? <WaitSpinner /> : null}
      <SignInForm firebase={firebase} parentCallback={value => handleCallback(value)} />
      <h5 className="mt-4 mb-4 text-center">OR</h5>
      <SignInWithGoogle />
    </>
  )
}

export default withFirebase(SignIn)
