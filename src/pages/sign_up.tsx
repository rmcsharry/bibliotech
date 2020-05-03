import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/SignInWithGoogle'
import { withFirebase } from '../Contexts/Firebase'
import WaitSpinner from '../components/WaitSpinner'
import PageTitle from '../components/PageTitle'

interface IProps {
  firebase: any
}

const SignUp: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <Layout title={'SignUp'}>
      {isShowOverlay ? <WaitSpinner /> : null}
      <PageTitle title={'Sign Up Below'} />
      <SignUpForm firebase={firebase} parentCallback={value => handleCallback(value)} />
      <h5 className="mt-4 mb-4 text-center">OR</h5>
      <SignInWithGoogle />
    </Layout>
  )
}

export default withFirebase(SignUp)
